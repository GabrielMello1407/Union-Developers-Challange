// Importação das bibliotecas e componentes necessários
import React, { useState, useEffect } from 'react';
import UserData from '../components/UserData'; // Importa o componente UserData
import Filter from '../components/Filter'; // Importa o componente Filter
import { fetchUsers } from '../services/api'; // Importa a função fetchUsers do serviço de API
import '../styles/styles.scss'; // Importa os estilos SCSS

// Componente funcional Home
const Home = () => {
  // Estado para armazenar todos os dados dos usuários
  const [allUserData, setAllUserData] = useState([]);
  // Estado para armazenar os dados dos usuários filtrados
  const [filteredUserData, setFilteredUserData] = useState([]);
  // Estado para armazenar a página atual
  const [currentPage, setCurrentPage] = useState(1);
  // Estado para armazenar o valor do filtro
  const [filterValue, setFilterValue] = useState('');
  // Número de resultados por página
  const resultsPerPage = 10;
  // Número de páginas a serem mostradas
  const pagesToShow = 5;

  // Efeito de carregamento inicial para buscar os dados dos usuários
  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setAllUserData(data);
        setFilteredUserData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  // Efeito para filtrar os dados quando o valor do filtro ou os dados dos usuários mudarem
  useEffect(() => {
    const filteredData = allUserData.filter((user) =>
      user.name.first.toLowerCase().includes(filterValue.toLowerCase())
    );
    setFilteredUserData(filteredData);
    setCurrentPage(1); // Reinicia a página para 1 ao aplicar um filtro
  }, [filterValue, allUserData]);

  // Função para lidar com a troca de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calcula o número total de páginas
  const totalPages = Math.ceil(filteredUserData.length / resultsPerPage);
  // Calcula o número total de botões a serem mostrados
  const totalButtons = Math.min(totalPages, pagesToShow);

  // Função para renderizar os botões de página
  const renderPageButton = (page, symbol) => {
    const isActive = currentPage === page;

    return (
      <button
        key={page}
        onClick={() => handlePageChange(page)}
        className={isActive ? 'active' : ''}
      >
        {symbol}
      </button>
    );
  };

  // Função para obter os botões de página a serem mostrados
  const getPageButtons = () => {
    const pageButtons = [];

    if (currentPage > Math.floor(pagesToShow / 2)) {
      const startPage = currentPage - Math.floor(pagesToShow / 2);
      const endPage = currentPage + Math.floor(pagesToShow / 2);
      for (let i = startPage; i <= endPage; i++) {
        if (i > 0 && i <= totalPages) {
          pageButtons.push(renderPageButton(i, i));
        }
      }
    } else {
      for (let i = 1; i <= totalButtons; i++) {
        pageButtons.push(renderPageButton(i, i));
      }
    }

    return pageButtons;
  };

  // Renderiza o componente Home
  return (
    <div className='home'>
      <h1>List Users</h1>
      {/* Renderiza o componente Filter com a função de atualização do filtro */}
      <Filter onFilterChange={setFilterValue} />
      {/* Renderiza o componente UserData com os dados dos usuários filtrados */}
      <UserData
        data={filteredUserData.slice(
          (currentPage - 1) * resultsPerPage,
          currentPage * resultsPerPage
        )}
      />
      <div className='page-buttons'>
        {/* Botão para página anterior */}
        {renderPageButton(currentPage - 1, '<')}
        {/* Renderiza os botões de página */}
        {getPageButtons()}
        {/* Botão para próxima página */}
        {renderPageButton(currentPage + 1, '>')}
      </div>
    </div>
  );
};

// Exporta o componente Home como padrão
export default Home;
