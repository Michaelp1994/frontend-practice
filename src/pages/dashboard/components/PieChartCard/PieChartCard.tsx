import React from "react";
import styled from "styled-components";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { FiArrowUp } from "react-icons/fi";

interface Props {
  title: string;
  data: any[];
}

const Dashboard: React.FC<Props> = ({ title, data }) => {
  return (
    <Wrapper>
      <ChartTextWrapper>
        <ChartTitle>{title}</ChartTitle>
        <ChartInfo>
          <ArrowIcon />
          1.10% Since yesterday
        </ChartInfo>
      </ChartTextWrapper>
      <ResponsiveContainer>
        <PieChart data={data}>
          <Tooltip />
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius="50%"
            outerRadius="80%"
            label
          >
            {data.map((entry) => (
              <Cell key={entry.id} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  background-color: var(--card-color);
  color: var(--card-text-color);
  padding: 24px;
  border-radius: 8px;
  height: 100%;
`;
const ArrowIcon = styled(FiArrowUp)`
  display: inline-block;
  color: green;
  font-size: 1.8rem;
  padding-right: 8px;
  margin-bottom: -8px;
`;
const ChartTitle = styled.div``;
const ChartInfo = styled.div`
  font-size: ${12 / 16}rem;
`;
const ChartTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 12px;
`;
export default Dashboard;
