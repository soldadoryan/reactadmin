import React from 'react';

import { Wrap, Button } from './styles';

export default function TitleAndBreadcrumb({ title, breadcrumbs, actions }) {
  return (
    <Wrap>
      <h1>
        {title}
        <small>
          {breadcrumbs.map((item, index) => (
            <>
              <Button to={item.path}>{item.title}</Button>
              {(breadcrumbs.length - 1 != index) && <span>|</span>}
            </>
          ))}
        </small>
      </h1>
      <div className='actions'>
        {actions}
      </div>
    </Wrap>
  );
}
