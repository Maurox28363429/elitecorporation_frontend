import { instance } from "../";

export default async function CreateUser(datos) {
  const { data } = await instance.post("/users/create", datos);
  return data;
}
