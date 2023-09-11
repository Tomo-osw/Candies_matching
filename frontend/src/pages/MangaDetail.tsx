import { useParams } from 'react-router-dom';

import {
  Box,
  Button,
  CardContent,
  Container,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { HeaderBar } from '../components/Header';

export const MangaDetail = () => {
  const { id } = useParams();
  // Backendから検索して、データを取得する
  const url = '';
  const title = '推しの子';
  const author = '赤坂アカ';
  const companyName = '集英社';
  const year = '2020';
  const summary = '推しのアイドルの子供に転生してほにゃらら....';

  return (
    <>
      <HeaderBar />
      <Container sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Box sx={{ display: 'flex', gap: '30px' }}>
          <img
            style={{
              flexShrink: 0,
              aspectRatio: '1/1',
              width: '30vw',
              maxWidth: '360px',
              height: '30vw',
              maxHeight: '360px',
              backgroundColor: '#eee',
            }}
            src={url}
            loading="lazy"
          />
          <CardContent
            sx={{
              display: 'flex',
              gap: '0.5em',
              width: '100%',
              flexDirection: 'column',
              padding: '0',
            }}
          >
            <Box component="h1" sx={{ margin: 0, fontSize: '2.5em' }}>
              {title}
            </Box>
            <Box
              component="h2"
              sx={{ fontWeight: 'normal', fontSize: '1.1em', margin: 0 }}
            >
              作者: {author}
            </Box>
            <Box
              component="h2"
              sx={{ fontWeight: 'normal', fontSize: '1.1em', margin: 0 }}
            >
              出版社: {companyName}
            </Box>
            <Box
              component="h2"
              sx={{ fontWeight: 'normal', fontSize: '1.1em', margin: 0 }}
            >
              {year}年
            </Box>
            {/* idについては開発用であり、削除予定 */}
            <Box>ID: {id}</Box>
          </CardContent>
        </Box>
        <Box sx={{ width: '100%', whiteSpace: 'pre-wrap' }}>
          {`概要:\n${summary}`}
        </Box>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Stack
            component="form"
            sx={{
              border: 'solid 1px #ccc',
              borderRadius: '10px',
              padding: '20px',
              marginTop: '100px',
              gap: '10px',
              width: '100%',
              maxWidth: '480px',
            }}
          >
            <Typography>出版社へ連絡する</Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '10px',
                width: '100%',
                maxWidth: '540px',
              }}
            >
              <TextField
                id="outlined-hogehoge"
                label="メールアドレス"
                variant="outlined"
                type="email"
                sx={{ width: '100%' }}
              />
              <Button type="submit" variant="contained" sx={{ flexShrink: 0 }}>
                送 信
              </Button>
            </Box>
          </Stack>
        </Box>
      </Container>
    </>
  );
};
