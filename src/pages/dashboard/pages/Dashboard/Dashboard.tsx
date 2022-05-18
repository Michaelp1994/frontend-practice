import React from "react";
import styled from "styled-components";
import { Bar } from "recharts";

import DashboardCard from "../../components/DashboardCard";
import BarChartCard from "../../components/BarChartCard";
import PieChartCard from "../../components/PieChartCard";
import MiniCard from "../../components/MiniCard";
import { QUERIES } from "../../constants";

interface CardWrapperProps {
  colSpan?: string;
  minHeight?: string;
}

const Dashboard: React.FC = () => {
  const PieData = [
    {
      id: 1,
      name: "Group A",
      value: 300,
      color: "#FF7777",
    },
    {
      id: 2,
      name: "Group B",
      value: 300,
      color: "#2BEBC8",
    },
    {
      id: 3,
      name: "Group C",
      value: 200,
      color: "#694BDB",
    },
  ];
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
  ];
  const miniCards = [
    {
      id: 1,
      color: "#FF7777",
      data: [
        {
          name: "Page A",
          pv: 2400,
        },
        {
          name: "Page B",
          pv: 1398,
        },
        {
          name: "Page C",
          pv: 9800,
        },
        {
          name: "Page D",
          pv: 3908,
        },
        {
          name: "Page E",
          pv: 6000,
        },
        {
          name: "Page F",
          pv: 3800,
        },
        {
          name: "Page G",
          pv: 4300,
        },
      ],
    },
    {
      id: 2,
      color: "#F3C522",
      data: [
        {
          name: "Page A",
          pv: 2400,
        },
        {
          name: "Page B",
          pv: 1398,
        },
        {
          name: "Page C",
          pv: 9800,
        },
        {
          name: "Page D",
          pv: 3908,
        },
        {
          name: "Page E",
          pv: 4800,
        },
        {
          name: "Page F",
          pv: 3800,
        },
        {
          name: "Page G",
          pv: 4300,
        },
      ],
    },
    {
      id: 3,
      color: "#06AA8D",
      data: [
        {
          name: "Page A",
          pv: 2400,
        },
        {
          name: "Page B",
          pv: 1398,
        },
        {
          name: "Page C",
          pv: 9800,
        },
        {
          name: "Page D",
          pv: 3908,
        },
        {
          name: "Page E",
          pv: 4800,
        },
        {
          name: "Page F",
          pv: 3800,
        },
        {
          name: "Page G",
          pv: 4300,
        },
      ],
    },
  ];

  return (
    <Wrapper>
      <CardWrapper colSpan="2" minHeight="225px">
        <DashboardCard />
      </CardWrapper>
      <CardWrapper colSpan="1">
        <BarChartCard title="Chart Title" data={data}>
          <Bar dataKey="pv" fill="#694BDB" />
        </BarChartCard>
      </CardWrapper>
      {miniCards.map((card) => {
        return (
          <CardWrapper colSpan="1" key={card.id} minHeight="150px">
            <MiniCard
              title="Chart Title"
              statistic="2,643"
              data={card.data}
              color={card.color}
            />
          </CardWrapper>
        );
      })}
      <CardWrapper colSpan="2" minHeight="350px">
        <BarChartCard title="Chart Title" data={data}>
          <Bar dataKey="pv" fill="#694BDB" />
          <Bar dataKey="uv" fill="#2BEBC8" />
        </BarChartCard>
      </CardWrapper>
      <PieChartCard title="Chart Title" data={PieData} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  padding: 48px;
  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    flex-wrap: wrap;
  }
`;

const CardWrapper = styled.div<CardWrapperProps>`
  grid-column-end: span ${(props) => props.colSpan || "1"};
  min-height: ${(props) => props.minHeight || "250px"};
  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
  }
`;

export default Dashboard;
