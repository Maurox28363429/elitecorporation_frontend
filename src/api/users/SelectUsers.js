import { instance } from "../";

export default async function SelectUsers() {
  const { data } = await instance.get("/users/select");
  return data;
}
