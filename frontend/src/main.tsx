import React from "react";
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from "@chakra-ui/react";
import App from "~/components/App";
import '~/styles/global.css'

const container = document.getElementById('root'); 

// container は HTMLElement | null の ユニオン型
// => container 末尾に ! を付けるか、Errorを吐く様にする

if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);
root.render(
  <ChakraProvider resetCSS={false}>
    <App />
  </ChakraProvider>
)