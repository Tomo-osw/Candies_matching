import React, { useEffect } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import TextInputRow from '../components/TextInputRow';
import { PostMangaData, defaultPostMangaData } from '../data/PostMangaData';
import DatePicker from '../components/DatePicker';
import NumerInputRow from '../components/NumberInputRow';
import NumberInputRow from '../components/NumberInputRow';
import { useNavigate } from 'react-router-dom';

const RegisterAndEditMangaPage: React.FC<{isEditMode: boolean, data: PostMangaData}> = ({
  isEditMode, data
}) => {
  const navigation = useNavigate();
  const [mangaData, setMangaData] = React.useState(defaultPostMangaData);
  const [isSerial, setIsSerial] = React.useState(false);
  useEffect(() => {
    if (data) {
      console.log("defaultValue")
      console.log(data)
      setMangaData(data);
    }
  }, [])

  return (
    <Container sx={{py: 4}}>
      <Typography variant="h6" gutterBottom>
        {isEditMode ? "漫画の編集画面" : "漫画の登録画面"}
      </Typography>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <TextInputRow
            isHalf={false}
            required={true}
            name='mangaTitle'
            labelText='漫画のタイトル'
            placeholderText='漫画のタイトル'
            value={mangaData.title}
            isTextField={true}
            onValueChange={(value) => mangaData.title = value}
          />
          
          <TextInputRow
            isHalf={false}
            required={true}
            name="mangaAuthor"
            labelText='漫画の作者'
            placeholderText='漫画の作者'
            value={mangaData.author}
            isTextField={true}
            onValueChange={(value) => mangaData.author = value}
          />

          <TextInputRow
            isHalf={false}
            required={false}
            name="mangaSummary"
            labelText='漫画の概要'
            placeholderText='漫画の概要'
            value={mangaData.summary}
            isTextField={false}
            onValueChange={(value) => mangaData.summary = value}
          />

          <TextInputRow
            isHalf={false}
            required={true}
            name="mangaGenre"
            labelText='漫画のジャンル'
            placeholderText='漫画のジャンル'
            value={mangaData.genre}
            isTextField={true}
            onValueChange={(value) => mangaData.genre = value}
          />

          <TextInputRow
            isHalf={false}
            required={false}
            name="mangaEditor"
            labelText='漫画の編集者'
            placeholderText='漫画の編集者'
            value={mangaData.editor}
            isTextField={true}
            onValueChange={(value) => mangaData.editor = value}
          />

          <TextInputRow
            isHalf={false}
            required={false}
            name="mangaPictureUrl"
            labelText='漫画の画像'
            placeholderText='漫画の画像'
            value={mangaData.picture_url}
            isTextField={true}
            onValueChange={(value) => mangaData.picture_url = value}
          />

          <TextInputRow
            isHalf={false}
            required={false}
            name="mangaOthers"
            labelText='その他'
            placeholderText='その他'
            value={mangaData.others}
            isTextField={true}
            onValueChange={(value) => mangaData.others = value}
          />

          <Grid item xs={6} sm={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Checkbox
              checked={isSerial}
              onChange={(e) => {
                // setStateは非同期で動くので、ここで反映されていないみたいなので新しい値を変数に入れておく
                // https://zenn.dev/takuty/articles/c032310a6643ac
                const newVal = !isSerial
                setIsSerial(newVal)
                mangaData.is_serialization = newVal
                console.log(mangaData.is_serialization)
            }}/>
            <Typography sx={{
              marginLeft: '8px',
              width: '200px',
            }}>
              完結済みか
            </Typography>
          </Grid>

          <NumberInputRow
            isHalf={true}
            required={false}
            name="mangaEdition"
            labelText='版数'
            placeholderText='版数'
            value={mangaData.edition}
            isTextField={true}
            onValueChange={(value) => mangaData.edition = Number(value)}
          />

          <DatePicker value={mangaData.volumeone_at} onValueChange={(value) => {
            mangaData.volumeone_at = value;
          }}/>

          <NumberInputRow
            isHalf={true}
            required={true}
            name="mangaEdition"
            labelText='総巻数'
            placeholderText='総巻数'
            value={mangaData.volumes}
            isTextField={true}
            onValueChange={(value) => mangaData.volumes = value}
          />
        </Grid>
      </Container>
      <Container
        sx={{
          widows: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {
          isEditMode ?
          <Button onClick={() => {
            // 更新する処理
            console.log(mangaData)
            // navigation("/login/publisher")
          }} variant="contained" sx={{ marginTop: '20px' }}>更新`</Button> :
          <Button onClick={() => {
            // 登録する処理
            console.log(mangaData)
            // navigation("/login/publisher")
          }} variant="contained" sx={{ marginTop: '20px' }}>登録</Button>
        }
      </Container>
    </Container>
  );
};

export default RegisterAndEditMangaPage;
