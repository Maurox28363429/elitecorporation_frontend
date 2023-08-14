const saveUser = (datos) => {
  localStorage.setItem("user", JSON.stringify(datos.data));
  localStorage.setItem("token", JSON.stringify(datos.token));
};
const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
const removeUser = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};
const isLogged = () => {
  return !!getUser();
};
const editUser = (datos) => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.setItem("user", JSON.stringify(datos.data));
  localStorage.setItem("token", JSON.stringify(datos.token));
};
export { saveUser, getUser, removeUser, isLogged, editUser };
