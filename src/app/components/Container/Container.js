import React from 'react';
import {ContainerBody} from './Container.style';

const Container = props => {
  return (
    <ContainerBody>
      {props.children}
    </ContainerBody>
  );
};

export default Container;