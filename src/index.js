import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap";
import "bootstrap-modal-js";


const Root = () => {
  return (
    <ChakraProvider>
      <CSSReset />
      <App />
    </ChakraProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

