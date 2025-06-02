// src\pages\Welcome\index.js

import React from 'react';
import './styles.css';
import logo from '../../assets/images/logo.png';

import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
    <img src={logo} alt="Logo da empresa"  class = "imagem"/>
      <div className="buttons">
        <button onClick={() => navigate('/cadastro')}>Cadastrar jogador</button>
        <button onClick={() => navigate('/lista')}>Listar jogadores</button>
      </div>
    </div>
  );
};

export default Welcome;
