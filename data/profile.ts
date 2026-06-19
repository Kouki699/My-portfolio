export const profile = {
  name: "内倉 康喜",
  romanName: "Yasutaka Uchikura",
  affiliation: "宮崎大学大学院 工学研究科 情報系",
  tagline: "画像処理・AIを用いた身体動作解析に取り組む大学院生です。",
  summary:
    "歩行やスポーツ動作を動画から定量化し、人の動きを客観的に理解する研究に取り組んでいます。",
  contact: {
    github: "https://github.com/your-github-id",
    email: "your.email@example.com",
    portfolio: "https://your-portfolio.vercel.app",
    x: "",
    linkedIn: "",
  },
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Career", href: "#career" },
  { label: "Contact", href: "#contact" },
];

export const about = [
  "宮崎大学大学院で画像処理・AIを研究",
  "学部時代は高齢者の歩行動画解析に取り組んだ",
  "現在はレスリング動作解析・スポーツ動作の定量化に関心",
  "SE、社内SE、データ分析、画像処理系の仕事に興味",
];

export const research = [
  {
    title: "高齢者歩行解析",
    description:
      "歩行動画から速度、歩幅、歩隔、姿勢角、左右偏重、歩行周期などを抽出し、歩行状態を評価",
    points: ["動画から歩行特徴量を抽出", "身体状態を数値で把握", "専門外にも伝わる評価を重視"],
  },
  {
    title: "レスリング動作解析",
    description:
      "試合・練習動画から選手の動きや接触状態を解析し、監督コメントの定量化や指導支援を目指す",
    points: ["スポーツ動作を定量化", "接触状態や動きの変化に着目", "指導支援につながる分析を検討"],
  },
];

export const projects = [
  {
    title: "GDGoC Japan Hackathon",
    description:
      "Flutterを用いたアプリ開発。九州最優秀、東京決勝進出、ACMEE賞受賞。",
    role: "アイデア出し、UI設計、資料作成、発表補助",
    githubUrl: "",
  },
  {
    title: "GitHubリンク用カード",
    description:
      "後から研究コード、アプリ、分析ノートなどのGitHubリンクを追加できるカードです。",
    role: "URL欄を data/profile.ts から編集可能",
    githubUrl: "",
  },
];

export const skills = [
  "Python",
  "C / C++",
  "Flutter",
  "HTML",
  "PyTorch",
  "NumPy",
  "matplotlib",
  "OpenCV",
  "GitHub",
  "Canva",
];

export const careerInterests = [
  "SE",
  "社内SE",
  "データ分析",
  "画像処理・AI",
  "研究開発支援",
  "ITを用いた業務改善",
];
