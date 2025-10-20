import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useGlobalContext } from '@/context/GlobalContext';
import { useTheme } from '@/theme/useTheme';

const settings = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  hideLegend: true,
};

export default function DonutChart() {
  const { colors } = useTheme()
  const { data } = useGlobalContext()
  const todo = data.filter((item) => item.status === 1).length
  const inProgress = data.filter((item) => item.status === 2).length
  const completed = data.filter((item) => item.status === 3).length
  const stats = [
    { label: 'ToDo', value: todo, color: colors.pie1 },
    { label: 'In Progress', value: inProgress, color: colors.pie2 },
    { label: 'Completed', value: completed, color: colors.pie3 },
  ];
  return (
    <PieChart
      series={[{ innerRadius: 50, outerRadius: 100, data: stats, arcLabel: 'value' }]}
      {...settings}
    />
  );
}
