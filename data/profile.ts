export const profile = {
  name: "内倉 康喜",
  romanName: "Kouki Uchikura",
  affiliation: "宮崎大学大学院 工学研究科 情報系",
  specialty: "画像処理、AI、身体動作解析",
  tagline: "画像処理・AIを用いた身体動作解析に取り組む大学院生です。",
  summary:
    "画像処理・AIを用いた身体動作解析に取り組む大学院生です。学部時代は高齢者の歩行動画解析に取り組み、現在はスポーツ動作解析をテーマに、動画から人の動きを定量化する研究を進めています。将来はIT技術を活用して、現場の課題解決や業務改善に貢献できるエンジニアを目指しています。",
  contact: {
    github: "https://github.com/Kouki699",
    email: "kouki.uchikura28@gmail.com",
    portfolio: "https://kouki-u-portfolio.vercel.app",
    x: "",
    linkedIn: "",
  },
};

export const navigation = [
  { label: "自己紹介", href: "#about" },
  { label: "研究内容", href: "#research" },
  { label: "実績", href: "#achievements" },
  { label: "プロジェクト", href: "#projects" },
  { label: "技術", href: "#skills" },
  { label: "強み・志望", href: "#career" },
  { label: "お問い合わせ", href: "#contact" },
];

export const heroStats = [
  { label: "Specialty", value: "画像処理・AI" },
  { label: "Research", value: "身体動作解析" },
  { label: "Career Interest", value: "SE / Data Analysis" },
];

export const highlights = [
  "高齢者歩行動画の特徴量抽出",
  "スポーツ動作解析と定量化",
  "現場課題の整理と業務改善への応用",
];

export const about = [
  "宮崎大学大学院で画像処理・AIを専門に学んでいます。",
  "学部時代には、高齢者の歩行動画から速度、歩幅、姿勢角、左右偏重、歩行周期などを抽出し、歩行状態を評価する研究に取り組みました。",
  "現在は、レスリングの試合・練習動画を対象に、選手の動きや接触状態を解析し、指導者のコメントを定量化する研究に取り組んでいます。",
  "SE、社内SE、データ分析、画像処理・AI関連職に関心があります。",
];

export const research = [
  {
    title: "高齢者歩行解析",
    category: "Gait Analysis",
    description:
      "歩行動画から身体特徴を抽出し、歩行状態を定量的に評価する研究です。速度、歩幅、歩隔、姿勢角、左右偏重、歩行周期、膝関節の動きなどを解析し、歩行状態の変化を可視化しました。",
    points: [
      "速度、歩幅、歩隔などの歩行特徴量を抽出",
      "姿勢角、左右偏重、歩行周期を解析",
      "膝関節の動きや歩行状態の変化を可視化",
    ],
  },
  {
    title: "レスリング動作解析",
    category: "Sports Motion Analysis",
    description:
      "レスリングの試合・練習動画を対象に、選手の位置関係、接触状態、動作の変化を解析する研究です。将来的には、指導者のコメントと映像特徴を対応付け、技術指導を支援するシステムの構築を目指しています。",
    points: [
      "選手の位置関係と動作変化を解析",
      "接触状態や攻防の変化に着目",
      "指導者コメントと映像特徴の対応付けを検討",
    ],
  },
];

export const achievements = [
  {
    value: "九州地区 最優秀賞",
    label: "GDGoC Japan Hackathon",
  },
  {
    value: "東京決勝大会",
    label: "九州代表として決勝大会へ進出",
  },
  {
    value: "企業賞 受賞",
    label: "東京決勝大会で企業賞を受賞",
  },
];

export const projects = [
  {
    title: "GDGoC Japan Hackathon",
    type: "Team Application Development",
    description:
      "3人チームでアプリ開発に取り組み、九州地区で最優秀賞を受賞し、東京決勝大会では企業賞を受賞しました。",
    role: "アイデア整理、UI検討、役割分担、進行管理、発表資料作成などを担当し、チーム全体が限られた期間で成果を出せるように支援しました。",
    githubUrl: "https://github.com/akakirishima/mo-kun",
  },
];

export const skills = [
  "Python",
  "C / C++",
  "Flutter",
  "HTML",
  "PyTorch",
  "OpenCV",
  "NumPy",
  "matplotlib",
  "Git / GitHub",
  "Canva",
];

export const strengths = [
  "チームの状況を見ながら役割を整理する力",
  "相手に合わせて分かりやすく説明する力",
  "研究内容や技術的な内容を資料にまとめる力",
  "課題を整理し、段階的に進める力",
  "周囲を支えながら成果につなげる協調性",
];

export const careerInterests = [
  "SE",
  "社内SE",
  "データ分析",
  "画像処理・AI関連職",
  "研究開発支援",
  "ITを用いた業務改善",
];

export const careerVision = [
  "私は、IT技術を用いて現場の課題を整理し、使う人にとって分かりやすい形で解決できるエンジニアを目指しています。",
  "研究で培った画像処理・データ分析の経験に加え、チーム開発や資料作成の経験を活かし、SE、社内SE、データ分析、画像処理・AI領域で社会に貢献したいと考えています。",
];
