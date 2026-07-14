// import { clientSideFunction } from "@/utils/client-utils";
import { serverSideFunction } from "@/utils/server-utils"

export default function ServerRoutePage() {
  const serverResult = serverSideFunction();
  // const clientResult = clientSideFunction();

  return <h1>Server Route {serverResult} and {}</h1>
}