import { instance } from "../";

export default async function GetRoles(page, search) {
  page = page || 1;
  search = search || "";
  const { data } = await instance.get(
    "/roles?page=" + page + "&limit=30&search=" + search + ""
  );
  return data;
}
