import React, { useMemo } from "react";
import { Card, Carousel, Col, List, Row, Space, Tag, Timeline } from "antd";

import muiIcon from "./images/icons/mui.svg";
import htmlIcon from "./images/icons/icons8-html-50.png";
import jsIcon from "./images/icons/icons8-js-50.png";
import tsIcon from "./images/icons/icons8-typescript-50.png";
import cssIcon from "./images/icons/icons8-css-50.png";
import reactIcon from "./images/icons/icons8-react-a-javascript-library-for-building-user-interfaces-24.png";
import reduxIcon from "./images/icons/icons8-redux-an-open-source-javascript-library-for-managing-application-state-24.png";

import backgroundImage from "./images/background.jpg";
import photo from "./images/CV-avatar.jpg";
import { FaTelegram, FaGithub, FaLinkedin } from "react-icons/fa";

const { Meta } = Card;

const listSkills = [
  {
    picture: [htmlIcon, jsIcon, cssIcon],
    name: "html, css (scss, less) и js",
    description: "Стараюсь исследовать функционал новых версий ES и CSS.",
  },
  {
    picture: "https://nextjs.org/favicon.ico",
    name: <Tag color="purple">Next.js</Tag>,
    description: "Опыт 3+ года. Пишу свой большой проект на этом фреймворке. Авторизация, SSR, SSG, ISR.",
  },
  {
    picture: reactIcon,
    name: <Tag color="blue">React</Tag>,
    description: "Опыт 5+ лет.",
  },
  {
    picture: tsIcon,
    name: <Tag color="cyan">Typescript</Tag>,
    description: "Опыт 3+ года.",
  },
  {
    picture: reduxIcon,
    name: "Redux, redux-toolkit, mobx, zustand",
    description: "Опыт 5+ лет.",
  },
  {
    picture: ["https://webpack.js.org/favicon.a3dd58d3142f7566.ico", "https://vitejs.dev/logo.svg"],
    name: "Сборка: webpack, rspack, vite, rollup",
    description: "Есть практический опыт. Прошёл большой курс по сборке.",
  },
  {
    picture: "",
    name: "База: алгоритмы/структуры данных, архитектура",
    description: "Прошел курс Computer Science во frontend'е.",
  },
  {
    picture: "",
    name: "Инфраструктура frontend",
    description:
      "Прошел курс Инфраструктура frontend: linux, git, пакетные менеджеры (npm, yarn, pnpm), линтеры, сборщики, gitlab CI, github actions, docker, kubernetes, nginx.",
  },
  {
    picture: [muiIcon, "https://tailwindcss.com/favicons/favicon.ico?v=3"],
    name: "Material UI, Tailwind, CCS Modules, Ant Design, Styled Components",
    description: "Разные способы стилизации.",
  },
  {
    picture: "https://threejs.org/files/favicon.ico",
    name: "ThreeJS",
    description: "3D в браузере (писал визуализацию полёта спутника по околоземной орбите).",
  },
  {
    picture: "https://storybook.js.org/tutorials/icon-storybook.png",
    name: "Storybook",
    description: "писал свою небольшую библиотеку компонентов.",
  },
  {
    picture: "https://testing-library.com/img/octopus-32x32.png",
    name: "Playwright, jest и react-testing-library",
    description: "Тестирование кода.",
  },
  {
    picture: "https://graphql.org/favicon.ico",
    name: "GraphQL, Websockets",
    description: "Опыт как со стороны backend, так и со стороны frontend.",
  },
  {
    picture: "https://github.githubassets.com/favicons/favicon.png",
    name: "Git",
    description: "Понимаю git-flow, знаю основные необходимые команды git, cherry pick, stash, rebase, merge.",
  },
  {
    picture: "https://nodejs.org/static/images/favicons/favicon.png",
    name: "Бэкэнд: node.js, nest, postgres, mySQL, JWT",
    description: "Опыт более года.",
  },
  {
    picture: "",
    name: "API",
    description: "Работал с разными API, например GAPI (google).",
  },
];

