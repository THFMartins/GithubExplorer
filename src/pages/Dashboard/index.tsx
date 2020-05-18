import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositorios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/59912034?s=460&u=c1b901db213502e9cd87e006ae9c243e316c3f5a&v=4"
            alt="Thiago Farias Martins"
          />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
