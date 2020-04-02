import React from 'react';

import {
  FiFileText,
  FiArchive,
  FiEdit,
  FiList,
  FiLayout,
  FiGrid,
  FiFile
} from 'react-icons/fi';

export default [
  {
    title: 'Documentação',
    isDropdown: false,
    icon: (<FiFileText />),
    path: '/',
    itens: []
  },
  {
    title: 'Componentes',
    isDropdown: true,
    icon: (<FiArchive />),
    path: '/teste',
    itens: [
      {
        title: 'Estrutura de página',
        icon: (<FiGrid />),
        path: '/teste'
      },
      {
        title: 'Formulários',
        icon: (<FiEdit />),
        path: '/teste'
      },
      {
        title: 'Tabelas',
        icon: (<FiList />),
        path: '/teste'
      },
    ]
  },
  {
    title: 'Páginas',
    isDropdown: true,
    icon: (<FiLayout />),
    path: '/paginas',
    itens: [
      {
        title: 'Blank Page',
        icon: (<FiFile />),
        path: '/blank-page'
      },
      {
        title: 'Crud Elements',
        icon: (<FiFile />),
        path: '/crud-elements'
      },
    ]
  },

];