<template>
  <div class="h-full line-chart">
    <div class="h-32">
      <canvas ref="myChart"></canvas>
    </div>
  </div>
</template>

<script>
import {
  Chart,
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
} from 'chart.js';

Chart.register(
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
);
let chart;
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    }
  },
}
export default {
  name: "Chart",
  props: {
    token: {
      default: 1,
      type: Number
    }
  },
  methods: {
    async loadData() {
      const ctx = this.$refs['myChart'];
      if (this.token) {
        if (chart) {
          chart.destroy();
        }
        const res = {
          results: [
            {time_check: "12/11", price_avg: 2},
            {time_check: "13/11", price_avg: 10},
            {time_check: "14/11", price_avg: 1}
          ]
        }
        const labels = [];
        const data = [];
        const range = Math.floor(res.results.length / 3);
        let start = 0;
        res.results.forEach(item => {
          if (start % range === 0) {
            labels.unshift(item.time_check);
          } else {
            labels.unshift("");
          }
          data.unshift(item.price_avg);
          start++;
        });
        chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              data: data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: options
        });
      }
    }
  },
  mounted() {
    this.loadData()
  }
}
</script>

<style scoped>

</style>
