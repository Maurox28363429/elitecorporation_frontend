<template>
  <div class="q-pa-md">
    <section class="row" style="margin: 1em">
      <div class="col-10" style="margin-top: 2em">
        <q-input
          filled
          bottom-slots
          v-model="text"
          label="Label"
          :dense="dense"
        >
          <template v-slot:append>
            <q-btn
              icon="search"
              label="Search"
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
      <div style="text-align: center" class="col-2">
        <q-img
          src="https://quickchart.io/qr?text=12345"
          style="width: 100px; height: auto"
        />
        <br />
        <span style="font-size: 1em">Scan or Click Me</span>
      </div>
    </section>
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">Dessert (100g serving)</th>
          <th class="text-right">Calories</th>
          <th class="text-right">Fat (g)</th>
          <th class="text-right">Carbs (g)</th>
          <th class="text-right">Protein (g)</th>
          <th class="text-right">Sodium (mg)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-left">Frozen Yogurt</td>
          <td class="text-right">159</td>
          <td class="text-right">6</td>
          <td class="text-right">24</td>
          <td class="text-right">4</td>
          <td class="text-right">87</td>
        </tr>
        <tr>
          <td class="text-left">Ice cream sandwich</td>
          <td class="text-right">237</td>
          <td class="text-right">9</td>
          <td class="text-right">37</td>
          <td class="text-right">4.3</td>
          <td class="text-right">129</td>
        </tr>
        <tr>
          <td class="text-left">Eclair</td>
          <td class="text-right">262</td>
          <td class="text-right">16</td>
          <td class="text-right">23</td>
          <td class="text-right">6</td>
          <td class="text-right">337</td>
        </tr>
        <tr>
          <td class="text-left">Cupcake</td>
          <td class="text-right">305</td>
          <td class="text-right">3.7</td>
          <td class="text-right">67</td>
          <td class="text-right">4.3</td>
          <td class="text-right">413</td>
        </tr>
        <tr>
          <td class="text-left">Gingerbread</td>
          <td class="text-right">356</td>
          <td class="text-right">16</td>
          <td class="text-right">49</td>
          <td class="text-right">3.9</td>
          <td class="text-right">327</td>
        </tr>
      </tbody>
    </q-markup-table>
    <div class="q-pa-lg flex flex-center">
      <q-pagination v-model="current" :max="5" direction-links />
    </div>
    <q-page-sticky position="bottom-right" style="margin: 1em">
      <q-btn fab icon="add" color="primary" />
    </q-page-sticky>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
</script>
