<template>
  <q-page class="flex">
    <section style="text-align: center">
      <q-card class="card">
        <q-img :src="chartUrl" />
      </q-card>
      <q-card class="card">
        <q-img :src="chartUrl" />
      </q-card>
      <q-card class="card">
        <q-img :src="chartUrl" />
      </q-card>
      <q-card class="card">
        <q-img :src="chartUrl" />
      </q-card>
    </section>
  </q-page>
</template>
<style scoped>
.card {
  width: 500px;
  display: inline-block;
  margin: 0.2em;
  padding: 1em;
}
</style>
<script setup>
import QuickChart from "quickchart-js";
import { ref } from "vue";
// Create a new QuickChart instance
const chart = new QuickChart();
const chartUrl = ref("");
chart.setConfig({
  type: "bar",
  data: {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Users (thousands)",
        data: [50, 60, 70, 180],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      datalabels: {
        anchor: "end",
        align: "top",
        color: "#fff",
        backgroundColor: "rgba(34, 139, 34, 0.6)",
        borderColor: "rgba(34, 139, 34, 1.0)",
        borderWidth: 1,
        borderRadius: 5,
        formatter: (value) => {
          return value + "k";
        },
      },
    },
  },
});
chartUrl.value = chart.getUrl();
</script>