const getYearsName = (years) => {
  if ((years >= 5 && years <= 20) || years === 0) return "лет";
  if (years % 10 === 1) return "год";
  if (years % 10 < 5) return "года";
  return "лет";
};

const getMonthsName = (months) => {
  if ((months >= 5 && months <= 20) || months === 0) return "месяцев";
  if (months % 10 === 1) return "месяц";
  if (months % 10 < 5) return "месяца";
  return "месяцев";
};

const getTimePerformance = (year, month, yearEnd, monthEnd) => {
  const endDate = yearEnd ? new Date(yearEnd, monthEnd, 1, 0, 0, 0, 0) : new Date();
  const diff = endDate - new Date(year, month, 1, 0, 0, 0, 0);
  const days = diff / 1000 / 60 / 60 / 24;

  return {
    years: Math.floor(days / 365),
    months: Math.floor(((days / 365) % 1) * 12),
  };
};

export const Cube = ({
  windowWidth,
  windowHeight,
  pageForContent,
  reff,
  reff2,
  onScroll,
  setPageLoaded,
  reffSlider,
}) => {
  const timePerformance = useMemo(() => getTimePerformance(2020, 9), []);
  const timePerformance1 = useMemo(() => getTimePerformance(2020, 9, 2021, 6), []);
  const timePerformance2 = useMemo(() => getTimePerformance(2021, 6, 2023, 2), []);
  const timePerformance3 = useMemo(() => getTimePerformance(2023, 2, 2023, 12), []);
  const timePerformance4 = useMemo(() => getTimePerformance(2023, 12), []);

  return (
    <div
      className={`cube forward`}
      style={{
        width: windowWidth - 50 > 800 ? 800 : windowWidth - (windowWidth < 500 ? 30 : 50),
        height: windowHeight - 100 + "px",
      }}
    >
      <div className={`cubeContent forward`}>
        <div
          className="flex200"
          style={{ transform: `translateX(${pageForContent % 2 === 0 ? 0 : -50}%) translateY(0)` }}
          ref={reffSlider}
        >
          <div style={{ width: "50%", height: "100%" }} className="container-page" ref={reff} onScroll={onScroll}>
            <div style={{ position: "relative" }}>
              <div style={{ background: `center / contain url('${backgroundImage}')` }} className="local-background" />

              <div className="main">
                {windowWidth < 800 ? null : (
                  <div className="main_info">
                    <Row>
                      <Col style={{ width: "100%" }}>
                        <Card title="Frontend-разработчик React" bordered={false} hoverable>
                          <Space>
                            <a href="https://t.me/pashac13" target="_blank" rel="noreferrer">
                              <Card size="small" hoverable>
                                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                  <FaTelegram size={20} color="#229ED9" /> Telegram
                                </div>
                              </Card>
                            </a>
                            <a href="https://github.com/9lpasha" target="_blank" rel="noreferrer">
                              <Card size="small" hoverable>
                                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                  <FaGithub size={20} /> GitHub
                                </div>
                              </Card>
                            </a>
                            <a
                              href="https://www.linkedin.com/in/%D0%BF%D0%B0%D0%B2%D0%B5%D0%BB-%D1%87%D1%83%D1%80%D0%B0%D0%BA%D0%BE%D0%B2-1a6989296/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Card size="small" hoverable>
                                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                  <FaLinkedin size={20} style={{ color: "#0A66C2" }} /> LinkedIn
                                </div>
                              </Card>
                            </a>
                          </Space>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                )}
                <div className="main_photo">
                  <Card
                    hoverable
                    bordered={false}
                    style={{ width: "fit-content" }}
                    cover={
                      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                        <img alt="example" src={photo} onLoad={setPageLoaded} />
                      </div>
                    }
                  >
                    <Meta title="Чураков Павел Сергеевич" style={{ width: "100%", textAlign: "center" }} />
                    {windowWidth < 800 ? (
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <a href="https://t.me/pashac13" target="_blank" rel="noreferrer">
                          <Card size="small" hoverable>
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                              <FaTelegram size={20} color="#229ED9" /> Telegram
                            </div>
                          </Card>
                        </a>
                        <a href="https://github.com/9lpasha" target="_blank" rel="noreferrer">
                          <Card size="small" hoverable>
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                              <FaGithub size={20} /> GitHub
                            </div>
                          </Card>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/%D0%BF%D0%B0%D0%B2%D0%B5%D0%BB-%D1%87%D1%83%D1%80%D0%B0%D0%BA%D0%BE%D0%B2-1a6989296/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Card size="small" hoverable>
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                              <FaLinkedin size={20} style={{ color: "#0A66C2" }} /> LinkedIn
                            </div>
                          </Card>
                        </a>
                      </div>
                    ) : null}
                  </Card>
                </div>
              </div>

              <div className="performance">
                <Row>
                  <Col style={{ width: "100%" }}>
                    <Card
                      title={`Опыт ${timePerformance.years} ${getYearsName(timePerformance.years)} ${
                        timePerformance.months
                      } ${getMonthsName(timePerformance.months)}`}
                      bordered={false}
                      hoverable
                    >
                      <div className="performance_flex">
                        <Timeline
                          mode="left"
                          items={[
                            {
                              label: (
                                <div>
                                  <b>2023-12</b>
                                  <div>
                                    {timePerformance4.years} {getYearsName(timePerformance4.years)}{" "}
                                    {timePerformance4.months} {getMonthsName(timePerformance4.months)}
                                  </div>
                                </div>
                              ),
                              children: (
                                <div>
                                  <h2 className="mb10">
                                    <b>Иннотех (ВТБ)</b>
                                  </h2>
                                  <span className="common-text">
                                    <b>Что делал:</b> <br /> - переписывал монолитное банковское приложение на
                                    микросервисное решение и встраивал в общее приложение, <br /> - много работы{" "}
                                    <b>со сложными формами</b> на готовых UI компонентах, <br /> -{" "}
                                    <b>улучшил конфигурацию webpack</b>, что ускорило сборку на 40%, <br /> - написал
                                    несколько <b>плагинов для ESLint и webpack</b>, что снизило количество грязного кода
                                    и ускорило разработку процентов на 15%, <br /> - переносил библиотеки на новые
                                    версии, например сильно обновил UI kit, а для этого нужно было также обновить
                                    несколько библиотек привязанных к другой команде (проект куда мы встраивались по
                                    Module Federation),
                                    <br /> - часто приходилось верстать без дизайна.
                                    <br />
                                    <br />
                                    <b>Стэк:</b> typescript, react, formik, yup, styled-components, webpack.
                                  </span>
                                </div>
                              ),
                            },
                            {
                              label: (
                                <div>
                                  <b>2023-02</b>
                                  <div>
                                    {timePerformance3.years} {getYearsName(timePerformance3.years)}{" "}
                                    {timePerformance3.months} {getMonthsName(timePerformance3.months)}
                                  </div>
                                </div>
                              ),
                              children: (
                                <div>
                                  <h2 className="mb10">
                                    <b>ISS</b>
                                    <br />
                                    <a target="_blank" href="https://happydesk.ru/" rel="noreferrer">
                                      HappyDesk
                                    </a>{" "}
                                    <br />
                                    Helpdesk-система для поддержки клиентов и сотрудников.
                                  </h2>
                                  <span className="common-text">
                                    <b>Что делал:</b> <br /> - разработал раздел "редактор статей базы знаний", что
                                    позволило повысить удобство и временные показатели работы со статьями базы знаний +
                                    заменил компонент "Текстовый редактор", использовал{" "}
                                    <a target="_blank" href="https://www.tiny.cloud/" rel="noreferrer">
                                      tinymce
                                    </a>
                                    , <br /> - написал дерево-компонент для перемещения статей в другие разделы с
                                    бесконечной вложенностью и возможностью перемещения статей на любой уровень
                                    вложенности с помощью Drag’n’drop (повторил функционал компонента фигмы, которое
                                    меню слева), <br /> - разработал отдельный проект для{" "}
                                    <a
                                      target="_blank"
                                      href="https://support.portal.happydesk.ru/knowledge"
                                      rel="noreferrer"
                                    >
                                      Базы Знаний
                                    </a>{" "}
                                    (вывод в том числе огромных количеств статей и разделов) , <br /> - фиксил утечку
                                    памяти в приложении, <br /> - написал компонент, обёрнутый в iframe, и логику для
                                    общения с основным окном (postMessage), <br /> - работал с чатом приложения, <br />-
                                    участвовал в переносе проекта на более современный стэк с сохранением старого кода,
                                    <br />- решал проблемы с гидрацией SSR Next и Remix.
                                    <br />
                                    <br />
                                    <b>Стэк:</b> typescript, react, next, remix, redux, react-hook-form, vite, mui, rtk
                                    + tailwind, FSD, websockets.
                                  </span>
                                </div>
                              ),
                            },
                            {
                              label: (
                                <div>
                                  <b>2021-06</b>
                                  <div>
                                    {timePerformance2.years} {getYearsName(timePerformance2.years)}{" "}
                                    {timePerformance2.months} {getMonthsName(timePerformance2.months)}
                                  </div>
                                </div>
                              ),
                              children: (
                                <div>
                                  <h2 className="mb10">
                                    <b>ООО ЭРА</b> <br />
                                    Корпоративная IT система для строительной компании.
                                  </h2>
                                  <span className="common-text">
                                    <b>Что делал:</b>
                                    <br /> - создавал API с авторизацией и ролями (монолит), которое в процессе
                                    становилось на замену некоторым модулям 1С, в основном CRUD операции с сортировками,
                                    фильтрацией и пагинацией, <br /> - занимался разработкой фронтэнда, довёл до
                                    результата такие разделы как "согласования", "склад", "чат".
                                    <br />
                                    <br />
                                    <b>Стэк:</b> front - react, typescript, redux, storybook; back - nest, typeorm,
                                    postgres, nginx, docker, websockets.
                                  </span>
                                </div>
                              ),
                            },
                            {
                              label: (
                                <div>
                                  <b>2020-09</b>
                                  <div>
                                    {timePerformance1.years} {getYearsName(timePerformance1.years)}{" "}
                                    {timePerformance1.months} {getMonthsName(timePerformance1.months)}
                                  </div>
                                </div>
                              ),
                              children: (
                                <div>
                                  <h2 className="mb10">
                                    <b>
                                      Учебно-исследовательская лаборатория функциональной безопасности космических
                                      аппаратов и систем МИЭМ
                                    </b>{" "}
                                    <br />
                                    <a target="_blank" href="https://space.miem.hse.ru/vsvs" rel="noreferrer">
                                      Виртуальный космос
                                    </a>{" "}
                                    <br />
                                    Веб-приложение для визуализации полёта космического аппарата и расчётов.
                                  </h2>
                                  <span className="common-text">
                                    <b>Что делал:</b>
                                    <br /> - разрабатывал веб-приложение и фронтенд системы, <br /> -{" "}
                                    <b>главная фича:</b> принимал данные, которые вычислялись на c++ сервисе, и рисовал
                                    картинку в реальном времени.
                                    <br />
                                    <br />
                                    <b>Стэк:</b> react, three.js, grpc.
                                  </span>
                                  <br />
                                </div>
                              ),
                            },
                          ]}
                        />
                      </div>
                      <br />

                      <div className="performance_flex">
                        <div className="performance_basic">
                          - Другие проекты: <br />
                          <span className="common-text mt10">
                            &nbsp;&nbsp;&nbsp;- Создал виджет для{" "}
                            <a href="https://dressie.ai/widget-demo" target="_blank" rel="noreferrer">
                              Dressie.ai
                            </a>
                            , встраиваемый в любое веб-приложение с помощью {"<script />"} с кастомизацией, разными
                            вариантами дизайна и функционала;
                          </span>
                          <br />
                          <span className="common-text mt10">
                            &nbsp;&nbsp;&nbsp;- Сервис для разработки веб-приложений с помощью визуального
                            программирования (canvas + генерация кода);{" "}
                            <a target="_blank" href="https://github.com/9lpasha/web-pilot" rel="noreferrer">
                              Ссылка
                            </a>
                            <br />
                          </span>
                          <span className="common-text mt10">
                            &nbsp;&nbsp;&nbsp;- Библиотека для добавления задач, которые должны быть выполнены в
                            браузере с заданным приоритетом;{" "}
                            <a target="_blank" href="https://github.com/9lpasha/taskman-lib" rel="noreferrer">
                              Ссылка
                            </a>
                          </span>
                          <br />
                          <span className="common-text mt10">&nbsp;&nbsp;&nbsp;- Стартап, пишу фронт на next.js.</span>
                          <br />
                          <br />
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </div>

              <div className="edu">
                <Row>
                  <Col style={{ width: "100%" }}>
                    <Card title="Образование" bordered={false} hoverable>
                      <div className="edu_flex">
                        <div className="edu_name2 common-text">
                          Высшее образование (бакалавриат) - НИУ ВШЭ - Информатика и вычислительная техника
                        </div>
                      </div>
                      <br />
                      <div className="edu_flex">
                        <div className="edu_name2 common-text">
                          Высшее образование (магистратура) - РУТ МИИТ - Програмная инженерия
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </div>

          <div style={{ width: "50%", height: "100%" }} className="container-page" ref={reff2} onScroll={onScroll}>
            <div style={{ position: "relative" }}>
              <div style={{ background: `center / contain url('${backgroundImage}')` }} className="local-background" />

              <div className="knowledge">
                <Row>
                  <Col style={{ width: "100%" }}>
                    <Card title="Знания и навыки" bordered={false} hoverable>
                      <div className="edu_flex">
                        <div style={{ width: "100%" }} className="common-text">
                          <List
                            className="demo-loadmore-list"
                            itemLayout="horizontal"
                            dataSource={listSkills}
                            renderItem={(item) => (
                              <List.Item>
                                <List.Item.Meta
                                  avatar={
                                    Array.isArray(item.picture) ? (
                                      <Carousel effect="fade" autoplay style={{ height: "30px", width: "30px" }}>
                                        {item.picture.map((el) => (
                                          <div>
                                            <img style={{ width: "30px" }} src={el} alt="" />
                                          </div>
                                        ))}
                                      </Carousel>
                                    ) : item.picture ? (
                                      <img src={item.picture} style={{ width: "30px" }} alt="" />
                                    ) : (
                                      <div
                                        style={{
                                          width: "30px",
                                          height: "30px",
                                          borderRadius: "50%",
                                          background: "rgba(189, 189, 189, 0.6)",
                                        }}
                                      />
                                    )
                                  }
                                  title={<div>{item.name}</div>}
                                  description={item.description}
                                />
                              </List.Item>
                            )}
                          />
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </div>

              <div className="projects">
                <Row>
                  <Col style={{ width: "100%" }}>
                    <Card title="О себе" bordered={false} hoverable>
                      <div className="edu_flex">
                        <div className="edu_name2 common-text">
                          - Ищу проект и крутую команду, где смогу реализовать свой потенциал; <br />
                          - Я за чистый, переиспользуемый, понятный код и развитие продукта; <br />
                          - Быстро отвечаю и помогаю коллегам, со мной легко в коммуникации; <br />
                          - Энергичен, положительно отношусь к тяжёлым задачам; <br />
                          - Готов учиться и изучать необходимые технологии. <br />
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
