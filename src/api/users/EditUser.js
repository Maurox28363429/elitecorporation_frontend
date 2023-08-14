import { instance } from "../";

export default async function EditUser(id, datos) {
  const { data } = await instance.put("/users/update/" + id, datos);
  return data;
}
