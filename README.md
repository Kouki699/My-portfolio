# 内倉 康喜 Portfolio

就活・インターン向けに、研究内容、開発経験、スキル、強み、志望職種をまとめたポートフォリオサイトです。

## 技術構成

- Next.js App Router
- TypeScript
- Tailwind CSS
- Vercel デプロイ対応

## ローカル起動

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。

本番ビルド確認:

```bash
npm run build
```

## 掲載内容の編集

プロフィール、研究、プロジェクト、スキル、連絡先は `data/profile.ts` にまとめています。

公開前に、特に以下を差し替えてください。

- `profile.contact.github`
- `profile.contact.email`
- `profile.contact.portfolio`
- `profile.contact.x`
- `profile.contact.linkedIn`
- `projects[].githubUrl`

メールアドレス、X、LinkedIn は未入力でも表示が崩れないようにしています。

## Vercel デプロイ手順

1. GitHub に新しいリポジトリを作成します。
2. このフォルダで以下を実行します。

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin <your-github-repository-url>
git push -u origin main
```

3. [Vercel](https://vercel.com/) にログインします。
4. `Add New...` → `Project` を選択します。
5. GitHub リポジトリをインポートします。
6. Framework Preset が `Next.js` になっていることを確認します。
7. `Deploy` を押します。

現在の公開URL:

- https://kouki-u-portfolio.vercel.app

## 注意

この作業環境では `node` / `npm` / `git` が通常の PATH から見えない場合があります。ローカル PC で実行する場合は Node.js と Git をインストールし、ターミナルから `node --version`、`npm --version`、`git --version` が確認できる状態にしてください。
