type Depot = {
  id: string;
  name: string;
  company: string;
  depotNumber: string;
  country: string;
  city: string;
  location: string;
  timezone: string;
  totalCapacityLiters: number
};

export default async function DepotPage() {
  const depotsResponse = await fetch("http://localhost:8080/api/v1/depots", {
    method: "GET",
    headers: {
      "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxNGJiZDNhOC00NTQxLTQwODEtYjkzZi00YzNlNjU1MDIwYTQiLCJkZXBvdElkIjoiMWUyYjU4NzMtMDFkZS00NTRhLWE1NDgtMDMzYjY1NjBiNDNmIiwic2lkIjoiYzdjYmVkZDEtYzU3NS00N2ZiLWFkMDYtMWQwNzg5NDAyM2EwIiwiaWF0IjoxNzg0NjE2Mjc2LCJleHAiOjE3ODQ3MDYyNzZ9.NusMlRIR9RwmCfGPH8drU6KCj9IMpmO_WdTjp-rt3xg",
    }
  });
  const depots: Depot[] = await depotsResponse.json();

  console.log(depots);

  return (
    <ul></ul>
  );
};