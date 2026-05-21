import React from 'react';
import StatsContent from './StatsContent';
import { getAllCars } from '@/lib/data';

const Stats = async () => {
  const totalCars = await getAllCars();

  return (
    <StatsContent totalCars={totalCars} />
  );
};

export default Stats;