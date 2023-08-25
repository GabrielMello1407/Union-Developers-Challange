import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa o ReactDOM para renderização
import App from './App.tsx'; // Importa o componente App
import './index.css'; // Importa o arquivo de estilos
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Importa utilitários de roteamento
import Home from './routes/Home.tsx'; // Importa o componente Home
import Profile from './routes/Profile.tsx'; // Importa o componente Profile

// Cria um roteador de navegação
const router = createBrowserRouter([
  {
    element: <App />, // Elemento raiz da aplicação
    children: [
      {
        path: '/',
        element: <Home />, // Componente associado à rota '/'
      },
      {
        path: '/profile/:userId',
        element: <Profile />, // Componente associado à rota '/profile/:userId'
      },
    ],
  },
]);

// Renderiza a raiz do aplicativo usando ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Fornece o roteador ao aplicativo */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
