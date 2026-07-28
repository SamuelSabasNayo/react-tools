import EditDepotForm from "./depot-edit-form";

function getDepot(id) {
  // const id = "1";
  return id;
}
export default async function EditDepotPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const depot = await getDepot(parseInt(id));

  return <EditDepotForm depot={depot} />
};