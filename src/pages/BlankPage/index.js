import React from 'react';

import TitleAndBreadcrumb from '../../components/TitleAndBreadcrumb';

import { Container } from './styles';
import Page from '../../components/Page';

export default function BlankPage() {
  return (
    <Page content={(
      <Container>
        <TitleAndBreadcrumb
          title='Blank Page'
          breadcrumbs={[
            { title: 'Documentação', path: '/' },
          ]}
        />
      </Container>
    )} />
  );
}
