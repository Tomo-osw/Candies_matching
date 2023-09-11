import {
  Button,
  Container,
  SelectChangeEvent,
  Stack,
  TextField,
} from '@mui/material';
import { HeaderBar } from '../components/Header';
import { SelectBox } from '../components/Common/Select';
import { useState } from 'react';

export const Home = () => {
  const [category, setCategory] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
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
        <Stack component="form" sx={{ gap: '10px' }}>
          <SelectBox
            elements={[
              { value: 'Foods', content: '食べ物' },
              { value: 'Sports', content: 'スポーツ' },
            ]}
            value={category}
            onChange={handleChange}
            sx={{ maxWidth: '360px', margin: '0' }}
            label="カテゴリ"
          />
          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
            <TextField
              id="outlined-hogehoge"
              label=""
              variant="outlined"
              sx={{ width: '100%' }}
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
          >
            <div>ログイン</div>
            <TextField
              id="outlined-hogehoge"
              label="メールアドレス"
              variant="outlined"
              type="email"
              sx={{ width: '100%' }}
            />
            <TextField
              id="outlined-hogehoge"
              label="パスワード"
              variant="outlined"
              type="password"
              sx={{ width: '100%' }}
            />
            <Button type="submit" variant="contained" sx={{ flexShrink: 0 }}>
              ログイン
            </Button>
          </Stack>
        </div>
      </Container>
    </>
  );
};
