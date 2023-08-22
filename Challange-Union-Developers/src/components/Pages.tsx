import React, { useState, useEffect } from 'react';
import UserData from './UserData';

const Pages = () => {
  const resultsPerPage = 10;
  const apiUrl = 'https://randomuser.me/api/';
  const totalPages = 10; // Total number of pages

  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page) => {
    try {
      const response = await fetch(
        `${apiUrl}?page=${page}&results=${resultsPerPage}&seed=abc${
          searchTerm ? `&name=${searchTerm}` : ''
        }`
      );
      const jsonData = await response.json();
      setData(jsonData.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Search by username...'
          value={searchTerm}
          onChange={handleSearchChange}
        />
      <div className='pages'>
      <UserData data={data} />
      </div>
      <div className='btn-pages'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pages;
