import React, { useState, useEffect } from 'react';
import UserData from './UserData';
import { fetchUsers } from '../services/api';

const Pages = () => {
  const resultadosPorPagina = 10; // Número de usuários por página
  const [dados, setDados] = useState([]);
  const [termoDeBusca, setTermoDeBusca] = useState('');
  const [paginaAtual, setPaginaAtual] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const usuarios = await fetchUsers();
      setDados(usuarios);
    }
    fetchData();
  }, []);

  const buscarDados = async () => {
    const usuariosFiltrados = dados.filter(
      (user) =>
        user.name.first.toLowerCase().includes(termoDeBusca.toLowerCase()) ||
        user.name.last.toLowerCase().includes(termoDeBusca.toLowerCase())
    );
    return usuariosFiltrados;
  };

  const handlePageChange = (pageNumber) => {
    setPaginaAtual(pageNumber);
  };

  useEffect(() => {
    buscarDados().then((usuariosFiltrados) => {
      const startIndex = (paginaAtual - 1) * resultadosPorPagina;
      const endIndex = startIndex + resultadosPorPagina;
      const usuariosPaginados = usuariosFiltrados.slice(startIndex, endIndex);
      setDados(usuariosPaginados);
    });
  }, [paginaAtual, termoDeBusca]);

  return (
    <div className='pages'>
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Buscar por nome de usuário...'
          value={termoDeBusca}
          onChange={(event) => setTermoDeBusca(event.target.value)}
        />
      </div>
      <UserData data={dados} />
      <div className='btn-pages'>
        {Array.from({ length: Math.ceil(dados.length / resultadosPorPagina) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            disabled={paginaAtual === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pages;
