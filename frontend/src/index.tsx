import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { CssVarsProvider } from '@mui/joy/styles';
import App from './Main';



ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <CssVarsProvider>
      <App />
    </CssVarsProvider>
  </React.StrictMode>
);
