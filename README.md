# Think Launch

**Think Launch** is a modern, feature-rich project built using the latest technologies, including **React 19**, **Next.js 15**, and **Sanity**. This repository focuses on a minimalistic yet highly functional design, ensuring clean code architecture and reusability.

---

## ✨ Features

- **Minimalistic Design**: Fresh and simple UI with only the essential pages for ease of use and a clean aesthetic.
- **Next.js 15**: Leveraging the power of the latest Next.js version for seamless server-side rendering and API routes.
- **React 19**: Cutting-edge React features for improved performance and functionality.
- **Sanity Integration**: Headless CMS for flexible content management.
- **Radix UI Components**: Clean, accessible, and customizable components for enhanced UI.
- **Tailwind CSS**: Rapidly build modern and responsive UI.
- **Markdown Support**: Easily manage and render markdown content.
- **Authentication**: Built-in support for authentication via NextAuth.

---

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

### **Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### **Cloning the Repository**

```bash
git clone https://github.com/DmytroLysachenko/think-launch.git
cd think-launch
```

### **Installation**

Install the project dependencies using npm:

```bash
npm install
```

### **Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION='vX'
SANITY_TOKEN=

AUTH_SECRET=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```

Replace the placeholder values with your actual Sanity credentials and authentication details. You can obtain these credentials by signing up and creating a new project on the [Sanity website](https://www.sanity.io/).

### **Running the Project**

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

---

## <a name="tech-stack">🛠️ Tech Stack</a>

- **Framework**: Next.js 15
- **Frontend**: React 19, Tailwind CSS
- **CMS**: Sanity
- **UI Components**: Radix UI, Lucide React
- **Markdown Parsing**: markdown-it, Sanity Plugin Markdown
- **Authentication**: NextAuth
- **TypeScript Support**: Fully integrated with TypeScript for type safety

---

## <a name="scripts">📜 Available Scripts</a>

In the project directory, you can run:

- `npm run dev`: Runs the app in the development mode.
- `npm run build`: Builds the app for production.
- `npm run start`: Starts the production build.
- `npm run lint`: Runs the linter to check for code quality.
- `npm run typegen`: Generates types for Sanity schemas.

---

## <a name="contributing">🤝 Contributing</a>

We welcome contributions! If you want to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request

---

## <a name="contact">📞 Contact</a>

For any inquiries, feel free to reach out:

- **Email**: dlysachenko98@gmail.com
- **GitHub**: [My github](https://github.com/DmytroLysachenko)
