import { instance } from "..";

export default async function deleteClientes(id) {
  const { data } = await instance.delete("/clientes/delete/" + id);
  return data;
}
