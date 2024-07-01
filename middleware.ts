// export { auth as middleware } from '@/lib/auth';

// // Optionally, don't invoke Middleware on some paths
// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
// };

import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware();
export default () => {}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)", "/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
