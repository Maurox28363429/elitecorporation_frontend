import { instance } from "..";

export default async function GetClientes(page, search) {
  const { data } = await instance.get(
    "/clientes?page=" + page + "&limit=15&search=" + search + ""
  );
  return data;
}
