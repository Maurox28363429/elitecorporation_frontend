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
          <th class="text-left">Email</th>
          <th class="text-left"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in clientes" :key="index">
          <td class="text-left">{{ item.id }}</td>
          <td class="text-left">{{ item.name + " " + item.last_name }}</td>
          <td class="text-left">{{ item.email }}</td>
          <td class="text-left">
            <q-btn
              icon="qr_code"
              @click="formulario(item)"
              dense
              round
              flat
              aria-label="qrcode"
            />
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
      <q-btn fab icon="add" color="primary" @click="createDialog()" />
    </q-page-sticky>
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 500px">
        <q-card-section>
          <div class="text-h6">
            {{ edit ? "Editar Cliente" : "Agregar Cliente" }}
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            filled
            v-model="client.name"
            label="Nombre"
            :dense="dense"
            class="input-form"
          />
          <q-input
            filled
            v-model="client.last_name"
            label="Apellido"
            :dense="dense"
            class="input-form"
          />
          <q-input
            filled
            v-model="client.email"
            label="Email"
            :dense="dense"
            class="input-form"
          />
          <q-select
            filled
            v-model="client.agente_id"
            :options="agentes"
            label="Agente"
            :dense="dense"
            class="input-form"
            option-value="id"
            option-label="name"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn
            flat
            :label="edit ? 'Editar Cliente' : 'Agregar Cliente'"
            @click="enviar()"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="alert">
      <q-card style="width: 400px; text-align: center">
        <q-card-section>
          <div class="text-h6">Codigo formulario</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-img
            :src="url_generate_code + url_code"
            style="width: 300px; margin: auto"
          />
          <q-input
            filled
            v-model="url_code"
            label="Codigo"
            :dense="dense"
            class="input-form"
            @click="copy()"
          >
            <template v-slot:append>
              <q-btn
                icon="content_copy"
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
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
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
import GetClientes from "src/api/clientes/GetClientes";
import CreateClientes from "src/api/clientes/CreateClientes";
import EditClientes from "src/api/clientes/EditClientes";
import SelectUsers from "src/api/users/SelectUsers";
import deleteClientes from "src/api/clientes/deleteClientes";
import { useQuasar } from "quasar";

const $q = useQuasar();
const url_generate_code = "https://quickchart.io/qr?text=";
const alert = ref(false);
const url_code = ref("");
const search = ref("");
const clientes = ref([]);
const prompt = ref(false);
const edit = ref(false);
const dense = ref(false);
const current = ref(1);
const last_page = ref(1);
const agentes = ref([]);
const client = ref({
  name: "",
  last_name: "",
  email: "",
  agente_id: "",
});
const formulario = (item) => {
  let baseUrl = "http://localhost:9000/#/admin/clientes/";
  url_code.value = baseUrl + item.id;
  alert.value = true;
};
const getData = async () => {
  const { data, paginate } = await GetClientes(current.value, search.value);
  clientes.value = data;
  last_page.value = paginate.last_page;
};
const copy = () => {
  navigator.clipboard.writeText(url_code.value);
  $q.notify({
    message: "Codigo copiado",
    type: "positive",
    icon: "check",
  });
};
const createDialog = () => {
  prompt.value = true;
  edit.value = false;
  client.value = {
    name: "",
    last_name: "",
    email: "",
    agente_id: "",
  };
};
const enviar = async () => {
  const sendData = {
    name: client.value.name,
    last_name: client.value.last_name,
    email: client.value.email,
    agente_id: client.value.agente_id.value,
  };
  if (edit.value) {
    const data = await EditClientes(sendData);
    if (data.message) {
      $q.notify({
        message: data.message,
        type: "warning",
        icon: "report_problem",
      });
    }
    if (data.data) {
      $q.notify({
        message: "Cliente editado correctamente",
        type: "positive",
        icon: "check",
      });
      prompt.value = false;
      getData();
    }
  } else {
    const data = await CreateClientes(sendData);
    if (data.message) {
      $q.notify({
        message: data.message,
        type: "warning",
        icon: "report_problem",
      });
    }
    if (data.data) {
      $q.notify({
        message: "Cliente creado correctamente",
        type: "positive",
        icon: "check",
      });
      prompt.value = false;
      getData();
    }
  }
};
const getArrayAgentes = async () => {
  const { data } = await SelectUsers();
  agentes.value = data.map((item) => {
    return {
      name: item.name + " " + item.last_name,
      value: item.id,
    };
  });
};
onMounted(async () => {
  await getData();
  await getArrayAgentes();
});
const deleteItem = async (item) => {
  const { data } = await deleteClientes(item.id);
  if (data.message) {
    $q.notify({
      message: data.message,
      type: "warning",
      icon: "report_problem",
    });
  }
  if (data.data) {
    $q.notify({
      message: "Cliente eliminado correctamente",
      type: "positive",
      icon: "check",
    });
    getData();
  }
};
</script>
