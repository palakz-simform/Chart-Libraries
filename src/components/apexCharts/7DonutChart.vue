<template>
  <div id="chart">
    <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const series = ref([44, 55, 41, 17, 15])
const chartOptions = ref({
  chart: {
    type: 'donut',
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 90,
      offsetY: 10
    }
  },
  grid: {
    padding: {
      bottom: -80
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
})
</script>