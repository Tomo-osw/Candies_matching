import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import { HeaderBar } from '../components/Header';

// ホーム画面から要求される検索クエリ
interface ReceiveParams {
  category: string;
  content: string;
}

interface SearchResultProps {
  text: string;
}

interface Manga {
  id: number;
  company_id: number;
  title: string;
  author: string;
  summary: string;
  volumeone_at: string;
  volumes: number;
  edition: string;
  is_serialization: boolean;
  genre: string;
  editor: string;
  picture_url: string;
  others: string;
}

const SearchResult: React.FC<SearchResultProps> = () => {
  const [mangas, setMangas] = useState<Manga[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();
  const params = location.state as ReceiveParams;

  useEffect(() => {
    const fetchMangas = async () => {
      try {
        const response = await axios.post<Manga[]>(
          'http://localhost:8000/mangaLists',
          params,
        );
        setMangas(response.data);
        setLoading(false);
      } catch (error) {
        // 検索結果が見つからない場合もエラーになるので、見直しても良さそう
        console.error('Error fetching mangas:', error);
        setError('漫画の検索中にエラーが発生しました');
        setLoading(false);
      }
    };

    void fetchMangas();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error occurred: {error}</p>;

  return (
    <div>
      <HeaderBar />
      <Container>
        <h2>検索結果一覧ページ</h2>
        <p>該当件数: {mangas.length} 件</p>
        {mangas.map((manga) => (
          <Link
            to={`/detail/${manga.id}`}
            state={{ mangaData: manga }}
            key={manga.id}
          >
            <Card key={manga.id} style={{ marginBottom: 16 }}>
              <Grid container>
                <Grid item xs={4}>
                  <CardMedia
                    component="img"
                    alt={manga.title}
                    image={manga.picture_url}
                    style={{ width: '60%', filter: 'blur(3px)' }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {manga.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {manga.author}
                    </Typography>
                    <Typography variant="body2">
                      ジャンル: {manga.genre}
                    </Typography>
                  </CardContent>
                </Grid>

              </Grid>
            </Card>
          </Link>
        ))}
      </Container>
    </div>
  );
};

export default SearchResult;
