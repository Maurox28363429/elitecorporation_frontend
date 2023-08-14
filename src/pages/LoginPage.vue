<template>
  <section
    class="flex flex-center fondo"
    style="height: 100vh; text-align: center"
  >
    <section>
      <q-card style="background-color: white; padding: 2em; border-radius: 10%">
        <q-img src="seguros-figura-615x.webp" style="width: 200px" />
        <h5>Sistema administrativo</h5>
        <q-input
          style="width: 300px"
          filled
          v-model="email"
          label="Email"
          lazy-rules
          :rules="[(val) => !!val || 'Correo solicitado']"
        >
          <template v-slot:prepend>
            <q-icon name="email" />
          </template>
        </q-input>
        <q-input
          style="width: 300px"
          filled
          v-model="password"
          label="Password"
          lazy-rules
          :rules="[(val) => !!val || 'Constraseña solicitada']"
        >
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>
        <q-btn
          :disable="!email || !password"
          color="primary"
          label="Ingresar"
          @click="login"
          @keyup.enter="login"
        />
      </q-card>
      <div style="margin-top: 5em">
        <q-img src="logo_phoenixtech-11.png" style="width: 150px" />
      </div>
    </section>
  </section>
</template>
<style scoped>
.fondo {
  background-image: url("banner-fondo.avif");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
}
</style>
<script setup>
import { ref, onMounted } from "vue";
import ApiLogin from "src/api/auth/login";
import { saveUser, getUser } from "src/shared/helpers/User";
import { Notify } from "quasar";
import { useRouter } from "vue-router";
const router = useRouter();
const email = ref("");
const password = ref("");
onMounted(() => {
  if (getUser()) {
    router.push("/admin/");
  }
});
const login = async () => {
  ApiLogin({
    email: email.value,
    password: password.value,
  })
    .then((response) => {
      if (response.message) {
        Notify.create({
          message: response.message,
          type: "warning",
          icon: "report_problem",
        });
      }
      if (response.data) {
        saveUser(response);
        router.push("/admin/");
      }
    })
    .catch((Error) => {
      console.log(response);
    });
};
</script>
src/api/auth/login
