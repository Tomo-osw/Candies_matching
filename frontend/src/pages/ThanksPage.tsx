import React, { useEffect, useState } from 'react';
import MangaItem from '../components/MangaItem';
import {fakeMultipleMangaData } from '../data/MangaFakeData';
import {
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { HeaderBar } from '../components/Header';

const ThanksPage: React.FC = () => {
  return (
    <Box sx={{width: "100%"}}>
        <HeaderBar/>
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '90vh',
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
            <Link to="/home">
                <Typography>ホーム画面に戻る</Typography>
            </Link>
        </Container>
    </Box>
  );
};

export default ThanksPage;
