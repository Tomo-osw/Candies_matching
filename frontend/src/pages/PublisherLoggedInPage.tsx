import React, { useState, useEffect } from 'react';
import MangaItem from '../components/MangaItem';
import { MangaData } from '../data/MangaFakeData';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { HeaderBar } from '../components/Header';

import axios from 'axios';

type ReceiveParams = {
  company_id: number;
};

const PublisherLoggedInPage: React.FC = () => {
  const [mangaData, setMangaData] = useState<MangaData[]>([]);
  const location = useLocation();
  const params = location.state as ReceiveParams;

  useEffect(() => {
    const fetchMangas = async () => {
      try {
        const response = await axios.get<MangaData[]>(
          `http://localhost:8000/mangaLists/publisher/${params.company_id}`,
        );
        setMangaData(response.data);
      } catch (error) {
        console.error('Error fetching mangas:', error);
      }
    };

    void fetchMangas();
  }, []);

  return (
    <>
      <HeaderBar />
      <Container
        sx={{
          width: '100% !important',
        }}
      >
        <Container sx={{ py: 2 }}>
          <Button
            variant="contained"
            sx={{
              width: '320px',
              flexShrink: 0,
              fontSize: {
                xs: '1rem',
                md: '1.2rem',
              },
            }}
            component={Link}
            to="/registerManga"
            state={{ company_id: params.company_id }}
          >
            広告募集中の漫画を登録する
          </Button>
          <Box sx={{ height: '100px' }}></Box>
          <Typography
            sx={{
              fontSize: {
                xs: '1.2rem',
                md: '1.5rem',
              },
            }}
            variant="h5"
          >
            広告を募集中の漫画一覧
          </Typography>
        </Container>

        <Container sx={{ py: 2 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid
            container
            spacing={{
              xs: 1,
            }}
          >
            {mangaData.map((manga, index) => (
              <Grid key={index} item xs={12} sm={12} md={12}>
                <Link
                  to={`/editManga`}
                  state={{ mangaData: manga }}
                  key={manga.id}
                  className="link-style"
                >
                  <MangaItem {...manga} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default PublisherLoggedInPage;
