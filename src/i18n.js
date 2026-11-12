export const translations = {
  ru: {
    name: "Чураков Павел Сергеевич",
    position: "Full-stack разработчик · React, Three.js, Nest · Golang",
    downloadCV: "Скачать PDF",
    about: "О себе",
    aboutText: `<b>Full-stack разработчик с {years} коммерческого опыта</b> в разработке сложных веб-приложений:
frontend на React и TypeScript, backend на Go и Node.js (NestJS). В Иннотех (ВТБ) делаю Git-платформу
Sfera.Код для 5000+ разработчиков: просмотр репозиториев с тысячами файлов, граф коммитов, BFF на NestJS.
Также работал в продуктовой компании ISS над helpdesk-системой HappyDesk. На frontend отвечаю за все аспекты
веб-приложения, включая архитектуру, производительность, сборку, тесты и другое. На backend пишу REST-
и gRPC-сервисы на Go, работаю с PostgreSQL, Redis и Kafka. Также нравится развиваться в разработке
<b>3D-интерфейсов и визуализации данных</b> в браузере на Three.js / WebGL / WebGPU.
<br /><br />
<b>Frontend:</b> React, TypeScript, Next.js, Three.js / WebGL / WebGPU, frontend-архитектура и оптимизация
производительности.
<br />
<b>Backend:</b> Go, Node.js / NestJS, REST, gRPC, PostgreSQL, ClickHouse, Redis, Kafka, Docker, Kubernetes, Linux.`,

    experience: "Опыт",
    years: "лет",
    year: "год",
    years2: "года",
    months: "месяцев",
    month: "месяц",
    months2: "месяца",
    present: "н.в.",

    education: "Образование",
    bachelor: "Высшее образование (бакалавриат) - НИУ ВШЭ - Информатика и вычислительная техника",
    master: "Высшее образование (магистратура) - РУТ МИИТ - Программная инженерия",

    skills: "Знания и навыки",

    skillGroups: [
      {
        title: "Frontend",
        items: [
          { icon: "core", name: "База", description: "TypeScript, JavaScript, React, Next.js" },
          {
            icon: "arch",
            name: "Архитектура и производительность",
            description:
              "Frontend-архитектура, оптимизация производительности, SSR/SSG/ISR, виртуализация, lazy loading",
          },
          {
            icon: "state",
            name: "Данные и стейт",
            description: "Redux Toolkit, Zustand, React Query, SWR, REST API, WebSockets, GraphQL",
          },
          { icon: "build", name: "Сборка", description: "Webpack, Rspack, Vite, Rollup, Module Federation" },
          { icon: "testing", name: "Тестирование", description: "Jest, React Testing Library, Playwright, Cypress" },
          {
            icon: "three",
            name: "3D в браузере",
            description: "Three.js, WebGL, WebGPU, визуализация данных в реальном времени",
          },
        ],
      },
      {
        title: "Backend",
        items: [
          { icon: "go", name: "Go", description: "Go, goroutines и channels, context, REST API, gRPC-сервисы" },
          { icon: "node", name: "Node.js", description: "Node.js, NestJS, REST API, WebSockets" },
          { icon: "db", name: "Базы данных и кэш", description: "PostgreSQL, ClickHouse, Redis, SQL" },
          {
            icon: "messaging",
            name: "Взаимодействие сервисов",
            description: "gRPC, Protobuf, Kafka, REST, WebSockets",
          },
          {
            icon: "backArch",
            name: "Архитектура и доступ",
            description: "Микросервисы, проектирование API-контрактов, JWT-аутентификация, ролевая модель доступа",
          },
          {
            icon: "infra",
            name: "Инфраструктура",
            description: "Docker, Kubernetes, Nginx, GitLab CI/CD, GitHub Actions, уверенное владение Linux",
          },
        ],
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
      "backend на Go: REST API, JWT-аутентификация, PostgreSQL",
    ],
    vibeemStack: "TypeScript, React 19, Three.js, Blender, Vite, React Router, Vitest; Go, PostgreSQL; Electron",

    jobs: [
      {
        company: "Иннотех (ВТБ)",
        project1: "Sfera.Код",
        project1Description: "Внутренняя платформа управления Git-репозиториями, рассчитанная на 5000+ разработчиков.",
        project1Tasks: [
          "обрабатывал и подготавливал данные для просмотра файловой системы репозиториев с тысячами файлов, каталогов и строк кода",
          "<b>разработал граф коммитов для файлов</b>: раскладку веток и merge-коммитов по колонкам и отрисовку графа синхронно со списком коммитов",
          "сделал <b>виртуальный список файлов</b> для папок с тысячами элементов",
          "спроектировал вместе с backend-командой API-контракты для получения файлов, коммитов репозитория исходя из пользовательских сценариев, что <b>сократило объём передаваемых данных и время загрузки</b>",
          "разработал <b>BFF-слой на NestJS</b>: он собирает данные из нескольких backend-сервисов (файлы, коммиты, права доступа) в один ответ под конкретный экран, что сократило число запросов с клиента и упростило логику на frontend",
        ],
        project2: "Единый реестр простых векселей",
        project2Tasks: [
          "обновлял монолитное банковское приложение <b>современными микрофронтендами</b>",
          "разработал <b>сложные многошаговые формы</b> с валидацией на базе корпоративного UI Kit и Formik",
          "<b>оптимизировал конфигурацию webpack</b> и сократил время сборки проекта с 9 до 5,5 минут",
          "разработал внутренние <b>плагины ESLint и Webpack</b> для автоматической проверки и стандартизации кода, что, по оценке команды, сократило время разработки примерно на 15%",
          "<b>координировал обновление UI Kit</b> и связанных frontend-зависимостей между несколькими командами в окружении с Module Federation",
          "самостоятельно проектировал UI-решения при отсутствии дизайн-макетов",
        ],
        stack:
          "TypeScript, React, Formik, Yup, styled-components, Webpack, Module Federation, Monaco Editor; BFF - Node.js, NestJS",
      },
      {
        company: "ISS",
        project1: "HappyDesk",
        project1Description: "Helpdesk-система для поддержки клиентов и сотрудников.",
        project1Tasks: [
          "разработал раздел «Редактор статей базы знаний» и заменил текстовый редактор на TinyMCE, что ускорило и упростило работу со статьями",
          "написал <b>древовидный компонент с бесконечной вложенностью</b> для перемещения статей между разделами через Drag'n'drop на любой уровень",
          "разработал <b>отдельное приложение «База знаний»</b>, рассчитанное на вывод большого количества статей и разделов, настроил маршрутизацию по статьям и разделам",
          "<b>нашёл и устранил утечку памяти</b> в приложении",
          "разработал встраиваемый через iframe компонент и протокол обмена сообщениями с основным окном (postMessage)",
          "добавил новые функции для <b>чата в реальном времени на WebSockets</b>: индикатор набора текста, статусы доставки и прочтения сообщений, отправку файлов и изображений",
          "решал <b>проблемы гидрации при SSR</b> в Next.js и Remix",
          "разработал на Go REST API для базы знаний: дерево разделов и статей с пагинацией и поиском, кэширование популярных статей в Redis",
        ],
        stack:
          "front - TypeScript, React, Next.js, Remix, Redux Toolkit, React Hook Form, Vite, MUI, Tailwind, FSD, WebSockets; back - Go, PostgreSQL, Redis, Docker",
      },
      {
        company: "ООО ЭРА",
        project1: "Корпоративная IT-система для строительной компании",
        project1Tasks: [
          "разработал на NestJS REST API (монолит) с JWT-аутентификацией, ролевой моделью доступа, фильтрацией, сортировкой и пагинацией; <b>система постепенно заменила часть модулей 1С</b>",
          "разрабатывал backend-сервисы на Go: REST API, работа с PostgreSQL, конкурентная обработка данных на goroutines и channels, сборка и запуск в Docker",
          "разработал на React и TypeScript интерфейсные модули для согласований, управления складом и внутреннего чата",
        ],
        stack: "front - React, TypeScript, Redux, Storybook; back - Go, NestJS, PostgreSQL, Nginx, Docker, WebSockets",
      },
      {
        company:
          "Учебно-исследовательская лаборатория функциональной безопасности космических аппаратов и систем МИЭМ НИУ ВШЭ",
        project1: "Виртуальный космос",
        project1Description: "Веб-приложение для визуализации полёта космического аппарата и расчётов.",
        project1Tasks: [
          "работал full-stack: frontend на React и Three.js, backend на Go",
          "<b>главная задача:</b> разработал <b>систему 3D-визуализации в реальном времени</b> на React и Three.js, которая отображает телеметрию и расчётные данные",
          "разработал на Go <b>gRPC-сервис, который рассчитывает параметры полёта</b> и передаёт телеметрию и расчётные данные во frontend",
        ],
        stack: "React, Three.js; Go, gRPC, Protobuf",
      },
    ],

    whatDid: "Что делал",
    stack: "Стек",
    link: "Ссылка",
  },

  en: {
    name: "Pavel Churakov",
    position: "Full-stack Developer · React, Three.js, Nest · Golang",
    downloadCV: "Download PDF (RU)",
    about: "About Me",
    aboutText: `<b>Full-stack Developer with {years} of commercial experience</b> building complex web applications:
frontend with React and TypeScript, backend with Go and Node.js (NestJS). At Innotech (VTB) I build
Sfera.Kod, a Git platform for 5000+ developers: browsing repositories with thousands of files, a commit graph,
a NestJS BFF. I also worked at the product company ISS on the HappyDesk helpdesk system. On the frontend I own
every aspect of a web application, including architecture, performance, build, tests and more. On the backend
I build REST and gRPC services in Go and work with PostgreSQL, Redis, and Kafka. I also enjoy growing in
<b>3D interfaces and data visualization</b> in the browser with Three.js / WebGL / WebGPU.
<br /><br />
<b>Frontend:</b> React, TypeScript, Next.js, Three.js / WebGL / WebGPU, frontend architecture and performance optimization.
<br />
<b>Backend:</b> Go, Node.js / NestJS, REST, gRPC, PostgreSQL, ClickHouse, Redis, Kafka, Docker, Kubernetes, Linux.`,

    experience: "Experience",
    years: "years",
    year: "year",
    years2: "years",
    months: "months",
    month: "month",
    months2: "months",
    present: "present",

    education: "Education",
    bachelor: "Bachelor's degree - HSE University - Computer Science and Engineering",
    master: "Master's degree - RUT MIIT - Software Engineering",

    skills: "Knowledge and Skills",

    skillGroups: [
      {
        title: "Frontend",
        items: [
          { icon: "core", name: "Core", description: "TypeScript, JavaScript, React, Next.js" },
          {
            icon: "arch",
            name: "Architecture & Performance",
            description: "Frontend architecture, performance optimization, SSR/SSG/ISR, virtualization, lazy loading",
          },
          {
            icon: "state",
            name: "State & Data",
            description: "Redux Toolkit, Zustand, React Query, SWR, REST API, WebSockets, GraphQL",
          },
          { icon: "build", name: "Build", description: "Webpack, Rspack, Vite, Rollup, Module Federation" },
          { icon: "testing", name: "Testing", description: "Jest, React Testing Library, Playwright, Cypress" },
          {
            icon: "three",
            name: "3D in the browser",
            description: "Three.js, WebGL, WebGPU, real-time data visualization",
          },
        ],
      },
      {
        title: "Backend",
        items: [
          { icon: "go", name: "Go", description: "Go, goroutines and channels, context, REST APIs, gRPC services" },
          { icon: "node", name: "Node.js", description: "Node.js, NestJS, REST API, WebSockets" },
          { icon: "db", name: "Databases & Caching", description: "PostgreSQL, ClickHouse, Redis, SQL" },
          {
            icon: "messaging",
            name: "Service Communication",
            description: "gRPC, Protobuf, Kafka, REST, WebSockets",
          },
          {
            icon: "backArch",
            name: "Architecture & Access",
            description: "Microservices, API contract design, JWT authentication, role-based access control",
          },
          {
            icon: "infra",
            name: "Infrastructure",
            description: "Docker, Kubernetes, Nginx, GitLab CI/CD, GitHub Actions, proficient in Linux",
          },
        ],
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
      "backend in Go: REST API, JWT authentication, PostgreSQL",
    ],
    vibeemStack: "TypeScript, React 19, Three.js, Blender, Vite, React Router, Vitest; Go, PostgreSQL; Electron",

    jobs: [
      {
        company: "Innotech (VTB)",
        project1: "Sfera.Kod",
        project1Description: "Internal Git repository management platform built for 5000+ developers.",
        project1Tasks: [
          "processed and prepared data for the file system viewer of repositories with thousands of files, directories and lines of code",
          "<b>built a commit graph for files</b>: laying out branches and merge commits into columns and rendering the graph in sync with the commit list",
          "built a <b>virtualized file list</b> for folders with thousands of items",
          "designed API contracts with the backend team for fetching repository files and commits based on user flows, <b>reducing payload size and load time</b>",
          "built a <b>NestJS BFF layer</b> that combines data from several backend services (files, commits, access rights) into a single response per screen, reducing client requests and simplifying frontend logic",
        ],
        project2: "Unified Register of Promissory Notes",
        project2Tasks: [
          "modernized a monolithic banking application <b>with micro-frontends</b>",
          "built <b>complex multi-step forms</b> with validation on top of the corporate UI Kit and Formik",
          "<b>optimized the webpack configuration</b>, cutting build time from 9 to 5.5 minutes",
          "built internal <b>ESLint and Webpack plugins</b> for automated code checks and standardization, which reduced development time by about 15% according to team estimates",
          "<b>coordinated UI Kit and related frontend dependency upgrades</b> across several teams in a Module Federation setup",
          "designed UI solutions independently when no design mockups were available",
        ],
        stack:
          "TypeScript, React, Formik, Yup, styled-components, Webpack, Module Federation, Monaco Editor; BFF - Node.js, NestJS",
      },
      {
        company: "ISS",
        project1: "HappyDesk",
        project1Description: "Helpdesk system for customer and employee support.",
        project1Tasks: [
          "built the knowledge base article editor and replaced the text editor with TinyMCE, making work with articles faster and easier",
          "built a <b>tree component with unlimited nesting</b> for moving articles between sections via drag'n'drop to any level",
          "built a <b>standalone Knowledge Base application</b> designed to render large numbers of articles and sections, and set up routing for articles and sections",
          "<b>found and fixed a memory leak</b> in the application",
          "built an iframe-embedded component and a messaging protocol with the host window (postMessage)",
          "added new features to the <b>real-time WebSocket chat</b>: typing indicator, message delivery and read receipts, file and image sharing",
          "solved <b>SSR hydration issues</b> in Next.js and Remix",
          "built a Go REST API for the knowledge base: a tree of sections and articles with pagination and search, caching popular articles in Redis",
        ],
        stack:
          "front - TypeScript, React, Next.js, Remix, Redux Toolkit, React Hook Form, Vite, MUI, Tailwind, FSD, WebSockets; back - Go, PostgreSQL, Redis, Docker",
      },
      {
        company: "OOO ERA",
        project1: "Corporate IT system for a construction company",
        project1Tasks: [
          "built a NestJS REST API (monolith) with JWT authentication, role-based access control, filtering, sorting and pagination; <b>the system gradually replaced several 1C modules</b>",
          "built backend services in Go: REST APIs, PostgreSQL data access, concurrent data processing with goroutines and channels, packaged and run in Docker",
          "built React and TypeScript UI modules for approvals, warehouse management and internal chat",
        ],
        stack: "front - React, TypeScript, Redux, Storybook; back - Go, NestJS, PostgreSQL, Nginx, Docker, WebSockets",
      },
      {
        company: "Research Laboratory of Functional Safety of Spacecraft and Systems, MIEM HSE",
        project1: "Virtual Space",
        project1Description: "Web application for spacecraft flight visualization and calculations.",
        project1Tasks: [
          "worked full-stack: frontend in React and Three.js, backend in Go",
          "<b>key work:</b> built a <b>real-time 3D visualization system</b> with React and Three.js that displays telemetry and calculated data",
          "built a Go <b>gRPC service that calculates flight parameters</b> and streams telemetry and calculated data to the frontend",
        ],
        stack: "React, Three.js; Go, gRPC, Protobuf",
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
