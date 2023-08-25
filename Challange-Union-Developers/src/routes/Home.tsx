import React, { useState, useEffect } from 'react';
import UserData from '../components/UserData';
import Filter from '../components/Filter';
import { fetchUsers } from '../services/api';
import '../styles/styles.scss';

interface User {
  login: {
    uuid: string;
  };
  name: {
    first: string;
    last: string;
    title: string;
  };
  dob: {
    date: string;
    age: number;
  };
}

const Home: React.FC = () => {
  const [allUserData, setAllUserData] = useState<User[]>([]);
  const [filteredUserData, setFilteredUserData] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filterValue, setFilterValue] = useState<string>('');
  const resultsPerPage = 10;
  const pagesToShow = 5;

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
    setCurrentPage(1);
  }, [filterValue, allUserData]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredUserData.length / resultsPerPage);
  const totalButtons = Math.min(totalPages, pagesToShow);

  const renderPageButton = (page: number, symbol: string) => {
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

  const getPageButtons = () => {
    const pageButtons = [];

    if (currentPage > Math.floor(pagesToShow / 2)) {
      const startPage = currentPage - Math.floor(pagesToShow / 2);
      const endPage = currentPage + Math.floor(pagesToShow / 2);
      for (let i = startPage; i <= endPage; i++) {
        if (i > 0 && i <= totalPages) {
          pageButtons.push(renderPageButton(i, i.toString()));
        }
      }
    } else {
      for (let i = 1; i <= totalButtons; i++) {
        pageButtons.push(renderPageButton(i, i.toString()));
      }
    }

    return pageButtons;
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
        {renderPageButton(currentPage - 1, '<')}
        {getPageButtons()}
        {renderPageButton(currentPage + 1, '>')}
      </div>
    </div>
  );
};

export default Home;
