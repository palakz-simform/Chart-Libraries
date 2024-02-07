<template>
  <div>
    <div class="nav-wrapper">
      <div class="navbar">
        <div class="name"><RouterLink :to="{ name: 'chartJs' }">Chart Library</RouterLink></div>
        <div class="options">
          <div class="option"><RouterLink :to="{ name: 'chartJs' }">ChartJs</RouterLink></div>
          <div class="option"><RouterLink :to="{ name: 'apexCharts' }">Apex Charts</RouterLink></div>
        </div>
      </div>
    </div>
   <RouterView></RouterView>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";

</script>
<style>
.nav-wrapper{
  margin: 0 auto;

}
.navbar{
  width: 100vw;
  height:80px;
  background-color: rgb(51, 51, 51);
  color: white;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  font-size: large;
  justify-content: space-between;
}
.name{
  margin-left: 5%;
}
.options{
  display: flex;
  margin-right: 5%;
}
.option{
  margin-left: 20px;
}
</style>