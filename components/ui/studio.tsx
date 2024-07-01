import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Analytics from './analytics';

interface Frame {
  id: number;
  frameName: string;
  description: string;
  image: File | null;
  aspectRatio: '1:1' | '1.91:1';
  textInput: boolean;
  buttonText: string;
  destination: string;
  link: string;
}

interface FormData {
  frameName: string;
  description: string;
  image: File | null;
  aspectRatio: '1:1' | '1.91:1';
  textInput: boolean;
  buttonText: string;
  destination: string;
}

const FrameStudio: React.FC = () => {
  const [frames, setFrames] = useState<Frame[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    frameName: '',
    description: '',
    image: null,
    aspectRatio: '1:1',
    textInput: false,
    buttonText: 'Shop now',
    destination: ''
  });
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [selectedFrame, setSelectedFrame] = useState<Frame | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success('Link copied to clipboard!');
    }, (err) => {
      console.log('Could not copy text: ', err);
      toast.error('Failed to copy link');
    });
  };


  useEffect(() => {
    // localStorage.clear()
    const savedFrames = localStorage.getItem('frames');
    if (savedFrames) {
      setFrames(JSON.parse(savedFrames));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prevData => ({
        ...prevData,
        image: e.target.files![0]
      }));
    }
  };

  const [targetType, setTargetType] = useState('automatic');
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleTargetTypeChange = (e: any) => {
    setTargetType(e.target.value);
  };

  const handleCountryChange = (e: any) => {
    setSelectedCountry(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newFrame: Frame = {
      ...formData,
      // link: `https://frames.neynar.co/${formData.frameName}`,
      link: `https://adframeview.vercel.app/frame/${formData.frameName}`,
      id: Date.now()
    };
    const updatedFrames = [...frames, newFrame];
    setFrames(updatedFrames);
    localStorage.setItem('frames', JSON.stringify(updatedFrames));
    toast.success('Created frame successfully');
    setShowForm(false);
    setFormData({
      frameName: '',
      description: '',
      image: null,
      aspectRatio: '1:1',
      textInput: false,
      buttonText: 'Shop now',
      destination: ''
    });
  };

  const handleAnalyticsClick = (frame: Frame) => {
    setSelectedFrame(frame);
    setShowAnalytics(true);
  };

  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-bold mb-4">Frame Studio</h1> */}
      <ToastContainer />

      {(showForm || showAnalytics) && (
        <button
          onClick={() => {
            setShowForm(false);
            setShowAnalytics(false);
          }}
          className="text-black bg-gray-300 px-4 py-2 rounded mb-4"
        >
          &larr; Back
        </button>
      )}

      {!showForm && (
        <>
          {/* <button
            onClick={() => setShowForm(true)}
            className="bg-black text-white px-4 py-2 rounded"
          >
            New +
          </button> */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Campaigns</h2>
            <button
              onClick={() => setShowForm(true)}
              className="bg-black text-white px-4 py-2 rounded"
            >
              New +
            </button>
          </div>
          <div className="mt-4">
            {/* <h2 className="text-xl font-semibold mb-2">AdFrames</h2> */}
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2 text-left">Frame Name</th>
                  <th className="border p-2 text-left">Link</th>
                  <th className="border p-2 text-left">Details</th>
                </tr>
              </thead>
              <tbody>
                {frames.map(frame => (
                  <tr key={frame.id} className="border-b">
                    <td className="p-2">{frame.frameName}</td>
                    <td className="p-2">
                      <div className="flex items-center space-x-2">
                        <a
                          href={frame.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {frame.link}
                        </a>
                        <button
                          onClick={() => copyToClipboard(frame.link)}
                          className="bg-gray-200 hover:bg-gray-300 rounded p-1"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="p-2">
                      {/* <button className="mr-2 text-blue-600">Duplicate</button> */}
                      {/* <button className="mr-2 text-green-600">Analytics</button> */}
                      <button className="bg-black text-white px-4 py-2 rounded" onClick={() => handleAnalyticsClick(frame)}>Analytics</button>
                      {/* <button className="mr-2 text-purple-600">Preview</button>
                      <button className="text-red-600">Delete</button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Campaign name</label>
            <input
              type="text"
              name="frameName"
              value={formData.frameName}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              rows={3}
              required
            />
          </div>

          {/* <div>
            <label className="block text-sm font-medium text-gray-700">Image</label>
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className="mt-1 block w-full"
              accept="image/*"
              required
            />
          </div> */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="image"
                      type="file"
                      className="sr-only"
                      onChange={handleFileChange}
                      accept="image/*"
                      required
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>

          {/* <div>
            <label className="block text-sm font-medium text-gray-700">Aspect ratio:</label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="aspectRatio"
                  value="1:1"
                  checked={formData.aspectRatio === '1:1'}
                  onChange={handleInputChange}
                  className="form-radio"
                />
                <span className="ml-2">1:1</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  name="aspectRatio"
                  value="1.91:1"
                  checked={formData.aspectRatio === '1.91:1'}
                  onChange={handleInputChange}
                  className="form-radio"
                />
                <span className="ml-2">1.91:1</span>
              </label>
            </div>
          </div> */}

          {/* <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="textInput"
                checked={formData.textInput}
                onChange={handleInputChange}
                className="form-checkbox"
              />
              <span className="ml-2 text-sm text-gray-700">Text Input</span>
            </label>
          </div> */}

          <div>
            <label className="block text-sm font-medium text-gray-700">Button Text</label>
            <input
              type="text"
              name="buttonText"
              value={formData.buttonText}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Destination URL</label>
            <input
              type="url"
              name="destination"
              value={formData.destination}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="https://example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Target Audience</label>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input
                  id="automatic"
                  name="targetType"
                  type="radio"
                  value="automatic"
                  checked={targetType === 'automatic'}
                  onChange={handleTargetTypeChange}
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="automatic" className="ml-2 block text-sm text-gray-700">
                  Automatic
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="country-specific"
                  name="targetType"
                  type="radio"
                  value="country-specific"
                  checked={targetType === 'country-specific'}
                  onChange={handleTargetTypeChange}
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="country-specific" className="ml-2 block text-sm text-gray-700">
                  Country-specific
                </label>
              </div>
            </div>
            {targetType === 'country-specific' && (
              <select
                value={selectedCountry}
                onChange={handleCountryChange}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="">Select a country</option>
                <option value="US">United States</option>
                <option value="SG">Singapore</option>
                <option value="UAE">UAE</option>
                {/* Add more countries here */}
                <option value="CA">Canada</option>
                <option value="IN">India</option>
                <option value="UK">United Kingdom</option>
              </select>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Create
            </button>
          </div>
        </form>
      )}

      {showAnalytics && selectedFrame && (
        <Analytics
          frameName={selectedFrame.frameName}
          frameLink={selectedFrame.link}
          onClose={() => setShowAnalytics(false)}
        />
      )}
    </div>
  );
};

export default FrameStudio;