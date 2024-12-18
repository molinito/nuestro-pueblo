import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap";
import "bootstrap-modal-js";
import { SpeedInsights } from "@vercel/speed-insights/react";


const Root = () => {
  return (
    <SpeedInsights>
  
    <ChakraProvider>
      <CSSReset />
      <App />
    </ChakraProvider>
    </SpeedInsights>
  );
};

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<Root />);


