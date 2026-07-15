import { cookies } from "next/headers";

export default async function AboutPage() {
  const cookieStore = await cookies();
  const theme =  cookieStore.get("theme");
  // console.log(theme);

  // console.log("About server component");
  return <div>About page { new Date().toLocaleString() }</div>
}