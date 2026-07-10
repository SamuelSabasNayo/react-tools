import { headers, cookies }  from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const headersList = await headers();
  console.log(headersList.get("Authorization"));

  const theme =  request.cookies.get("theme");
  console.log(theme);
  
  const cookieStore = await cookies();
  cookieStore.set("resultPerPage", "20");
  console.log(cookieStore.get("resultPerPage"));
  
  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookies": "theme=dark",
    }
  })
}


// import { NextRequest } from "next/server";

// export async function GET(request: NextRequest) {
//   const requestHeaders = new Headers(request.headers);
//   console.log(requestHeaders.get("Authorization"));

//   return new Response("Profile API data")
// }