export const translations = {
  ru: {
    name: "Чураков Павел Сергеевич",
    position: "Frontend-разработчик · React, TypeScript, Three.js",
    downloadCV: "Скачать PDF",
    about: "О себе",
    aboutText: `<b>Frontend-инженер с 5+ годами коммерческого опыта</b> в разработке сложных веб-приложений
на React и TypeScript. Работал над высоконагруженными системами и интерфейсами, которые обрабатывают
большие объёмы данных. Специализируюсь на frontend-архитектуре, производительности и сложных
пользовательских сценариях. Проектирую API-контракты и технические решения вместе с backend-командами.
Также работал с Node.js, WebGL и Three.js. Сейчас развиваюсь в разработке <b>3D-интерфейсов и визуализации данных</b>
в браузере на Three.js / WebGL / WebGPU.
<br /><br />
<b>Основная экспертиза:</b> React, TypeScript, Next.js, Three.js / WebGL / WebGPU, frontend-архитектура и оптимизация
производительности.
<br />
<b>Дополнительный опыт:</b> Node.js, NestJS, PostgreSQL, REST API, Docker.`,

    experience: "Опыт",
    years: "лет",
    year: "год",
    years2: "года",
    months: "месяцев",
    month: "месяц",
    months2: "месяца",
    present: "н.в.",

    education: "Образование",
    bachelor: "Высшее образование (бакалавриат) — НИУ ВШЭ — Информатика и вычислительная техника",
    master: "Высшее образование (магистратура) — РУТ МИИТ — Программная инженерия",

    skills: "Знания и навыки",

    skillsList: [
      {
        name: "База",
        description: "TypeScript, JavaScript, React, Next.js",
      },
      {
        name: "Архитектура и производительность",
        description: "Frontend-архитектура, оптимизация производительности, SSR/SSG/ISR, виртуализация, lazy loading",
      },
      {
        name: "Данные и стейт",
        description: "Redux Toolkit, Zustand, React Query, SWR, REST API, WebSockets, GraphQL",
      },
      {
        name: "Сборка и инфраструктура",
        description: "Webpack, Rspack, Vite, Rollup, Module Federation, GitLab CI/CD, Docker",
      },
      {
        name: "Тестирование",
        description: "Jest, React Testing Library, Playwright, Cypress",
      },
      {
        name: "3D в браузере",
        description: "Three.js, WebGL, WebGPU, визуализация данных в реальном времени",
      },
    ],

    otherProjects: "- Другие проекты:",
    dressieWidget:
      "Виджет для Dressie.ai: встраивается в любое веб-приложение через <script />, настраивается, есть несколько вариантов дизайна и функциональности",
    visualProgramming:
      "Сервис для создания веб-приложений с помощью визуального программирования (canvas + генерация кода)",
    taskmanLib: "Библиотека для выполнения задач в браузере с заданным приоритетом",
    reactNativeApp: "Мобильное приложение на React Native для бизнеса: онлайн-карта объектов, аренда и логистика",

    ownProduct: "Собственный продукт",
    vibeemStatus: "бета",
    vibeemDescription: "Интерактивные 3D-пространства с lo-fi музыкой для фокуса и отдыха",
    vibeemTasks: [
      "3D-сцены на Three.js, Blender, с анимациями камеры и интерактивными объектами",
      "встроенные активности для фокуса и вайба",
      "backend на NestJS: JWT-аутентификация, PostgreSQL + TypeORM; десктоп-версия на Electron",
    ],
    vibeemStack: "TypeScript, React 19, Three.js, Blender, Vite, React Router, Vitest; NestJS, TypeORM, PostgreSQL; Electron",

    jobs: [
      {
        company: "Иннотех (ВТБ)",
        project1: "Sfera.Код",
        project1Description: "Внутренняя платформа управления Git-репозиториями, рассчитанная на 5000+ разработчиков.",
        project1Tasks: [
          "разработал просмотр файловой системы репозиториев с тысячами файлов, каталогов и строк кода",
          "реализовал построчное сравнение кода в коммитах (diff)",
          "сделал виртуальный список файлов для папок с тысячами элементов и кастомный рендерер подсветки синтаксиса на основе Monaco Editor с ленивой подгрузкой",
          "спроектировал вместе с backend-командой API-контракты для получения файлов и папок репозитория исходя из пользовательских сценариев, что сократило объём передаваемых данных и время загрузки",
        ],
        project2: "Единый реестр простых векселей",
        project2Tasks: [
          "перевёл монолитное банковское приложение на микрофронтенды и встроил его в общее приложение",
          "разработал <b>сложные многошаговые формы</b> с валидацией на базе корпоративного UI Kit",
          "<b>оптимизировал конфигурацию webpack</b> и сократил время сборки проекта с 9 до 5,5 минут",
          "разработал внутренние <b>плагины ESLint и Webpack</b> для автоматической проверки и стандартизации кода, что, по оценке команды, сократило время разработки примерно на 15%",
          "координировал обновление UI Kit и связанных frontend-зависимостей между несколькими командами в окружении с Module Federation",
          "самостоятельно проектировал UI-решения при отсутствии дизайн-макетов",
        ],
        stack: "TypeScript, React, Formik, Yup, styled-components, Webpack, Module Federation, Monaco Editor",
      },
      {
        company: "ISS",
        project1: "HappyDesk",
        project1Description: "Helpdesk-система для поддержки клиентов и сотрудников.",
        project1Tasks: [
          "разработал раздел «Редактор статей базы знаний» и заменил текстовый редактор на TinyMCE, что ускорило и упростило работу со статьями",
          "написал древовидный компонент с бесконечной вложенностью для перемещения статей между разделами через Drag'n'drop на любой уровень",
          "разработал отдельное приложение «База знаний», рассчитанное на вывод большого количества статей и разделов",
          "нашёл и устранил утечку памяти в приложении",
          "разработал встраиваемый через iframe компонент и протокол обмена сообщениями с основным окном (postMessage)",
          "реализовал чат в реальном времени на WebSockets",
          "участвовал в переводе проекта на современный стек с сохранением работоспособности legacy-кода",
          "решал проблемы гидрации при SSR в Next.js и Remix",
        ],
        stack:
          "TypeScript, React, Next.js, Remix, Redux Toolkit, React Hook Form, Vite, MUI, Tailwind, FSD, WebSockets",
      },
      {
        company: "ООО ЭРА",
        project1: "Корпоративная IT-система для строительной компании",
        project1Tasks: [
          "разработал на NestJS REST API (монолит) с JWT-аутентификацией, ролевой моделью доступа, фильтрацией, сортировкой и пагинацией; система постепенно заменила часть модулей 1С",
          "разработал на React и TypeScript интерфейсные модули для согласований, управления складом и внутреннего чата",
        ],
        stack:
          "front — React, TypeScript, Redux, Storybook; back — NestJS, TypeORM, PostgreSQL, Nginx, Docker, WebSockets",
      },
      {
        company:
          "Учебно-исследовательская лаборатория функциональной безопасности космических аппаратов и систем МИЭМ НИУ ВШЭ",
        project1: "Виртуальный космос",
        project1Description: "Веб-приложение для визуализации полёта космического аппарата и расчётов.",
        project1Tasks: [
          "разрабатывал frontend веб-приложения",
          "<b>главная задача:</b> разработал систему 3D-визуализации в реальном времени на React и Three.js, которая отображает телеметрию и расчётные данные, получаемые из C++-сервиса через gRPC",
        ],
        stack: "React, Three.js, gRPC",
      },
    ],

    whatDid: "Что делал",
    stack: "Стек",
    link: "Ссылка",
  },

  en: {
    name: "Pavel Churakov",
    position: "Frontend Engineer · React, TypeScript, Three.js",
    downloadCV: "Download PDF (RU)",
    about: "About Me",
    aboutText: `<b>Frontend Engineer with 5+ years of commercial experience</b> building complex web applications
with React and TypeScript. Worked on high-load systems and interfaces that handle large volumes of data.
Specialized in frontend architecture, performance, and complex user flows. Design API contracts and
technical solutions together with backend teams. Also worked with Node.js, WebGL, and Three.js.
Currently focused on <b>3D interfaces and data visualization</b> in the browser with Three.js / WebGL / WebGPU.
<br /><br />
<b>Core expertise:</b> React, TypeScript, Next.js, Three.js / WebGL / WebGPU, frontend architecture and performance optimization.
<br />
<b>Additional experience:</b> Node.js, NestJS, PostgreSQL, REST API, Docker.`,

    experience: "Experience",
    years: "years",
    year: "year",
    years2: "years",
    months: "months",
    month: "month",
    months2: "months",
    present: "present",

    education: "Education",
    bachelor: "Bachelor's degree — HSE University — Computer Science and Engineering",
    master: "Master's degree — RUT MIIT — Software Engineering",

    skills: "Knowledge and Skills",

    skillsList: [
      {
        name: "Core",
        description: "TypeScript, JavaScript, React, Next.js",
      },
      {
        name: "Architecture & Performance",
        description: "Frontend architecture, performance optimization, SSR/SSG/ISR, virtualization, lazy loading",
      },
      {
        name: "State & Data",
        description: "Redux Toolkit, Zustand, React Query, SWR, REST API, WebSockets, GraphQL",
      },
      {
        name: "Build & Infrastructure",
        description: "Webpack, Rspack, Vite, Rollup, Module Federation, GitLab CI/CD, Docker",
      },
      {
        name: "Testing",
        description: "Jest, React Testing Library, Playwright, Cypress",
      },
      {
        name: "3D in the browser",
        description: "Three.js, WebGL, WebGPU, real-time data visualization",
      },
    ],

    otherProjects: "- Other projects:",
    dressieWidget:
      "Widget for Dressie.ai: embeds into any web application via <script />, customizable, with several design and feature options",
    visualProgramming: "Service for building web applications through visual programming (canvas + code generation)",
    taskmanLib: "Library for running tasks in the browser with a given priority",
    reactNativeApp: "React Native mobile app for a business: online map of objects, rentals and logistics",

    ownProduct: "Own product",
    vibeemStatus: "beta",
    vibeemDescription: "Interactive 3D spaces with lo-fi music for focus and rest",
    vibeemTasks: [
      "3D scenes in Three.js and Blender, with camera animations and interactive objects",
      "built-in activities for focus and vibe",
      "backend on NestJS: JWT authentication, PostgreSQL + TypeORM; desktop version on Electron",
    ],
    vibeemStack: "TypeScript, React 19, Three.js, Blender, Vite, React Router, Vitest; NestJS, TypeORM, PostgreSQL; Electron",

    jobs: [
      {
        company: "Innotech (VTB)",
        project1: "Sfera.Kod",
        project1Description: "Internal Git repository management platform built for 5000+ developers.",
        project1Tasks: [
          "built a file system viewer for repositories with thousands of files, directories and lines of code",
          "implemented line-by-line code diffs for commits",
          "built a virtualized file list for folders with thousands of items and a custom syntax highlighting renderer based on Monaco Editor with lazy loading",
          "designed API contracts with the backend team for fetching repository files and folders based on user flows, reducing payload size and load time",
        ],
        project2: "Unified Register of Promissory Notes",
        project2Tasks: [
          "migrated a monolithic banking application to micro-frontends and embedded it into the main application",
          "built <b>complex multi-step forms</b> with validation on top of the corporate UI Kit",
          "<b>optimized the webpack configuration</b>, cutting build time from 9 to 5.5 minutes",
          "built internal <b>ESLint and Webpack plugins</b> for automated code checks and standardization, which reduced development time by about 15% according to team estimates",
          "coordinated UI Kit and related frontend dependency upgrades across several teams in a Module Federation setup",
          "designed UI solutions independently when no design mockups were available",
        ],
        stack: "TypeScript, React, Formik, Yup, styled-components, Webpack, Module Federation, Monaco Editor",
      },
      {
        company: "ISS",
        project1: "HappyDesk",
        project1Description: "Helpdesk system for customer and employee support.",
        project1Tasks: [
          "built the knowledge base article editor and replaced the text editor with TinyMCE, making work with articles faster and easier",
          "built a tree component with unlimited nesting for moving articles between sections via drag'n'drop to any level",
          "built a standalone Knowledge Base application designed to render large numbers of articles and sections",
          "found and fixed a memory leak in the application",
          "built an iframe-embedded component and a messaging protocol with the host window (postMessage)",
          "implemented a real-time chat with WebSockets",
          "took part in migrating the project to a modern stack while keeping the legacy code working",
          "solved SSR hydration issues in Next.js and Remix",
        ],
        stack:
          "TypeScript, React, Next.js, Remix, Redux Toolkit, React Hook Form, Vite, MUI, Tailwind, FSD, WebSockets",
      },
      {
        company: "OOO ERA",
        project1: "Corporate IT system for a construction company",
        project1Tasks: [
          "built a NestJS REST API (monolith) with JWT authentication, role-based access control, filtering, sorting and pagination; the system gradually replaced several 1C modules",
          "built React and TypeScript UI modules for approvals, warehouse management and internal chat",
        ],
        stack:
          "front — React, TypeScript, Redux, Storybook; back — NestJS, TypeORM, PostgreSQL, Nginx, Docker, WebSockets",
      },
      {
        company: "Research Laboratory of Functional Safety of Spacecraft and Systems, MIEM HSE",
        project1: "Virtual Space",
        project1Description: "Web application for spacecraft flight visualization and calculations.",
        project1Tasks: [
          "developed the web application frontend",
          "<b>key work:</b> built a real-time 3D visualization system with React and Three.js that displays telemetry and calculated data received from a C++ service via gRPC",
        ],
        stack: "React, Three.js, gRPC",
      },
    ],

    whatDid: "What I did",
    stack: "Stack",
    link: "Link",
  },
};

export const t = (lang, key) => {
  return translations[lang]?.[key] || translations.ru[key] || key;
};

export const getYearsName = (years, lang) => {
  const t = translations[lang];
  if ((years >= 5 && years <= 20) || years === 0) return t.years;
  if (years % 10 === 1) return t.year;
  if (years % 10 < 5) return t.years2;
  return t.years;
};

export const getMonthsName = (months, lang) => {
  const t = translations[lang];
  if ((months >= 5 && months <= 20) || months === 0) return t.months;
  if (months % 10 === 1) return t.month;
  if (months % 10 < 5) return t.months2;
  return t.months;
};

// "2 года 3 месяца"; zero parts are skipped
export const formatDuration = ({ years, months }, lang) => {
  const parts = [];
  if (years) parts.push(`${years} ${getYearsName(years, lang)}`);
  if (months || !years) parts.push(`${months} ${getMonthsName(months, lang)}`);
  return parts.join(" ");
};
