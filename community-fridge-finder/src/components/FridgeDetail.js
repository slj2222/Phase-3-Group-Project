import React from 'react';
import { useParams } from 'react-router-dom';

export default function FridgeDetail() {
  const params = useParams();
  return (
    <div>This is the fridge with id: {params.id}</div>
  )
}
