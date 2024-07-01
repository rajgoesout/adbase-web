export function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function Spinner() {
  return (
    <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center">
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
}

export function Logo() {
  // return (
  //   <svg
  //     width="32"
  //     height="32"
  //     viewBox="0 0 32 32"
  //     fill="none"
  //     className="text-gray-100"
  //     xmlns="http://www.w3.org/2000/svg"
  //   >
  //     <rect width="100%" height="100%" rx="16" fill="currentColor" />
  //     <path
  //       fillRule="evenodd"
  //       clipRule="evenodd"
  //       d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
  //       fill="black"
  //     />
  //   </svg>
  // );
  return (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      width="32" height="32" viewBox="0 0 400 400" enableBackground="new 0 0 32 32">
      <path fill="#1A54F4" opacity="1.000000" stroke="none"
        d="
M262.000000,401.000000 
	C174.666672,401.000000 87.833336,401.000000 1.000000,401.000000 
	C1.000000,267.666656 1.000000,134.333328 1.000000,1.000000 
	C134.333328,1.000000 267.666656,1.000000 401.000000,1.000000 
	C401.000000,134.333328 401.000000,267.666656 401.000000,401.000000 
	C354.833344,401.000000 308.666656,401.000000 262.000000,401.000000 
M307.784607,286.789062 
	C307.784607,286.789062 307.631378,286.785461 308.144684,286.546295 
	C308.353851,286.238831 308.562988,285.931335 308.783691,285.786835 
	C308.783691,285.786835 308.620392,285.792267 309.110168,285.516144 
	C309.294220,285.196747 309.478241,284.877350 309.660004,284.694092 
	C309.660004,284.694092 309.524323,284.682739 310.098236,284.485413 
	C310.406372,283.993164 310.714478,283.500916 311.008301,283.012482 
	C311.008301,283.012482 311.020111,283.027130 311.703094,282.886993 
	C312.270996,282.552429 312.972229,282.335632 313.387115,281.865936 
	C321.323181,272.881256 323.658722,253.237274 318.196777,242.302231 
	C315.399963,236.702820 312.772827,231.018753 309.985016,225.414719 
	C309.027283,223.489502 307.903046,221.630478 306.687408,219.855942 
	C305.860474,218.648834 304.509155,217.775192 303.790253,216.523849 
	C296.156738,203.236801 288.636108,189.884964 281.011353,176.592850 
	C277.884033,171.141083 274.694794,165.716995 271.302307,160.428772 
	C269.809479,158.101776 267.739075,156.145279 265.992523,154.014313 
	C265.992523,154.014313 265.963531,154.069061 266.005005,153.290924 
	C265.571289,151.880081 265.399719,150.312485 264.664032,149.082199 
	C255.424896,133.631577 247.859390,117.221916 238.110764,102.091423 
	C234.507889,96.499535 229.523758,91.763390 224.929703,86.861794 
	C223.184570,84.999832 220.765152,83.769836 218.653046,82.251808 
	C218.825043,81.787613 218.997025,81.323410 219.169006,80.859215 
	C207.228699,80.859215 195.288406,80.859215 183.348099,80.859215 
	C182.161194,83.049278 180.635376,84.096283 179.256790,85.310478 
	C174.607834,89.405083 167.466599,91.424072 167.059647,98.994598 
	C167.183014,99.123787 167.306396,99.252983 166.716812,99.418770 
	C165.921814,100.185730 164.902252,100.821815 164.367020,101.740173 
	C159.733414,109.690620 155.029404,117.607635 150.692749,125.719780 
	C148.981064,128.921661 148.145889,132.592102 146.816849,136.546707 
	C146.691605,136.659897 146.566360,136.773087 145.906738,137.009033 
	C145.275269,137.368820 144.643799,137.728592 143.541809,138.364304 
	C143.094757,138.919708 142.647720,139.475098 142.109528,140.118729 
	C142.109528,140.118729 142.008194,140.195023 141.665878,140.548904 
	C141.495895,141.004089 141.325912,141.459274 141.036438,142.695877 
	C140.829376,144.250977 140.622299,145.806061 140.259140,147.162628 
	C140.259140,147.162628 140.449295,147.328812 139.753601,147.459793 
	C138.906784,148.226959 137.825165,148.850143 137.251877,149.785049 
	C133.957672,155.157150 130.800568,160.613037 127.565445,166.021652 
	C122.883034,173.849945 118.001823,181.564957 113.513405,189.502441 
	C105.392059,203.864548 97.500748,218.356720 89.502113,232.788345 
	C89.099632,233.514526 88.605385,234.191971 88.129105,234.874847 
	C78.154602,249.175629 78.651176,266.781006 88.063843,281.257874 
	C96.242371,293.836609 108.412552,299.897644 123.093216,299.795807 
	C137.031525,299.699158 148.626373,294.272369 155.953552,281.529175 
	C161.384872,272.083252 167.484467,263.005981 172.595718,253.397141 
	C176.047836,246.907349 182.602646,242.347244 183.663361,234.288834 
	C184.038162,231.441422 186.788544,228.917679 188.413849,226.221756 
	C192.563507,219.338638 196.690384,212.441788 201.350204,204.677628 
	C207.273880,214.718292 212.763504,223.782898 218.016586,232.982574 
	C226.309219,247.505356 234.324890,262.187744 242.750107,276.632080 
	C244.315994,279.316620 247.259415,281.197723 249.566238,283.502625 
	C249.566238,283.502625 249.619263,283.501434 249.492844,284.242737 
	C250.993317,291.451050 255.800400,294.887878 262.749817,295.951508 
	C264.040009,296.148956 265.327942,296.521301 266.547943,296.991760 
	C275.736603,300.535522 284.893433,300.750946 294.812225,296.909454 
	C296.678284,296.255615 300.407257,298.835876 300.350067,293.645691 
	C300.893005,293.402222 301.435974,293.158752 302.422607,293.157806 
	C302.976105,292.449890 303.529633,291.741974 304.451660,290.608032 
	C304.647278,290.090363 304.842896,289.572693 305.002808,289.002045 
	C305.002808,289.002045 305.055573,289.038177 305.647705,288.931091 
	C306.042084,288.503113 306.436462,288.075134 306.848572,287.826141 
	C306.848572,287.826141 306.669189,287.839294 307.168213,287.570190 
	C307.372864,287.258728 307.577515,286.947266 307.784607,286.789062 
z"/>
      <path fill="#FDFEFE" opacity="1.000000" stroke="none"
        d="
M146.441116,136.886276 
	C146.566360,136.773087 146.691605,136.659897 147.131775,136.078186 
	C154.107727,123.533836 160.768753,111.458008 167.429779,99.382179 
	C167.306396,99.252983 167.183014,99.123787 167.507309,99.001625 
	C184.424957,75.172768 216.916336,76.350548 232.377670,96.906189 
	C234.861969,100.209038 236.736206,103.976593 238.832901,107.564140 
	C247.888535,123.058716 256.921997,138.566254 265.963531,154.069061 
	C265.963531,154.069061 265.992523,154.014313 266.012207,154.373123 
	C281.673187,182.030777 297.195435,209.398941 313.025574,236.587830 
	C318.021027,245.167755 320.717590,254.252945 318.700165,263.809875 
	C317.296448,270.459717 313.659424,276.638123 311.020111,283.027130 
	C311.020111,283.027130 311.008301,283.012482 310.745117,283.123230 
	C310.162720,283.716919 309.843506,284.199829 309.524323,284.682739 
	C309.524323,284.682739 309.660004,284.694092 309.391663,284.736755 
	C308.955658,285.117004 308.788025,285.454651 308.620392,285.792267 
	C308.620392,285.792267 308.783691,285.786835 308.503479,285.803833 
	C308.025970,286.142395 307.828674,286.463928 307.631409,286.785461 
	C307.631378,286.785461 307.784607,286.789062 307.497131,286.801514 
	C307.029510,287.155762 306.849335,287.497528 306.669189,287.839294 
	C306.669189,287.839294 306.848572,287.826141 306.542175,287.796631 
	C305.842377,288.190826 305.448975,288.614502 305.055573,289.038177 
	C305.055573,289.038177 305.002808,289.002045 304.716888,289.106323 
	C303.442657,289.969025 302.454346,290.727478 301.137634,291.587769 
	C298.993683,292.745483 297.178162,293.801361 295.250916,294.802612 
	C295.139191,294.747986 295.000916,294.954681 294.598145,294.967560 
	C291.486908,295.663025 288.813171,296.577911 286.064117,296.989410 
	C271.473145,299.173370 259.572479,293.930603 249.619263,283.501434 
	C249.619263,283.501434 249.566238,283.502625 249.437378,283.157990 
	C239.206924,265.583099 229.081161,248.366943 219.012985,231.117203 
	C213.189468,221.139801 207.458755,211.108246 201.533691,200.836548 
	C196.827927,207.834549 192.122284,214.009140 188.291107,220.685562 
	C177.216873,239.984039 166.941177,259.752106 155.508148,278.830139 
	C144.147003,297.788239 120.543930,303.135193 101.890312,291.941956 
	C83.406708,280.850769 77.382355,257.256042 88.273003,238.271240 
	C96.473785,223.975464 104.840813,209.775055 113.041862,195.479416 
	C122.231712,179.460220 131.317963,163.381592 140.449295,147.328812 
	C140.449295,147.328812 140.259140,147.162628 140.600677,147.065002 
	C142.114700,144.816681 143.287186,142.665985 144.680954,140.311920 
	C145.415207,139.034454 145.928162,137.960358 146.441116,136.886276 
z"/>
      <path fill="#3864D7" opacity="1.000000" stroke="none"
        d="
M140.101440,147.394302 
	C131.317963,163.381592 122.231712,179.460220 113.041862,195.479416 
	C104.840813,209.775055 96.473785,223.975464 88.273003,238.271240 
	C77.382355,257.256042 83.406708,280.850769 101.890312,291.941956 
	C120.543930,303.135193 144.147003,297.788239 155.508148,278.830139 
	C166.941177,259.752106 177.216873,239.984039 188.291107,220.685562 
	C192.122284,214.009140 196.827927,207.834549 201.533691,200.836548 
	C207.458755,211.108246 213.189468,221.139801 219.012985,231.117203 
	C229.081161,248.366943 239.206924,265.583099 249.437805,283.131470 
	C247.259415,281.197723 244.315994,279.316620 242.750107,276.632080 
	C234.324890,262.187744 226.309219,247.505356 218.016586,232.982574 
	C212.763504,223.782898 207.273880,214.718292 201.350204,204.677628 
	C196.690384,212.441788 192.563507,219.338638 188.413849,226.221756 
	C186.788544,228.917679 184.038162,231.441422 183.663361,234.288834 
	C182.602646,242.347244 176.047836,246.907349 172.595718,253.397141 
	C167.484467,263.005981 161.384872,272.083252 155.953552,281.529175 
	C148.626373,294.272369 137.031525,299.699158 123.093216,299.795807 
	C108.412552,299.897644 96.242371,293.836609 88.063843,281.257874 
	C78.651176,266.781006 78.154602,249.175629 88.129105,234.874847 
	C88.605385,234.191971 89.099632,233.514526 89.502113,232.788345 
	C97.500748,218.356720 105.392059,203.864548 113.513405,189.502441 
	C118.001823,181.564957 122.883034,173.849945 127.565445,166.021652 
	C130.800568,160.613037 133.957672,155.157150 137.251877,149.785049 
	C137.825165,148.850143 138.906784,148.226959 140.101440,147.394302 
z"/>
      <path fill="#3661DA" opacity="1.000000" stroke="none"
        d="
M265.984253,153.679993 
	C256.921997,138.566254 247.888535,123.058716 238.832901,107.564140 
	C236.736206,103.976593 234.861969,100.209038 232.377670,96.906189 
	C216.916336,76.350548 184.424957,75.172768 167.687378,99.199142 
	C167.466599,91.424072 174.607834,89.405083 179.256790,85.310478 
	C180.635376,84.096283 182.161194,83.049278 183.348099,80.859215 
	C195.288406,80.859215 207.228699,80.859215 219.169006,80.859215 
	C218.997025,81.323410 218.825043,81.787613 218.653046,82.251808 
	C220.765152,83.769836 223.184570,84.999832 224.929703,86.861794 
	C229.523758,91.763390 234.507889,96.499535 238.110764,102.091423 
	C247.859390,117.221916 255.424896,133.631577 264.664032,149.082199 
	C265.399719,150.312485 265.571289,151.880081 265.984253,153.679993 
z"/>
      <path fill="#3661DA" opacity="1.000000" stroke="none"
        d="
M311.361603,282.957062 
	C313.659424,276.638123 317.296448,270.459717 318.700165,263.809875 
	C320.717590,254.252945 318.021027,245.167755 313.025574,236.587830 
	C297.195435,209.398941 281.673187,182.030777 265.981384,154.376251 
	C267.739075,156.145279 269.809479,158.101776 271.302307,160.428772 
	C274.694794,165.716995 277.884033,171.141083 281.011353,176.592850 
	C288.636108,189.884964 296.156738,203.236801 303.790253,216.523849 
	C304.509155,217.775192 305.860474,218.648834 306.687408,219.855942 
	C307.903046,221.630478 309.027283,223.489502 309.985016,225.414719 
	C312.772827,231.018753 315.399963,236.702820 318.196777,242.302231 
	C323.658722,253.237274 321.323181,272.881256 313.387115,281.865936 
	C312.972229,282.335632 312.270996,282.552429 311.361603,282.957062 
z"/>
      <path fill="#3864D7" opacity="1.000000" stroke="none"
        d="
M249.556061,283.872070 
	C259.572479,293.930603 271.473145,299.173370 286.064117,296.989410 
	C288.813171,296.577911 291.486908,295.663025 294.483826,295.210022 
	C294.527435,295.911743 294.282684,296.383881 294.037933,296.856018 
	C284.893433,300.750946 275.736603,300.535522 266.547943,296.991760 
	C265.327942,296.521301 264.040009,296.148956 262.749817,295.951508 
	C255.800400,294.887878 250.993317,291.451050 249.556061,283.872070 
z"/>
      <path fill="#3661DA" opacity="1.000000" stroke="none"
        d="
M167.073303,99.400475 
	C160.768753,111.458008 154.107727,123.533836 147.179153,135.829437 
	C148.145889,132.592102 148.981064,128.921661 150.692749,125.719780 
	C155.029404,117.607635 159.733414,109.690620 164.367020,101.740173 
	C164.902252,100.821815 165.921814,100.185730 167.073303,99.400475 
z"/>
      <path fill="#3864D7" opacity="1.000000" stroke="none"
        d="
M144.459656,140.515289 
	C143.287186,142.665985 142.114700,144.816681 140.678711,147.164261 
	C140.622299,145.806061 140.829376,144.250977 141.246094,142.116058 
	C141.639893,141.089172 141.824051,140.642090 142.008194,140.195023 
	C142.008194,140.195023 142.109528,140.118729 142.445480,140.064545 
	C143.172974,139.992310 143.564514,139.974258 144.081635,140.096252 
	C144.207199,140.236328 144.459656,140.515289 144.459656,140.515289 
z"/>
      <path fill="#3661DA" opacity="1.000000" stroke="none"
        d="
M294.425079,296.882751 
	C294.282684,296.383881 294.527435,295.911743 294.886566,295.197144 
	C295.000916,294.954681 295.139191,294.747986 295.640381,294.778442 
	C297.382416,294.539062 298.623230,294.269257 299.864044,293.999481 
	C300.407257,298.835876 296.678284,296.255615 294.425079,296.882751 
z"/>
      <path fill="#3864D7" opacity="1.000000" stroke="none"
        d="
M300.107056,293.822571 
	C298.623230,294.269257 297.382416,294.539062 295.752136,294.833038 
	C297.178162,293.801361 298.993683,292.745483 301.275085,291.720032 
	C301.740936,291.750397 302.017914,292.012573 302.007477,292.238220 
	C301.997040,292.463867 301.978943,292.915283 301.978943,292.915283 
	C301.435974,293.158752 300.893005,293.402222 300.107056,293.822571 
z"/>
      <path fill="#3864D7" opacity="1.000000" stroke="none"
        d="
M146.173920,136.947662 
	C145.928162,137.960358 145.415207,139.034454 144.680954,140.311920 
	C144.459656,140.515289 144.207199,140.236328 144.095398,139.785004 
	C143.993179,138.918579 144.002762,138.503479 144.012329,138.088379 
	C144.643799,137.728592 145.275269,137.368820 146.173920,136.947662 
z"/>
      <path fill="#3864D7" opacity="1.000000" stroke="none"
        d="
M301.603516,291.618164 
	C302.454346,290.727478 303.442657,289.969025 304.734741,289.132812 
	C304.842896,289.572693 304.647278,290.090363 304.002563,290.931396 
	C303.041595,291.507385 302.529755,291.759979 302.017914,292.012573 
	C302.017914,292.012573 301.740936,291.750397 301.603516,291.618164 
z"/>
      <path fill="#3661DA" opacity="1.000000" stroke="none"
        d="
M302.007477,292.238220 
	C302.529755,291.759979 303.041595,291.507385 303.818298,291.144409 
	C303.529633,291.741974 302.976105,292.449890 302.200775,293.036560 
	C301.978943,292.915283 301.997040,292.463867 302.007477,292.238220 
z"/>
      <path fill="#3661DA" opacity="1.000000" stroke="none"
        d="
M143.777069,138.226349 
	C144.002762,138.503479 143.993179,138.918579 143.969818,139.644928 
	C143.564514,139.974258 143.172974,139.992310 142.491058,140.020447 
	C142.647720,139.475098 143.094757,138.919708 143.777069,138.226349 
z"/>
      <path fill="#3661DA" opacity="1.000000" stroke="none"
        d="
M141.837036,140.371964 
	C141.824051,140.642090 141.639893,141.089172 141.305847,141.725342 
	C141.325912,141.459274 141.495895,141.004089 141.837036,140.371964 
z"/>
      <path fill="#3864D7" opacity="1.000000" stroke="none"
        d="
M309.811279,284.584076 
	C309.843506,284.199829 310.162720,283.716919 310.752258,283.121338 
	C310.714478,283.500916 310.406372,283.993164 309.811279,284.584076 
z"/>
      <path fill="#3864D7" opacity="1.000000" stroke="none"
        d="
M305.351624,288.984619 
	C305.448975,288.614502 305.842377,288.190826 306.533325,287.707153 
	C306.436462,288.075134 306.042084,288.503113 305.351624,288.984619 
z"/>
      <path fill="#3864D7" opacity="1.000000" stroke="none"
        d="
M308.865295,285.654205 
	C308.788025,285.454651 308.955658,285.117004 309.392792,284.668671 
	C309.478241,284.877350 309.294220,285.196747 308.865295,285.654205 
z"/>
      <path fill="#3864D7" opacity="1.000000" stroke="none"
        d="
M307.888062,286.665894 
	C307.828674,286.463928 308.025970,286.142395 308.497681,285.722351 
	C308.562988,285.931335 308.353851,286.238831 307.888062,286.665894 
z"/>
      <path fill="#3864D7" opacity="1.000000" stroke="none"
        d="
M306.918701,287.704742 
	C306.849335,287.497528 307.029510,287.155762 307.495911,286.724915 
	C307.577515,286.947266 307.372864,287.258728 306.918701,287.704742 
z"/>
    </svg>
  )
}

export function VercelLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      aria-label="Vercel logomark"
      height="64"
      role="img"
      viewBox="0 0 74 64"
    >
      <path
        d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
