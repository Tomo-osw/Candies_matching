# Candies_viewer

## Docker起動

＊ 起動 (ポート8080 / `npm i hogehoge` のようにパッケージを追加したりしたことでコンテナの環境を変更した場合)

```bash
docker compose up --dev
```

＊ 起動 (ポート8080)

```bash
docker compose up
```

＊ 終了

-> [Ctrl] + [C] 等で終了する

＊ 起動 (デタッチモード/バックグラウンドモード)

```bash
docker compose up -d
```

＊ 終了 (デタッチモード)

```bash
docker compose down
```

＊ 任意コマンドを実行する場合は、環境変数`CMD`にコマンドをセット (デフォルトは `npm run start`)

```bash
CMD="npm run format" docker compose up
```

### `src/`

アプリケーションの主要なコードが格納されているディレクトリ。

- **`assets/`**: 画像などの静的ファイルを格納。

- **`components/`**: 再利用可能な UI コンポーネントを格納。各コンポーネントは独自のディレクトリを持ち、その中にはコンポーネントのファイルが含まれる。

  - **`Header/`**:
    - `index.tsx`: メインのコンポーネントファイル。
  - **`Footer/`**:
    - `index.tsx`: メインのコンポーネントファイル。

- **`pages/`**: アプリケーションの各ビュー/ページを表すコンポーネントを格納。

  - `HomePage.tsx`: アプリケーションのメインランディングページ。

- **`App.tsx`**: ルーティングや全体のレイアウトを設定するメインのアプリケーションコンポーネント。

- **`index.tsx`**: アプリケーションのエントリポイント。メインの App コンポーネントをレンダリングし、必要なプロバイダー（例: Redux Provider）でラップする。

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
