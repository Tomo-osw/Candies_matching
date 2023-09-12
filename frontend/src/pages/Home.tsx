import {
  Box,
  Button,
  Container,
  SelectChangeEvent,
  Stack,
  TextField,
} from '@mui/material';
import axios from 'axios';
import { HeaderBar } from '../components/Header';
import { SelectBox } from '../components/Common/Select';
import { useState, useRef, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

type Publisher = {
  is_advertiser: boolean;
  is_working: boolean;
  name: string;
  password: string;
  is_publisher: boolean;
  is_admin: boolean;
  id: number;
  email: string;
  created_at: string;
};

export const Home = () => {
  const [category, setCategory] = useState('');
  const [showValidation, setShowValidation] = useState(false);
  const content = useRef('');
  const navigate = useNavigate();

  const categoryHandle = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const contentHandle = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    content.current = event.target.value;
  };

  const toSearchResult = (event: FormEvent<HTMLFormElement>) => {
    // 既存の処理のキャンセル
    event.preventDefault();

    navigate('/searchResult', {
      state: { category: category, content: content.current },
    });
  };

  const toLoginPublisher = async (event: FormEvent<HTMLFormElement>) => {
    // 既存の処理のキャンセル
    event.preventDefault();

    const params: { email: string; password: string } = {
      email: (event.target as any).email.value,
      password: (event.target as any).password.value,
    };

    try {
      const response = await axios.post<Publisher>(
        'http://localhost:8000/companies',
        params,
      );
      navigate('/login/publisher', {
        state: { company_id: response.data.id },
      });
    } catch (error) {
      setShowValidation(true);
      console.error('Error fetching companise:', error);
    }
  };

  return (
    <>
      <HeaderBar />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <Stack component="form" sx={{ gap: '10px' }} onSubmit={toSearchResult}>
          <SelectBox
            elements={[
              { value: 'アクション', content: 'アクション' },
              { value: 'SF', content: 'SF' },
              { value: 'ファンタジー', content: 'ファンタジー' },
              { value: 'ダークファンタジー', content: 'ダークファンタジー' },
              { value: 'ドラマ', content: 'ドラマ' },
              { value: 'サスペンス', content: 'サスペンス' },
              {
                value: '転生×恋愛×サスペンス',
                content: '転生×恋愛×サスペンス',
              },
            ]}
            value={category}
            onChange={categoryHandle}
            sx={{ maxWidth: '360px', margin: '0' }}
            label="カテゴリ"
          />
          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
            <TextField
              id="outlined-hogehoge"
              label=""
              variant="outlined"
              sx={{ width: '100%' }}
              onChange={contentHandle}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ width: '120px', flexShrink: 0 }}
            >
              検 索
            </Button>
          </div>
        </Stack>

        <div
          style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
        >
          <Stack
            component="form"
            sx={{
              border: 'solid 1px #ccc',
              borderRadius: '10px',
              padding: '20px',
              marginTop: '20px',
              gap: '10px',
              width: '100%',
              maxWidth: '360px',
            }}
            onSubmit={toLoginPublisher}
          >
            <div>ログイン</div>
            <TextField
              name="email"
              label="メールアドレス"
              variant="outlined"
              type="email"
              sx={{ width: '100%' }}
            />
            <TextField
              name="password"
              label="パスワード"
              variant="outlined"
              type="password"
              sx={{ width: '100%' }}
            />
            {showValidation && (
              <Box sx={{ color: '#f44', textAlign: 'center' }}>
                アカウントが見つかりませんでした
              </Box>
            )}
            <Button type="submit" variant="contained" sx={{ flexShrink: 0 }}>
              ログイン
            </Button>
          </Stack>
        </div>
      </Container>
    </>
  );
};
