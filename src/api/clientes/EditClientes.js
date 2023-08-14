import { instance } from "..";

export default async function EditClientes(id, datos) {
  const { data } = await instance.put("/clientes/update/" + id, datos);
  return data;
}
