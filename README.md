# Kouki Uchikura Portfolio

宮崎大学大学院 工学研究科 情報系に所属する内倉 康喜のポートフォリオサイトです。

画像処理・AIを用いた身体動作解析の研究内容に加え、開発経験、スキル、強み、志望領域を整理しています。就職活動・インターン応募時に、専門外の方にも取り組みが伝わる構成を意識しています。

## Site

- Portfolio: https://kouki-u-portfolio.vercel.app
- GitHub: https://github.com/Kouki699

## Highlights

- 画像処理・AIを用いた身体動作解析の研究内容を掲載
- 高齢者歩行解析とレスリング動作解析を、専門外の方にも伝わる文章で整理
- GDGoC Japan Hackathonでの受賞経験とチーム開発での担当内容を掲載
- 連絡先、GitHub、ポートフォリオURLをまとめた就活向け構成

## Contents

- About: 研究分野とこれまでの取り組み
- Research: 高齢者歩行解析、レスリング動作解析
- Achievements: GDGoC Japan Hackathonでの受賞実績
- Projects: チーム開発で担当した内容
- Skills: 研究・開発で使用している技術
- Strengths / Career Vision: 強みと志望職種
- Contact: GitHub、ポートフォリオURL、連絡先

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Vercel

## Project Structure

```text
app/
components/
data/profile.ts
public/
```

掲載内容は `data/profile.ts` に集約し、プロフィール、研究内容、プロジェクト、スキル、連絡先を後から編集しやすい構成にしています。

## Development

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

## Deployment

VercelとGitHubリポジトリを連携し、`main` ブランチへのpushをもとに自動デプロイしています。
