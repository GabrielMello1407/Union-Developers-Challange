import React, { useState, useEffect } from 'react';
import UserData from '../components/UserData';
import Filter from '../components/Filter';
import { fetchUsers } from '../services/api';

const Home = () => {
  const [allUserData, setAllUserData] = useState([]);
  const [filteredUserData, setFilteredUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterValue, setFilterValue] = useState('');
  const resultsPerPage = 10;

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setAllUserData(data);
        setFilteredUserData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const filteredData = allUserData.filter((user) =>
      user.name.first.toLowerCase().includes(filterValue.toLowerCase())
    );
    setFilteredUserData(filteredData);
    setCurrentPage(1); // Reset page to 1 when applying a filter
  }, [filterValue, allUserData]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredUserData.length / resultsPerPage);

  const renderPageButton = (page) => {
    return (
      <button
        key={page}
        onClick={() => handlePageChange(page)}
        disabled={currentPage === page}
      >
        {page}
      </button>
    );
  };

  return (
    <div className='home'>
      <h1>List Users</h1>
      <Filter onFilterChange={setFilterValue} />
      <UserData
        data={filteredUserData.slice(
          (currentPage - 1) * resultsPerPage,
          currentPage * resultsPerPage
        )}
      />
      <div className='page-buttons'>
        {Array.from({ length: totalPages }, (_, index) =>
          renderPageButton(index + 1)
        )}
      </div>
    </div>
  );
};

export default Home;
