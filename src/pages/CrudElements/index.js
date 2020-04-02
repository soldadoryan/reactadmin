import React from 'react';

import TitleAndBreadcrumb from '../../components/TitleAndBreadcrumb';
import Table from '../../components/Table';

import { Container } from './styles';
import Page from '../../components/Page';

export default function CrudElements() {
  return (
    <Page content={(
      <Container>
        <TitleAndBreadcrumb
          title='Crud Elements'
          breadcrumbs={[
            { title: 'Documentação', path: '/' },
          ]}
        />

      </Container>
    )} />
  );
}
