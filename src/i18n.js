export const translations = {
  ru: {
    name: "Чураков Павел Сергеевич",
    position: "Frontend-разработчик",
    about: "О себе",
    aboutText: `<b>Frontend Engineer с 5+ годами коммерческого опыта</b> в разработке сложных веб-приложений
на React и TypeScript. Работал над высоконагруженными системами и интерфейсами, требующими
эффективной работы с большими объёмами данных. Специализируюсь на frontend-архитектуре,
производительности и разработке сложных пользовательских сценариев. Имею опыт взаимодействия с
backend-командами при проектировании API-контрактов и технических решений. Дополнительно
работал с Node.js, WebGL и Three.js.
<br /><br />
<b>Основная экспертиза:</b> React, TypeScript, Next.js, frontend архитектура и оптимизация
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

    education: "Образование",
    bachelor: "Высшее образование (бакалавриат) - НИУ ВШЭ - Информатика и вычислительная техника",
    master: "Высшее образование (магистратура) - РУТ МИИТ - Программная инженерия",

    skills: "Знания и навыки",

    skillsList: [
      {
        name: "База",
        description: "TypeScript, JavaScript, React, Next.js",
      },
      {
        name: "Архитектура и Производительность",
        description: "Frontend Архитектура, Оптимизация Производительности, SSR/SSG/ISR, Виртуализация, Lazy Loading",
      },
      {
        name: "Стейт менеджеры",
        description: "Redux Toolkit, Zustand, REST API, WebSockets, GraphQL, React Query, SWR",
      },
      {
        name: "Сборка и Инфраструктура",
        description: "Webpack, Rspack, Vite, Rollup, GitLab CI/CD, Docker",
      },
      {
        name: "Тестирование",
        description: "Jest, React Testing Library, Playwright, Cypress.",
      },
      {
        name: "ThreeJS",
        description: "3D в браузере (писал визуализацию полёта спутника по околоземной орбите).",
      },
    ],

    otherProjects: "- Другие проекты:",
    dressieWidget:
      "Создал виджет для Dressie.ai, встраиваемый в любое веб-приложение с помощью <script /> с кастомизацией, разными вариантами дизайна и функционала;",
    visualProgramming:
      "Сервис для разработки веб-приложений с помощью визуального программирования (canvas + генерация кода);",
    taskmanLib: "Библиотека для добавления задач, которые должны быть выполнены в браузере с заданным приоритетом;",
    reactNativeApp:
      "Написал мобильное приложение (react native) для бизнеса с онлайн-картой объектов, арендой и логистикой.",

    jobs: [
      {
        company: "Иннотех (ВТБ)",
        project1: "Sfera.Код.",
        project1Description:
          "Внутренняя платформа управления Git-репозиториями, рассчитанная на использование 500+ разработчиками.",
        project1Tasks: [
          "разрабатывал просмотр файловой системы репозиториев, содержащих тысячи файлов, каталогов и строк кода,",
          "реализовал сравнение строк кода в коммитах,",
          "разрабатывал виртуальный список файлов для папок с тысячами элементов и кастомный рендерер синтаксиса кода (на основе Monaco Editor) с ленивой подгрузкой.",
          "прорабатывал контракты API совместно с backend командой (требования, возникающие со стороны пользовательского сценария) получения данных файлов и папок репозитория, чтобы оптимизировать кол-во данных и времени.",
        ],
        project2: "Единый реестр простых векселей.",
        project2Tasks: [
          "переписывал монолитное банковское приложение на микросервисное решение и встраивал в общее приложение,",
          "много работы <b>со сложными формами</b> на готовых UI компонентах,",
          "<b>оптимизировал конфигурацию webpack</b>, сократив время сборки проекта с 9 до 5.5 минут,",
          "разработал внутренние <b>плагины ESLint и Webpack</b> для автоматизации проверки и стандартизации кода, что, по оценке команды, сократило время разработки примерно на 15%,",
          "координировал обновление UI Kit и связанных frontend-зависимостей между несколькими командами в окружении с Module Federation,",
          "самостоятельно проектировал UI-решения в условиях отсутствия готовых дизайн-макетов.",
        ],
        stack: "typescript, react, formik, yup, styled-components, webpack, monaco-editor.",
      },
      {
        company: "ISS",
        project1: "HappyDesk",
        project1Description: "Helpdesk-система для поддержки клиентов и сотрудников.",
        project1Tasks: [
          'разработал раздел "редактор статей базы знаний", что позволило повысить удобство и временные показатели работы со статьями базы знаний + заменил компонент "Текстовый редактор", использовал tinymce,',
          "написал дерево-компонент для перемещения статей в другие разделы с бесконечной вложенностью и возможностью перемещения статей на любой уровень вложенности с помощью Drag’n’drop,",
          "разработал отдельный проект для Базы Знаний (вывод в том числе огромных количеств статей и разделов),",
          "фиксил утечку памяти в приложении,",
          "написал компонент, обёрнутый в iframe, и логику для общения с основным окном (postMessage),",
          "реализован чат в режиме реального времени с использованием WebSockets,",
          "участвовал в переносе проекта на более современный стэк с сохранением старого кода,",
          "решал проблемы с гидрацией SSR Next и Remix.",
        ],
        stack: "typescript, react, next, remix, redux, react-hook-form, vite, mui, rtk + tailwind, FSD, websockets.",
      },
      {
        company: "ООО ЭРА",
        project1: "Корпоративная IT система для строительной компании.",
        project1Tasks: [
          "создавал API с авторизацией и ролями (монолит), которое в процессе становилось на замену некоторым модулям 1С, в основном CRUD операции с сортировками, фильтрацией и пагинацией,",
          "разработал интерфейсные модули React/TypeScript для согласований, управления складом и внутреннего чата, дополнительно разработал NestJS REST API с аутентификацией JWT, управлением доступом на основе ролей, фильтрацией, сортировкой и разбивкой по страницам.",
        ],
        stack:
          "front - react, typescript, redux, storybook; back - nest, typeorm, postgres, nginx, docker, websockets.",
      },
      {
        company: "Учебно-исследовательская лаборатория функциональной безопасности космических аппаратов и систем МИЭМ",
        project1: "Виртуальный космос",
        project1Description: "Веб-приложение для визуализации полёта космического аппарата и расчётов.",
        project1Tasks: [
          "разрабатывал веб-приложение и фронтенд системы,",
          "<b>главная фича:</b> разработал систему 3D-визуализации в реальном времени с использованием React и Three.js, отображающую телеметрические и расчетные данные, полученные из C++-сервиса через gRPC.",
        ],
        stack: "react, three.js, grpc.",
      },
    ],

    whatDid: "Что делал",
    stack: "Стэк",
    link: "Ссылка",
  },

  en: {
    name: "Pavel Churakov",
    position: "Frontend Developer",
    about: "About Me",
    aboutText: `<b>Frontend Engineer with 5+ years of commercial experience</b> developing complex web applications
with React and TypeScript. Worked on high-load systems and interfaces requiring efficient handling
of large volumes of data. Specialized in frontend architecture, performance, and development of
complex user scenarios. Experienced in collaborating with backend teams on API contracts and
technical solutions. Also worked with Node.js, WebGL, and Three.js.
<br /><br />
<b>Core expertise:</b> React, TypeScript, Next.js, frontend architecture and performance optimization.
<br />
<b>Additional experience:</b> Node.js, NestJS, PostgreSQL, REST API, Docker.`,

    experience: "Experience",
    years: "years",
    year: "year",
    years2: "years",
    months: "months",
    month: "month",
    months2: "months",

    education: "Education",
    bachelor: "Higher Education (Bachelor's) - HSE University - Computer Science and Engineering",
    master: "Higher Education (Master's) - RUT MIIT - Software Engineering",

    skills: "Knowledge and Skills",

    skillsList: [
      {
        name: "Basics",
        description: "TypeScript, JavaScript, React, Next.js",
      },
      {
        name: "Architecture & Performance",
        description: "Frontend Architecture, Performance Optimization, SSR/SSG/ISR, Virtualization, Lazy Loading",
      },
      {
        name: "State & Data Management",
        description: "Redux Toolkit, Zustand, REST API, WebSockets, GraphQL, React Query, SWR",
      },
      {
        name: "Build & Infrastructure",
        description: "Webpack, Rspack, Vite, Rollup, GitLab CI/CD, Docker",
      },
      {
        name: "Testing",
        description: "Jest, React Testing Library, Playwright, Cypress.",
      },
      {
        name: "ThreeJS",
        description: "3D in the browser (built a satellite flight visualization in near-Earth orbit).",
      },
    ],

    otherProjects: "- Other projects:",
    dressieWidget:
      "Created a widget for Dressie.ai that can be embedded into any web application via <script /> with customization, different design options and functionality;",
    visualProgramming: "A service for developing web applications using visual programming (canvas + code generation);",
    taskmanLib: "A library for adding tasks that need to be executed in the browser with a given priority;",
    reactNativeApp:
      "Built a mobile application (react native) for business with an online map of objects, rental and logistics.",

    jobs: [
      {
        company: "Innotech (VTB)",
        project1: "Sfera.Kod.",
        project1Description: "Internal Git repository management platform designed for use by 500+ developers.",
        project1Tasks: [
          "developed a repository file system viewer for repos containing thousands of files, directories and lines of code,",
          "implemented code line diffing for commits,",
          "developed a virtual file list for folders with thousands of items and a custom syntax renderer (based on Monaco Editor) with lazy loading.",
          "worked out API contracts together with the backend team (requirements arising from user scenarios) for fetching repository files and folders, to optimize data volume and time.",
        ],
        project2: "Unified Register of Promissory Notes.",
        project2Tasks: [
          "rewrote a monolithic banking application into a microservice solution and embedded it into the main application,",
          "lots of work with <b>complex forms</b> on ready-made UI components,",
          "<b>optimized webpack configuration</b>, reducing the project build time from 9 to 5.5 minutes,",
          "developed internal <b>ESLint and Webpack plugins</b> for automating code review and standardization, which, according to team estimates, reduced development time by about 15%,",
          "coordinated the update of UI Kit and related frontend dependencies across multiple teams in a Module Federation environment,",
          "independently designed UI solutions in the absence of ready-made design mockups.",
        ],
        stack: "typescript, react, formik, yup, styled-components, webpack, monaco-editor.",
      },
      {
        company: "ISS",
        project1: "HappyDesk",
        project1Description: "Helpdesk system for customer and employee support.",
        project1Tasks: [
          'developed the "knowledge base article editor" section, which improved usability and time metrics for working with KB articles + replaced the "Text Editor" component, used tinymce,',
          "wrote a tree component for moving articles to other sections with infinite nesting and Drag'n'drop support,",
          "developed a separate project for the Knowledge Base (including rendering huge numbers of articles and sections),",
          "fixed memory leaks in the application,",
          "wrote an iframe-wrapped component and logic for communicating with the main window (postMessage),",
          "implemented a real-time chat using WebSockets,",
          "participated in migrating the project to a more modern stack while preserving the legacy code,",
          "solved SSR hydration issues with Next and Remix.",
        ],
        stack: "typescript, react, next, remix, redux, react-hook-form, vite, mui, rtk + tailwind, FSD, websockets.",
      },
      {
        company: "OOO ERA",
        project1: "Corporate IT system for a construction company.",
        project1Tasks: [
          "created an API with authorization and roles (monolith), which in the process came to replace some 1C modules, mainly CRUD operations with sorting, filtering and pagination,",
          "developed React/TypeScript UI modules for approvals, warehouse management and internal chat, additionally developed a NestJS REST API with JWT authentication, role-based access control, filtering, sorting and pagination.",
        ],
        stack:
          "front - react, typescript, redux, storybook; back - nest, typeorm, postgres, nginx, docker, websockets.",
      },
      {
        company: "Research Laboratory of Functional Safety of Spacecraft and Systems at MIEM",
        project1: "Virtual Space",
        project1Description: "Web application for spacecraft flight visualization and calculations.",
        project1Tasks: [
          "developed the web application and system frontend,",
          "<b>key feature:</b> developed a real-time 3D visualization system using React and Three.js, displaying telemetric and calculated data received from a C++ service via gRPC.",
        ],
        stack: "react, three.js, grpc.",
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
