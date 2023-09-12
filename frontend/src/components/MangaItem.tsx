import { useTheme } from '@emotion/react';
import { MangaData } from '../data/MangaFakeData';
import {
  Box,
  Card,
  Container,
  CardContent,
  CardMedia,
  Typography,
  createTheme,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

function MangaItem(manga: MangaData) {
  // const theme = useTheme()
  // const graterThanMd = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <Container>
      <Card elevation={2} raised={true}>
        {/* カードの下に謎の隙間ができるからネガマージンで強引に削除　できるなら直したい */}
        <Box sx={{ display: 'flex', marginBottom: '-7px' }}>
          {/* <AspectRatio> */}
          <Box
            sx={{
              width: {
                xs: '30%',
                md: '36%',
              },
            }}
          >
            <img
              style={{ aspectRatio: '1/1', width: '100%', filter: 'blur(3px)' }}
              src={manga.pictureUrl}
              loading="lazy"
            />
          </Box>
          {/* </AspectRatio> */}
          <CardContent
            sx={{
              width: {
                xs: '70%',
                md: '64%',
              },
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: '1.2rem',
                  md: '1.5rem',
                },
              }}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {manga.title}
            </Typography>
            <Typography>作者: {manga.author}</Typography>
            <Typography>作者: {manga.companyName}</Typography>
            <Typography
              sx={{
                display: '-webkit-box',
                wordBreak: 'break-all',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3,
              }}
            >
              {manga.summary}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Container>
  );
}

export default MangaItem;
