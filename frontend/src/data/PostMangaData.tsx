// ./MangaFakeDataにあるものと似ているが、すこしだけ違う companyName, id がない。
// こっちはバックエンドにデータを送るときに使う。
export interface PostMangaData {
  company_id: number;
  title: string;
  author: string;
  summary: string;
  volumeone_at: string;
  volumes: number;
  edition: number;
  is_serialization: boolean;
  genre: string;
  editor: string;
  picture_url: string;
  others: string;
}

export const defaultPostMangaData: PostMangaData = {
  company_id: 0,
  title: "",
  author: "",
  summary: "",
  volumeone_at: "2020-02-10",
  volumes: 1,
  edition: 1,
  is_serialization: false,
  genre: "",
  editor: "",
  picture_url: "",
  others: "",
}
// デフォルト値を設定しておくと、下記のように一部の値だけ変更したいときに便利。
// const aa: PostMangaData = {
//   ...defaultPostMangaData,
//   title: "hoge",
// }