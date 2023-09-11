import React from 'react';
import MangaItem from '../components/MangaItem';
import {fakeMultipleMangaData } from '../data/MangaFakeData';
import {
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const ThanksPage: React.FC = () => {
  return (
    <Container
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100vh',
        }}
    >
        <Typography
        variant='h1'
            sx={{
                fontSize: {
                    xs: '1.2rem',
                    md: '1.5rem',
                    lg: '1.8rem',
                }
            }}
        >
            ありがとうございます。
        </Typography>
        <Box sx={{ height: '20px' }} />
        <Typography>担当者から折り返し連絡をするのでお待ちください。</Typography>
    </Container>
  );
};

export default ThanksPage;
