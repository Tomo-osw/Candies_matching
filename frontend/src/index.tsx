import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PlaceholderPage } from './pages/PlaceholderPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PublisherLoggedInPage from './pages/PublisherLoggedInPage';

import { Home } from './pages/Home';
import './styles/global.css';
import ThanksPage from './pages/ThanksPage';
import RegisterAndEditMangaPage from './pages/RegisterAndEditMangapage';
import { defaultPostMangaData } from './data/PostMangaData';
import SearchResult from './pages/SearchResult';
import { MangaDetail } from './pages/MangaDetail';

// デフォルト色の設定
const theme = createTheme({
  palette: {
    primary: {
      main: '#43a047',
      light: '#66bb6a',
      dark: '#43a047',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#42a5f5',
      light: '#36a5ff',
      dark: '#1976d2',
      contrastText: '#ffffff',
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<App />} /> */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/sample" element={<PlaceholderPage text={'sample'} />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/home" element={<Home />} />
          <Route
            path="/searchResult"
            element={<SearchResult text={'searchResult'} />}
          />
          <Route path="/detail/:id" element={<MangaDetail />} />
          <Route path="/thanks" element={<ThanksPage />} />
          <Route path="/login/publisher" element={<PublisherLoggedInPage />} />
          <Route
            path="/registerManga"
            element={
              <RegisterAndEditMangaPage
                isEditMode={false}
                data={defaultPostMangaData}
              />
            }
          />
          <Route
            path="/editManga"
            element={
              <RegisterAndEditMangaPage
                isEditMode={true}
                data={defaultPostMangaData}
              />
            }
          />

          {/* ここからは時間があれば作るページ */}
          <Route
            path="/login/advertiser"
            element={<PlaceholderPage text={'Advertiser Page'} />}
          />
          <Route
            path="/editAd"
            element={<PlaceholderPage text={'editAd Page'} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
