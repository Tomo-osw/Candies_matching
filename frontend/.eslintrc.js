module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking', //型を必要とするプラグインの推奨ルールをすべて有効
    'prettier', //追加 ESLintの情報に沿ってフォーマット
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12, //latestから12に変更
    sourceType: 'module',
    tsconfigRootDir: __dirname, //追加 tsconfig.jsonがある相対パスを指定
    project: ['./tsconfig.json'], //追加  tsconfig.jsonを指定
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'unused-imports', //追加 使っていないimportを自動で削除用
  ],

  ignorePatterns: ['build'], //追加 .eslintignoreに対象外にしているが無いとコンパイルに時間がかかる
  /*-- ↓以下追加 --*/
  rules: {
    'react/function-component-definition': 'off', //関数コンポーネントの定義をアロー関数に限定する設定をoff
    'no-use-before-define': 'off', //関数や変数が定義される前に使われているとエラーになるデフォルトの機能をoff
    '@typescript-eslint/no-use-before-define': ['error'], //typescript側のno-use-before-defineを使うようにする
    'import/prefer-default-export': 'off', //named exportがエラーになるので使えるようにoff
    '@typescript-eslint/no-unused-vars': 'off', //unused-importsを使うため削除
    'unused-imports/no-unused-imports': 'error', //不要なimportの削除
    '@typescript-eslint/explicit-function-return-type': 'off', //関数の戻り値の型を必ず書くようにする設定をoff
    'unused-imports/no-unused-vars': [
      //unused-importsでno-unused-varsのルールを再定義
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    // 'react/function-component-definition': [
    //   //アロー関数以外受け付けない設定
    //   2,
    //   {
    //     namedComponents: 'arrow-function',
    //     unnamedComponents: 'arrow-function',
    //   },
    // ],
    'no-param-reassign': [2, { props: false }], //パラメーターのプロパティ変更を許可
    'import/extensions': [
      //importのときに以下の拡張子を記述しなくてもエラーにしない
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [
      //jsx形式のファイル拡張子をjsxもしくはtsxに限定
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/react-in-jsx-scope': 'off', //import React from 'react'が無くてもエラーを無くす
    'react/prop-types': 'off', //TypeScriptでチェックしているから不要。offにする
    'no-void': [
      //void演算子の許可
      'error',
      {
        allowAsStatement: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      //importするファイルをjsだけではなく、tsを含むファイルを許可する
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  /*-- ↑追加ここまで --*/
};
