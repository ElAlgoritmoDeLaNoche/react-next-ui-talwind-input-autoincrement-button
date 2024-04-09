import React, { useState } from 'react';
import './css/App.css';
import { Button, Input } from "@nextui-org/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function App() {

  const [inputCount, setInputCount] = useState(1); // Estado para contar el número de inputs

  const handleAddInput = () => {
    setInputCount(inputCount + 1); // Incrementa el contador al hacer clic en el botón
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='w-28'>
          {/* Renderiza los Inputs basados en el estado inputCount */}
          {[...Array(inputCount)].map((_, index) => (
            <Input
              key={index}
              className='w-full mb-3'
              size='sm'
              type='text'
              label={`Locación ${index + 1}`}
            />
          ))}
          {/* Botón para agregar más inputs */}
          <Button className='w-full' color='primary' variant='shadow' onClick={handleAddInput}>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
