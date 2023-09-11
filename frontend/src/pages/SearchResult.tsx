import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

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
    
      useEffect(() => {
        const fetchMangas = async () => {
          try {
            const response = await axios.get<Manga[]>('http://0.0.0.0:8000/mangaLists');
            setMangas(response.data);
          } catch (error) {
            console.error("Error fetching mangas:", error);
          }
        };
    
        void fetchMangas();
      }, []);

  return (
    <div>
    <Container>
    <h2>検索結果一覧ページ</h2>
     {/* TODO: 今は全ての漫画データを表示していますが、後々はユーザーの検索クエリに基づく結果を表示するように更新する必要があります。 */}
    {mangas.map(manga => (
        <Card key={manga.id} style={{ marginBottom: 16 }}>
        <Grid container>
            <Grid item xs={4}>
                <CardMedia
                    component="img"
                    alt={manga.title}
                    image={manga.picture_url}
                    style={{ width: '60%' }} 
                />
            </Grid>
            <Grid item xs={8}>
                <CardContent>
                    <Typography variant="h5" component="div">{manga.title}</Typography>
                    <Typography variant="subtitle1" color="textSecondary">{manga.author}</Typography>
                    <Typography variant="body2">{manga.summary}</Typography>
                    <Typography variant="body2">連載開始: {manga.volumeone_at}</Typography>
                    <Typography variant="body2">巻数: {manga.volumes}</Typography>
                    <Typography variant="body2">ジャンル: {manga.genre}</Typography>
                </CardContent>
            </Grid>
        </Grid>
    </Card>
    ))}
    </Container>
</div>
    );
}

export default SearchResult;
