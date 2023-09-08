import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PlaceholderPage } from "./pages/PlaceholderPage";

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
        <Route path='/sample' element={<PlaceholderPage text={"sample"} />} />
        <Route path='/home' element={<PlaceholderPage text={"home"} />} />
        <Route path='/searchResult' element={<PlaceholderPage text={"searchResult"} />} />
        <Route path='/detail/:id' element={<PlaceholderPage text={"detail page"} />} />
        <Route path='/thanks' element={<PlaceholderPage text={"thanks"} />} />
        <Route path='/login/publisher' element={<PlaceholderPage text={"Publisher Page"} />} />
        <Route path='/registerManga' element={<PlaceholderPage text={"Manga Add Page"} />} />
        <Route path='/editManga' element={<PlaceholderPage text={"Manga Edit Page"} />} />

        {/* ここからは時間があれば作るページ */}
        <Route path='/login/advertiser' element={<PlaceholderPage text={"Advertiser Page"} />} />
        <Route path='/editAd' element={<PlaceholderPage text={"editAd Page"} />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
);
