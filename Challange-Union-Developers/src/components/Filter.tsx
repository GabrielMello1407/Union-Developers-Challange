import React from 'react'; // Importa o React
import '../styles/styles.scss'; // Importa o arquivo de estilos

interface FilterProps {
  onFilterChange: (value: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  // Função para lidar com a mudança no input de filtro
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
