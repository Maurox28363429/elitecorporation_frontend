import { instance } from "../";

export default async function GetUsers(page, search) {
  const { data } = await instance.get(
    "/users?page=" + page + "&limit=15&search=" + search + ""
  );
  return data;
}
