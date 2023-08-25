import React from 'react';
import '../styles/styles.scss'; // Importação do arquivo de estilos

const Filter = ({ onFilterChange }) => {
  // Função para lidar com a mudança no input de filtro
  const handleInputChange = (event) => {
    const value = event.target.value;
    onFilterChange(value); // Chama a função de filtro passada como prop
  };

  return (
    <div className='filter'>
      {/* Input de pesquisa para filtrar usuários */}
      <input
        type='text'
        placeholder='Search user...'
        onChange={handleInputChange} // Define a função de manipulação de mudança
      />
    </div>
  );
};

export default Filter;
