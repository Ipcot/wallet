import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Legend, Tooltip);

const StatisticsDoughnut = ({ operation }) => {
  const [userOperation, setUserOperation] = useState([]);
  useEffect(() => {
    setUserOperation(operation);
  }, [operation]);

  const money = userOperation.map((element) => element.money);
  const color = userOperation.map((element) => element.color);
  const data = {
    datasets: [
      {
        label: "Statistics",
        data: [...money],
        backgroundColor: [...color],
        hoverOffset: 4,
        borderWidth: 1,
        cutout: "68%",
      },
    ],
  };
  const doughnutText = {
    id: "doughnutText",
    afterDatasetsDraw(chart, args, pluginOptions) {
      const {
        ctx,
        data,
        options,
        chartArea: { top, width, height },
      } = chart;

      ctx.save();
      const moneyArray = data.datasets.map((element) => element.data);

      const flatmoneyArray = moneyArray.flat();

      const initialValue = 0;
      const money = flatmoneyArray.reduce(
        (prevValue, currentValue) => prevValue + currentValue,
        initialValue
      );
      ctx.font = "700 18px Circle";
      ctx.fillStyle = "#000000";
      ctx.textAlign = "center";
      ctx.fillText(`${money}`, width / 2, height / 2 + top);
    },
  };
  const config = {
    type: "doughnut",
    data: data,
    options: {
      maintainAspectRatio: false,
      // aspectRatio: 1,
    },
    plugins: [doughnutText],
  };

  return (
    <div style={{ width: "288px", height: "288px" }}>
      <Doughnut
        data={config.data}
        options={config.options}
        plugins={config.plugins}
      />
    </div>
  );
};

export default StatisticsDoughnut;
