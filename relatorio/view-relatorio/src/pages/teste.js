import React, { useState, useEffect } from 'react';

import api from '../services/api';

export default function Teste() 
{
  const [data, setData] = useState

  useEffect(() => {
    api.get('/8993')
      .then((response) => setData(response.data))
      .catch((err) => {
        console.error('algo errado com a requisição' + err);
      });
  })

  return (
    <div>
      <p>OC: {data?.Id} </p>
      <p>Cliente: {data?.CdCliente}</p>
    </div>
  );
}
