import { instance } from "../";

export default async function ApiLogin(datos) {
  const { data } = await instance.post("/auth/login", datos);
  return data;
}
