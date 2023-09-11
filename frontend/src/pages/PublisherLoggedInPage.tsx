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

const PublisherLoggedInPage: React.FC = () => {
  return (
    <Container sx={{
      width: '100% !important',
    }}>
        <Container sx={{py: 2}}>
            <Link to='/registerManga'>
              <Typography
                sx={{
                  fontSize: {
                      xs: '1.2rem',
                      md: '1.5rem',
                  }
                }}
                variant='h6'>
                広告募集中の漫画を登録する
              </Typography>
            </Link>
            <Box sx={{height: '100px'}}></Box>
            <Typography
              sx={{
                fontSize: {
                    xs: '1.2rem',
                    md: '1.5rem',
                    }
                }}
              variant='h5'>
                広告を募集中の漫画一覧
                </Typography>
        </Container>

        <Container sx={{ py: 2 }} maxWidth="lg">
        {/* End hero unit */}
        <Grid container spacing={{
            xs: 1,
        }}>
            {fakeMultipleMangaData.map((manga, index) => (
            <Grid key={index} item xs={12} sm={12} md={12}>
                <MangaItem {...manga} />
            </Grid>
            ))}
        </Grid>
        </Container>
    </Container>
  );
};

export default PublisherLoggedInPage;
