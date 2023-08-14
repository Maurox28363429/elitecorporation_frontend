import { instance } from "..";

export default async function DeleteUser(id) {
  const { data } = await instance.delete("/users/delete/" + id);
  return data;
}
