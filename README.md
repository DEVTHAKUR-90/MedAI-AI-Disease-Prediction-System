```
███╗   ███╗███████╗██████╗      █████╗ ██╗
████╗ ████║██╔════╝██╔══██╗    ██╔══██╗██║
██╔████╔██║█████╗  ██║  ██║    ███████║██║
██║╚██╔╝██║██╔══╝  ██║  ██║    ██╔══██║██║
██║ ╚═╝ ██║███████╗██████╔╝    ██║  ██║██║
╚═╝     ╚═╝╚══════╝╚═════╝     ╚═╝  ╚═╝╚═╝
```

<div align="center">

**AI-Powered Disease Prediction System**

[![React](https://img.shields.io/badge/React-Vite-61DAFB?style=flat-square&logo=react)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=flat-square&logo=vercel)](https://med-ai-ai-disease-prediction-system.vercel.app)

*Bridging the gap between symptoms and insights — fast, clean, and intelligent.*

[Live Demo](https://med-ai-ai-disease-prediction-system.vercel.app) · [Report Bug](../../issues) · [Request Feature](../../issues)

</div>

---

## Overview

**MedAI** is a modern, responsive web application that predicts possible diseases based on user-selected symptoms. It demonstrates how structured logic and intelligent systems can assist users in quickly identifying potential health conditions — all wrapped in a clean, intuitive interface.

> ⚠️ **Disclaimer:** MedAI is a demonstration project and is not intended as a substitute for professional medical advice, diagnosis, or treatment.

---

## Features

```
┌─────────────────────────────────────────────────────┐
│                   CORE FEATURES                     │
├──────────────────────┬──────────────────────────────┤
│  🩺 Symptom Input    │  Select from a rich list of  │
│                      │  symptoms via a clean UI      │
├──────────────────────┼──────────────────────────────┤
│  🔍 Prediction Engine│  Smart logic maps symptoms    │
│                      │  to probable conditions       │
├──────────────────────┼──────────────────────────────┤
│  ⚡ Fast & Responsive│  Instant results with a       │
│                      │  mobile-first design          │
├──────────────────────┼──────────────────────────────┤
│  🧩 Modular Codebase │  Clean, reusable components   │
│                      │  for easy extensibility       │
└──────────────────────┴──────────────────────────────┘
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React (Vite) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Deployment** | Vercel |

---

## Project Structure

```
medai/
│
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── SymptomSelector.tsx
│   │   ├── ResultCard.tsx
│   │   └── ...
│   │
│   ├── data/              # Disease & symptom dataset
│   │   └── diseases.ts
│   │
│   └── utils/             # Prediction logic & helpers
│       └── predict.ts
│
├── public/
├── index.html
├── vite.config.ts
└── tailwind.config.ts
```

---

## How It Works

```
  User Selects Symptoms
          │
          ▼
  ┌───────────────────┐
  │   Symptom Input   │  ──▶  Collects selected symptoms
  └───────────────────┘
          │
          ▼
  ┌───────────────────┐
  │  Prediction Engine│  ──▶  Matches against disease dataset
  └───────────────────┘
          │
          ▼
  ┌───────────────────┐
  │   Result Display  │  ──▶  Shows ranked probable conditions
  └───────────────────┘
```

The system analyses the user's selected symptoms against a predefined disease dataset, scoring and ranking potential conditions based on symptom overlap and relevance.

---

## Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/medai.git

# Navigate into the project directory
cd medai

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## Live Demo

> 🌐 [med-ai-ai-disease-prediction-system.vercel.app](https://med-ai-ai-disease-prediction-system.vercel.app)

---

## Roadmap

- [x] Symptom-based disease prediction
- [x] Responsive and accessible UI
- [ ] Integration with real AI/ML models
- [ ] RESTful backend API for dynamic data
- [ ] User authentication and history tracking
- [ ] Improved prediction accuracy with weighted scoring
- [ ] Multi-language support

---

## Contributing

Contributions are welcome and appreciated. To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add: your feature description'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## Author

**Dev Thakur**

Cybersecurity enthusiast and developer passionate about building intelligent systems and solving real-world problems.

[![GitHub](https://img.shields.io/badge/GitHub-DevThakur-181717?style=flat-square&logo=github)](https://github.com/your-username)

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

<div align="center">
  <sub>Built with ❤️ by Dev Thakur</sub>
</div>
