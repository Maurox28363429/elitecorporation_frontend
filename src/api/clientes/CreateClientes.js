import { instance } from "..";

export default async function CreateClientes(datos) {
  const { data } = await instance.post("/clientes/create", datos);
  return data;
}
