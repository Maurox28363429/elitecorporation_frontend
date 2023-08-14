<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <q-img src="logo-white2.png.png" alt="" style="width: 60px" />
        </q-toolbar-title>

        <div>Elite Corporation</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          <div style="text-align: center">
            <q-img src="logo.png" alt="" style="width: 100px" />
          </div>
        </q-item-label>
        <q-item v-for="item in menu" :key="item.name" clickable :to="item.path">
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section>{{ item.name }}</q-item-section>
        </q-item>
        <q-item clickable href="/download.pdf" target="_blank">
          <q-item-section avatar>
            <q-icon name="auto_stories" />
          </q-item-section>
          <q-item-section> Manual 1 </q-item-section>
        </q-item>
        <q-item
          clickable
          href="/SHOWBOOK  Panamá 2022 Actualizado Dic 2022.pdf"
          target="_blank"
        >
          <q-item-section avatar>
            <q-icon name="auto_stories" />
          </q-item-section>
          <q-item-section> Manual 2 </q-item-section>
        </q-item>
        <q-item clickable @click="logout">
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section> Salir </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { onMounted, ref } from "vue";
import AdminMenu from "src/shared/consts/AdminMenu";
import { useRouter } from "vue-router";
import { getUser, removeUser, isLogged } from "src/shared/helpers/User";
const $router = useRouter();
onMounted(() => {
  if (!isLogged()) {
    logout();
  }
});
const logout = () => {
  removeUser();
  $router.push("/login");
};
const menu = ref(AdminMenu);
const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
