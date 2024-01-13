import React from 'react';
import { StatisticsContainer, StatisticsList } from './Statistics.styled';

export const Statistics = ({ options, total, positivePercentage }) => {
  return (
    <StatisticsContainer>
      <StatisticsList>
        {options.map(([key, value]) => {
          return (
            <li key={key}>
              <p>
                {key} :<span> {value}</span>
              </p>
            </li>
          );
        })}
      </StatisticsList>

      <StatisticsList>
        <li>
          <p>
            Total: <span>{total}</span>
          </p>
        </li>
        <li>
          <p>
            Positive feedback: <span>{positivePercentage}</span>
          </p>
        </li>
      </StatisticsList>
    </StatisticsContainer>
  );
};
