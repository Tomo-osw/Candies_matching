import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

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

type Manga = {
  url: string;
  title: string;
  author: string;
  companyName: string;
  year: string | number;
  summary: string;
  [key: string]: any; // for any additional properties
};

export const MangaDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [email, setEmail] = useState(''); // メールアドレスの状態
  const [emailError, setEmailError] = useState(''); // メールアドレスエラーメッセージ
  const location = useLocation();
  const mangaData = location.state?.mangaData;

  if (!mangaData) {
    return (
      <div>
        <HeaderBar />
        <Container>
          <Typography variant="h6" color="error">
            エラー: 漫画のデータが見つかりません。
          </Typography>
        </Container>
      </div>
    );
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    // フォーム送信ハンドラ
    e.preventDefault();
    if (!email) {
      setEmailError('メールアドレスを入力してください。');
      return;
    }
    setEmailError('');
    navigate('/thanks'); // useNavigateを使用して遷移
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error occurred: {error.message}</p>;

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
            src={mangaData.picture_url}
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
              {mangaData.title}
            </Box>
            <Box
              component="h2"
              sx={{ fontWeight: 'normal', fontSize: '1.1em', margin: 0 }}
            >
              作者: {mangaData.author}
            </Box>
            <Box
              component="h2"
              sx={{ fontWeight: 'normal', fontSize: '1.1em', margin: 0 }}
            >
              連載開始: {mangaData.volumeone_at}
            </Box>
            <Box
              component="h2"
              sx={{ fontWeight: 'normal', fontSize: '1.1em', margin: 0 }}
            >
              状態: {mangaData.is_serialization ? '連載中' : '完結済'}
            </Box>
            <Box
              component="h2"
              sx={{ fontWeight: 'normal', fontSize: '1.1em', margin: 0 }}
            >
              巻数: {mangaData.volumes}巻
            </Box>
            <Box
              component="h2"
              sx={{ fontWeight: 'normal', fontSize: '1.1em', margin: 0 }}
            >
              その他: {mangaData.others}
            </Box>
          </CardContent>
        </Box>
        <Box sx={{ width: '100%', whiteSpace: 'pre-wrap' }}>
          {`概要:\n${mangaData.summary}`}
        </Box>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Stack
            component="form"
            onSubmit={handleFormSubmit}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
