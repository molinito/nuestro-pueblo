import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { createRoot } from 'react-dom/client';
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

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<Root />);


