<template>
  <div class="q-pa-md">
    <div style="width: 80%; margin: auto">
      <q-input
        filled
        bottom-slots
        v-model="search"
        label="Buscar"
        :dense="dense"
      >
        <template v-slot:append>
          <q-btn
            icon="search"
            label="Search"
            @click="getData"
            style="
              background-color: #1a76d2;
              padding: 1.1em;
              margin: 0;
              margin-right: -0.8em;
              color: white;
            "
          />
        </template>
      </q-input>
    </div>

    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Nombre</th>
          <th class="text-left">Rol</th>
          <th class="text-left">Email</th>
          <th class="text-left"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in users" :key="index">
          <td class="text-left">{{ item.id }}</td>
          <td class="text-left">{{ item.name + " " + item.last_name }}</td>
          <td class="text-left">{{ item.rol.name }}</td>
          <td class="text-left">{{ item.email }}</td>
          <td class="text-left">
            <q-btn
              flat
              dense
              round
              icon="edit"
              aria-label="Edit"
              @click="edit_item(item)"
            />
            <q-btn
              flat
              dense
              round
              icon="delete"
              aria-label="Delete"
              @click="remove_item(item)"
            />
          </td>
        </tr>
      </tbody>
    </q-markup-table>
    <div class="q-pa-lg flex flex-center">
      <q-pagination v-model="current" :max="last_page" direction-links />
    </div>
    <q-page-sticky position="bottom-right" style="margin: 1em">
      <q-btn fab icon="add" color="primary" @click="createUserDialog()" />
    </q-page-sticky>
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 500px">
        <q-card-section>
          <div class="text-h6">
            {{ edit ? "Editar Usuario" : "Agregar Usuario" }}
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            filled
            v-model="user.name"
            label="Nombre"
            class="input-form"
            :dense="dense"
          ></q-input>
          <q-input
            filled
            v-model="user.last_name"
            label="Apellido"
            class="input-form"
            :dense="dense"
          ></q-input>
          <q-input
            filled
            v-model="user.email"
            label="Email"
            class="input-form"
            :dense="dense"
          ></q-input>
          <q-input
            filled
            v-model="user.password"
            label="Password"
            :dense="dense"
            class="input-form"
          ></q-input>
          <q-select
            filled
            v-model="user.rol_id"
            :options="roles"
            label="Rol"
            :dense="dense"
            class="input-form"
            option-value="value"
            option-label="label"
          ></q-select>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn
            flat
            :label="edit ? 'Editar Usuario' : 'Agregar Usuario'"
            @click="enviar()"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<style scoped>
.input-form {
  width: 100%;
  margin-bottom: 1em;
}
</style>
<script setup>
import { ref, onMounted, watch } from "vue";
import GetUsers from "src/api/users/GetUsers";
import GetRoles from "src/api/roles/GetRoles";
import CreateUser from "src/api/users/CreateUser";
import EditUser from "src/api/users/EditUser";
import DeleteUser from "src/api/users/DeleteUser";
import { useQuasar } from "quasar";
const $q = useQuasar();
const current = ref(1);
const last_page = ref(1);
const search = ref("");
const users = ref([]);
const prompt = ref(false);
const edit = ref(false);
const roles = ref([]);
const remove_item = async (item) => {
  $q.dialog({
    title: "Aviso de confirmación",
    message: "Desea eliminar el usuario seleccionado?",
    cancel: true,
    persistent: true,
  })
    .onOk(async () => {
      await DeleteUser(item.id).then((response) => {
        if (response.status == 200) {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Usuario eliminado correctamente",
          });
        } else {
          $q.notify({
            color: "red-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Error al eliminar el usuario",
          });
        }
      });
      await getData();
    })
    .onCancel(() => {
      // console.log('>>>> Cancel')
    });
};
const GetArrayRoles = async () => {
  const { data } = await GetRoles();
  roles.value = data.map((item) => {
    return {
      label: item.name,
      value: item.id,
    };
  });
};
const enviar = async () => {
  let formularioData = JSON.parse(JSON.stringify(user.value));
  if (formularioData.rol) {
    delete formularioData.rol;
  }
  formularioData.rol_id = user.value.rol_id.value;
  if (edit.value) {
    await EditUser(formularioData.id, formularioData).then((response) => {
      prompt.value = false;
      if (response.status == 200) {
        $q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Usuario editado correctamente",
        });
        user.value = {
          name: "",
          last_name: "",
          email: "",
          password: "",
          rol_id: "",
        };
      } else {
        $q.notify({
          color: "red-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Error al editar el usuario",
        });
      }
    });
  } else {
    await CreateUser(formularioData).then((response) => {
      prompt.value = false;
      if (response.status == 200) {
        $q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Usuario creado correctamente",
        });
        user.value = {
          name: "",
          last_name: "",
          email: "",
          password: "",
          rol_id: "",
        };
      } else {
        $q.notify({
          color: "red-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Error al crear el usuario",
        });
      }
    });
  }
  await getData();
};
const user = ref({
  name: "",
  last_name: "",
  email: "",
  password: "",
  rol_id: "",
});
const edit_item = (item) => {
  prompt.value = true;
  edit.value = item.id;
  user.value = item;
  user.value.rol_id = {
    label: item.rol.name,
    value: item.rol.id,
  };
};
const getData = async () => {
  const { data, paginate } = await GetUsers(current.value, search.value);
  last_page.value = paginate.last_page;
  users.value = data;
  current.value = paginate.current_page;
};
const createUserDialog = () => {
  prompt.value = true;
  edit.value = false;
  user.value = {
    name: "",
    last_name: "",
    email: "",
    password: "",
    rol_id: "",
  };
};
onMounted(async () => {
  await getData();
  await GetArrayRoles();
});
</script>
