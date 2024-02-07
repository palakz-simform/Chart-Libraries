<template>
  <div class="graphs">
    <h1>Pyramid Chart</h1>
    <PyramidChart class="graph" />
    <h1>Lined Chart</h1>
    <LinedChart class="graph" />
    <h1>Area Chart</h1>
    <AreaChart class="graph" />
    <h1>Column Chart</h1>
    <ColumnChart class="graph" />
    <h1>Bar Chart</h1>
    <BarChart class="graph" />
    <h1>Timeline Chart</h1>
    <TimelineChart class="graph" />
    <h1>Donut Chart</h1>
    <DonutChart class="graph" />
    <h1>Radar Chart</h1>
    <RadarChart class="graph" />
  </div>
</template>

<script setup>
import PyramidChart from '@/components/apexCharts/1pyramidChart.vue'
import LinedChart from '@/components/apexCharts/2LinedChart.vue'
import AreaChart from '@/components/apexCharts/3AreaChart.vue'
import ColumnChart from '@/components/apexCharts/4ColumnChart.vue'
import BarChart from '@/components/apexCharts/5BarChart.vue'
import TimelineChart from '@/components/apexCharts/6TimelineChart.vue'
import DonutChart from '@/components/apexCharts/7DonutChart.vue'
import RadarChart from '@/components/apexCharts/8RadarChart.vue'
</script>
<style scoped>
.graphs {
  width: 600px;
  height: 300px;
  margin-left: 120px
}

.graph {
  margin-bottom: 80px;
}

h1 {
  text-align: center;
}
</style>