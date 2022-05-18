import React from "react";
import styled from "styled-components";
import { BarChart, ResponsiveContainer, Tooltip } from "recharts";

interface Props {
  title: string;
  data: any[];
  children: React.ReactNode;
}

const Dashboard: React.FC<Props> = ({ title, data, children }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <ResponsiveContainer>
        <BarChart data={data}>
          <Tooltip />
          {children}
        </BarChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--card-color);
  color: var(--card-text-color);
  padding: 24px;
  border-radius: 8px;
  height: 100%;
`;

export default Dashboard;
