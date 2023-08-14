import { instance } from "..";

export default async function selectClientes() {
  const { data } = await instance.get("/clientes/select");
  return data;
}
