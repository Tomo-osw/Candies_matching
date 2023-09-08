import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SamplePage } from "./pages/Sample";

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/sample' element={<SamplePage />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
);
