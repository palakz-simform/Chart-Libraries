<template>
  <div class="graphs">
    <h1>Bar Chart</h1>
    <BarChart  class="graph"/>
    <h1>Bubble Chart</h1>
    <BubbleChart  class="graph"/>
     <h1>Doghnut Chart</h1>
    <Doghnut class="graph"/>
     <h1>Line Graph</h1>
    <Line class="graph"/>
     <h1>Polar Area</h1>
    <PolarArea class="graph"/>
    <h1>Radar</h1>
    <Radar class="graph"/>
    <h1>Scatter</h1>
    <Scatter class="graph"/>
    <h1>Bar Reactive</h1>
    <BarReactive class="graph"/>
  </div>
</template>

<script>
import BarChart from '@/components/chatJs/BarChart.vue'
import BubbleChart from '@/components/chatJs/BubbleChart.vue'
import Doghnut from '@/components/chatJs/Doghnut.vue'
import Line from '@/components/chatJs/Line.vue'
import PolarArea from '@/components/chatJs/PolarArea.vue'
import Radar from '@/components/chatJs/Radar.vue'
import Scatter from '@/components/chatJs/Scatter.vue'
import BarReactive from '@/components/chatJs/BarReactive.vue'
export default {
  name: 'App',
  components: { BarChart,BubbleChart,Doghnut,Line,PolarArea,Radar,Scatter,BarReactive }
}
</script>
<style scoped>
.graphs{
  width: 600px;
  height:300px;
  margin-left:120px
}
.graph{
  margin-bottom: 80px;
}
h1{
  text-align: center;
}
</style>