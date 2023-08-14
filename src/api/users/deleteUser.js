import { instance } from "..";

export default async function deleteUser(id) {
  const { data } = await instance.delete("/users/delete/" + id);
  return data;
}
