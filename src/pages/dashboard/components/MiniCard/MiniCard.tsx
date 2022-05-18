import React from "react";
import styled from "styled-components";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { FiArrowUp } from "react-icons/fi";

interface Props {
  title: string;
  statistic: string;
  color: string;
  data: any[];
}

const Dashboard: React.FC<Props> = ({ color, data, title, statistic }) => {
  return (
    <Wrapper>
      <LeftWrapper>
        <ChartTitle>{title}</ChartTitle>
        <ChartStatistic>{statistic}</ChartStatistic>
        <ChartChange>
          <ArrowIcon />
          1.10% Since yesterday
        </ChartChange>
      </LeftWrapper>
      <RightWrapper>
        <ResponsiveContainer width="100%" height={140}>
          <LineChart data={data}>
            <Tooltip />
            <Line type="monotone" dataKey="pv" stroke={color} />
          </LineChart>
        </ResponsiveContainer>
      </RightWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  background-color: var(--card-color);
  color: var(--card-text-color);
  padding: 24px;
  border-radius: 8px;
  min-height: 150px;
  height: 100%;
`;

const ChartTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 600;
  font-size: ${12 / 16}rem;
`;

const ArrowIcon = styled(FiArrowUp)`
  display: inline-block;
  color: green;
  font-size: 1.8rem;
  padding-right: 8px;
  margin-bottom: -8px;
`;

const ChartChange = styled.h2`
  /* margin-top: 18px; */
`;

const ChartStatistic = styled.h1`
  font-size: ${22 / 16}rem;
  margin: 12px 0px;
  font-weight: 700;
`;

const LeftWrapper = styled.div`
  flex: 1;
`;

const RightWrapper = styled.div`
  flex: 1;
`;

export default Dashboard;
