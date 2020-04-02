import React from 'react';

import TitleAndBreadcrumb from '../../components/TitleAndBreadcrumb';

import Highlight from 'react-highlight.js';

import { Container } from './styles';
import { Panel } from '../../styles/components';
import Page from '../../components/Page';

export default function Documentation() {
  return (
    <Page content={(
      <Container>
        <TitleAndBreadcrumb
          title='Documentação'
          breadcrumbs={[
            { title: 'v1.0.0' }
          ]}
        />
        <div className='wrapdoc'>
          <Panel className='paneldoc'>

            <h3>Clonar projeto</h3>
            <p>
              Para utilizar o <strong>React Admin</strong>, você precisa primeiramente clonar o projeto para sua máquina
              através deste comando:
            </p>
            <Highlight className='code' language={'bash'}>
              $ git clone https://github.com/soldadoryan/reactadmin.git
            </Highlight>


            <div className="separator"></div>


            <h3>Instalando projeto</h3>
            <p>
              Para rodar o projeto, baixe o <a href='https://nodejs.org/en/'>Node.js</a> e utilize o <strong>npm</strong>
              ou <strong>yarn</strong> para instalar as dependências necessárias utilizando os seguintes comandos:
            </p>
            <h4>NPM <small>(Rodar comando na raiz do projeto)</small></h4>
            <Highlight className='code' language={'bash'}>
              $ npm install
            </Highlight>
            <div className="space"></div>
            <h4>Yarn <small>(Rodar comando na raiz do projeto)</small></h4>
            <Highlight className='code' language={'bash'}>
              $ yarn
            </Highlight>


            <div className="separator"></div>


            <h3>Rodando projeto</h3>
            <div className="space"></div>
            <h4>NPM <small>(Rodar comando na raiz do projeto)</small></h4>
            <Highlight className='code' language={'bash'}>
              $ npm run dev
            </Highlight>
            <div className="space"></div>
            <h4>Yarn <small>(Rodar comando na raiz do projeto)</small></h4>
            <Highlight className='code' language={'bash'}>
              $ yarn dev
            </Highlight>


            <div className="separator"></div>


            <h2>Como utilizar?</h2>

            <div className="space"></div>
            <h3>Página em branco</h3>

            <p>
              Crie uma pasta com o nome da página em questão, dentro da pasta crie os arquivos
              <strong> index.js</strong> e <strong>styles.js</strong> com as seguintes estruturas inicias:
            </p>

            <h4>index.js</h4>
            <Highlight className='code' language={'javascript'}>
              {"<Page content={(<Container></Container>)}"}
            </Highlight>

          </Panel>
          <Panel className='paneldep'>
            <h4>History</h4>
            <a target='_blank' href='https://www.npmjs.com/package/history'>v4.10.1</a>

            <h4>React Router Dom</h4>
            <a target='_blank' href='https://www.npmjs.com/package/react-router-dom'>v5.1.2</a>

            <h4>Styled Components</h4>
            <a target='_blank' href='https://www.npmjs.com/package/styled-components'>v5.0.1</a>

            <h4>React Toastify</h4>
            <a target='_blank' href='https://www.npmjs.com/package/react-toastify'>v5.5.0</a>

            <h4>React Icons</h4>
            <a target='_blank' href='https://react-icons.netlify.com/#/icons/md'>v2.0.0</a>

            <h4>React Highlight</h4>
            <a target='_blank' href='http://bvaughn.github.io/react-highlight.js/'>v1.0.0</a>
          </Panel>
        </div>
      </ Container>
    )} />
  );
}
