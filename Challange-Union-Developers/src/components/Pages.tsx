import React, { useState, useEffect } from 'react';
import UserData from './UserData';

const Pages = () => {
  const resultsPerPage = 10;
  const apiUrl = 'https://randomuser.me/api/';
  const totalPages = 10;

  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    fetchData(currentPage, searchTerm);
  }, [currentPage, searchTerm]);

  const fetchData = async (page, searchTerm) => {
    try {
      const response = await fetch(
        `${apiUrl}?page=${page}&results=${resultsPerPage}&seed=abc`
      );
      const jsonData = await response.json();
      const filteredData = searchTerm
        ? jsonData.results.filter(user =>
            user.name.first.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : jsonData.results;

      setData(filteredData);
      setTotalResults(searchTerm ? filteredData.length : totalPages * resultsPerPage);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    setCurrentPage(1);
  };

  return (
    <div className='pages'>
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Search by username...'
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <UserData data={data} />
      <div className='pagination-info'>
        <p>Displaying {data.length} of {totalResults} results</p>
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
