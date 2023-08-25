import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.scss'; // Importação do arquivo de estilos

const UserData = ({ data }) => {
  return (
    <div className='user-list'>
      {/* Tabela para exibir dados dos usuários */}
      <table>
        {/* Cabeçalho da tabela */}
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Title</th>
            <th>Date</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        {/* Corpo da tabela */}
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td>{user.login.uuid}</td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.name.title}</td>
              <td>{user.dob.date.substring(0, 10).replace(/-/g, '/')}</td>
              <td>{user.dob.age}</td>
              <td>
                {/* Link para visualizar o perfil do usuário */}
                <Link to={`/profile/${user.login.uuid}`}>
                  <button>View Profile</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserData;
