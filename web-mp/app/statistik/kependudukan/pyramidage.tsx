import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import DataPopulasi from "@/data/populasi.json";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function PyramidPopulation() {
  const data = {
    labels: [
      "0-4",
      "5-9",
      "10-14",
      "15-19",
      "20-24",
      "25-29",
      "30-34",
      "35-39",
      "40-44",
      "45-49",
      "50-54",
      "55-59",
      "60-64",
      "65-69",
      "70-74",
      "75-79",
      "80+",
    ],
    datasets: [
      {
        label: "Male",
        data: Object.values(DataPopulasi.men.age),
        backgroundColor: "rgba(0, 123, 255, 0.5)",
      },
      {
        label: "Female",
        data: Object.values(DataPopulasi.women.age).map((value) => -value),
        backgroundColor: "rgba(255, 0, 123, 0.5)",
      },
    ],
  };

  const options = {
    indexAxis: "y",
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context: any) {
            var label = context.dataset.label || "";

            if (label) {
              label += ": ";
            }
            if (context.parsed.x !== null) {
              label += Math.abs(context.parsed.x);
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <Bar
      data={data}
      // @ts-ignore
      options={options}
      style={
        // make height 100%
        { height: "100%" }
      }
    />
  );
}

type AgeDistribution = {
  "0_4": number;
  "5_9": number;
  "10_14": number;
  "15_19": number;
  "20_24": number;
  "25_29": number;
  "30_34": number;
  "35_39": number;
  "40_44": number;
  "45_49": number;
  "50_54": number;
  "55_59": number;
  "60_64": number;
  "65_69": number;
  "70_74": number;
  "75+": number;
};

type GenderData = {
  total: number;
  age: AgeDistribution;
};

type PopulationData = {
  total: number;
  married: number;
  unmarried: number;
  divorced_live: number;
  divorced_dead: number;
  wni: number;
  wna: number;
  not_nik: number;
  not_kk: number;
  last_update: string;
  men: GenderData;
  women: GenderData;
};
