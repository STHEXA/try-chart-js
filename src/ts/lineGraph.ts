import type { ChartConfiguration } from "chart.js";

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

export const lineConfig: ChartConfiguration<"line"> = {
  type: "line",
  data: data,
};
