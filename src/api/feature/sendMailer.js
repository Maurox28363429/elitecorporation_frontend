import { instance } from "..";

export default async function sendMailer(datos) {
  const { data } = await instance.post("/mailer", datos);
  return data;
}
