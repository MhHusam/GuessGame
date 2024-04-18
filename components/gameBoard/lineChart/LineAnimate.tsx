import React, { useEffect, useRef } from "react";
import CountUp from "react-countup";
import { useDispatch, useSelector } from "react-redux";
import * as echarts from "echarts";
import { setStatusGame } from "@/redux/features/user/GameSlice";

export default function LineAnimate() {
  const TargeValue = useSelector((state: any) => state.Game.freezValue);

  const values = [
    { value: 0 },
    { value: 0.2 },
    { value: 0.4 },
    { value: 0.6 },
    { value: 0.8 },
    { value: 1.0 },
    { value: 1.2 },
    { value: 1.4 },
    { value: 1.6 },
    { value: TargeValue },
  ];

  const GamaStatus = useSelector((state: any) => state.Game.GameBegins);
  const speedValue = useSelector((state: any) => state.Game.speedLevel);
  const dispatch = useDispatch();
  function animateTime(speedValue: number) {
    return 3000 + Math.min(1000 * speedValue, 50000);
  }

  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const xAxisData = values.map((_, index) => `${index + 1}`);

    const option = {
      xAxis: {
        type: "category",
        data: xAxisData,
      },
      yAxis: {
        type: "value",
        min: 0,
        max: 10,
        show: false,
      },
      series: [
        {
          data: TargeValue != 0 ? values.map((item) => item.value) : null,
          type: "line",
          smooth: true,
          lineStyle: {
            width: 4,
            color: "#fb544e",
          },
          showSymbol: false,
          animationDuration: animateTime(speedValue),
        },
      ],
    };

    myChart.setOption(option);

    // myChart.on("finished", () => {
    //   dispatch(setStatusGame(false));
    // });

    return () => {
      myChart.dispose();
    };
  }, [TargeValue]);

  const onEnd = () => {
    dispatch(setStatusGame(false));
  };

  return (
    <div className="w-full h-full bg-card border border-cardborder rounded-lg relative">
      <div>
        <div
          className={`text-5xl font-bold absolute top-10 left-[40%] ${
            GamaStatus ? "text-[#ec4b5b]" : "text-white"
          }`}
        >
          <CountUp
            start={0}
            end={TargeValue}
            redraw={false}
            duration={animateTime(speedValue) / 1000}
            separator=" "
            decimals={2}
            decimal="."
            prefix=""
            suffix="x"
            onEnd={onEnd}
          ></CountUp>
        </div>

        <div
          className="relative"
          ref={chartRef}
          style={{
            width: "100%",
            height: "400px",
          }}
        />
      </div>
    </div>
  );
}
