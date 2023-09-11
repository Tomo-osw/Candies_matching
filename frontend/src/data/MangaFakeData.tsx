export interface MangaData {
    id: number;
    companyName: string;
    title: string;
    author: string;
    summary: string;
    // どのような形式の文字列を保持するかを要件等
    volumeoneAt: string;
    volumes: number;
    edition: number;
    isSerialization: boolean;
    genre: string;
    editor: string;
    pictureUrl: string;
    others: string;
}

export const fakeSingleMangaData: MangaData = {
    id: 1,
    companyName: "出版社名",
    title: "漫画タイトル",
    author: "漫画作者",
    summary: "漫画の説明hogehogefugafugahogehogefugafugahogehogefugafugahogehogefugafugahogehogefugafugahogehogefugafugahogehogefugafugahogehogefugafuga",
    volumeoneAt: "2021-10-01",
    volumes: 3,
    edition: 1,
    isSerialization: true,
    genre: "漫画のジャンル",
    editor: "編集者",
    pictureUrl: "https://dummyimage.com/600x600/000/fff",
    others: ""
}

export const fakeMultipleMangaData: MangaData[] = [
    {
        id: 1,
        companyName: "出版社名",
        title: "漫画タイトル",
        author: "漫画作者",
        summary: "漫画の説明hogehogefugafugahogehogefugafugahogehogefugafugahogehogefugafugahogehogefugafugahogehogefugafugahogehogefugafugahogehogefugafuga",
        volumeoneAt: "2021-10-01",
        volumes: 3,
        edition: 1,
        isSerialization: true,
        genre: "漫画のジャンル",
        editor: "編集者",
        pictureUrl: "https://dummyimage.com/600x600/000/fff",
        others: ""
    },
    {
        id: 2,
        companyName: "出版社名2",
        title: "漫画タイトル2",
        author: "漫画作者2",
        summary: "漫画の説明2\nhogehoge\nfugafuga",
        volumeoneAt: "2021-10-01",
        volumes: 3,
        edition: 1,
        isSerialization: true,
        genre: "漫画のジャンル2",
        editor: "編集者2",
        pictureUrl: "https://dummyimage.com/600x600/000/fff",
        others: ""
    },
    {
        id: 3,
        companyName: "出版社名3",
        title: "漫画タイトル3",
        author: "漫画作者3",
        summary: "漫画の説明3\nhogehoge\nfugafuga",
        volumeoneAt: "2021-10-01",
        volumes: 3,
        edition: 1,
        isSerialization: true,
        genre: "漫画のジャンル3",
        editor: "編集者3",
        pictureUrl: "https://dummyimage.com/600x600/000/fff",
        others: ""
    },
]

