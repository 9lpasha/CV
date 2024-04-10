import React, { useMemo } from "react";
import { Card, Carousel, Col, List, Row, Timeline } from "antd";

import muiIcon from "./images/icons/mui.svg";
import htmlIcon from "./images/icons/icons8-html-50.png";
import jsIcon from "./images/icons/icons8-js-50.png";
import tsIcon from "./images/icons/icons8-typescript-50.png";
import cssIcon from "./images/icons/icons8-css-50.png";
import reactIcon from "./images/icons/icons8-react-a-javascript-library-for-building-user-interfaces-24.png";
import reduxIcon from "./images/icons/icons8-redux-an-open-source-javascript-library-for-managing-application-state-24.png";

import backgroundImage from "./images/background.jpg";
import photo from "./images/CV-avatar.jpg";

const { Meta } = Card;

const listSkills = [
  {
    picture: [htmlIcon, jsIcon, cssIcon],
    name: "html, css (scss, less) и js",
    description: " - 10/10",
  },
  {
    picture: [muiIcon, "https://tailwindcss.com/favicons/favicon.ico?v=3"],
    name: "Material UI, Tailwind, CCS Modules",
    description: "Разные способы использования стилей",
  },
  {
    picture: reactIcon,
    name: "функциональный React v18",
    description: "опыт 3 года",
  },
  {
    picture: tsIcon,
    name: "typescript",
    description: "опыт больше года",
  },
  {
    picture: reduxIcon,
    name: "redux, redux-toolkit",
    description: "опыт 3 года",
  },
  {
    picture: "https://threejs.org/files/favicon.ico",
    name: "threeJS",
    description: "3D в браузере (писал визуализацию полёта спутника по околоземной орбите)",
  },
  {
    picture: "https://storybook.js.org/favicon.svg?v=eac3ed5255c5d69cad47bb7ed6ce3dbf",
    name: "storybook",
    description: "писал свою небольшую библиотеку компонентов",
  },
  {
    picture: "https://testing-library.com/img/octopus-32x32.png",
    name: "jest и react-testing-library",
    description: "",
  },
  {
    picture: ["https://webpack.js.org/favicon.a3dd58d3142f7566.ico", "https://vitejs.dev/logo.svg"],
    name: "webpack и vite",
    description: "Есть практический опыт",
  },
  {
    picture: "https://graphql.org/favicon.ico",
    name: "GraphQL",
    description: "Не только rest",
  },
  {
    picture: "https://github.githubassets.com/favicons/favicon.png",
    name: "git",
    description: "Понимаю git-flow, знаю основные необходимые команды git",
  },
  {
    picture: "https://jwt.io/img/favicon/favicon-32x32.png",
    name: "JWT",
    description: "Понимаю процесс авторизации по JWT",
  },
  {
    picture: "https://static.tildacdn.com/tild6431-3463-4161-b339-613661656231/swagger.png",
    name: "swagger",
    description: "Умею работать со swagger",
  },
  {
    picture: "https://nodejs.org/static/images/favicons/favicon.png",
    name: "node.js, nest, typeorm",
    description: "опыт год",
  },
  {
    picture: "https://www.docker.com/wp-content/uploads/2023/04/cropped-Docker-favicon-32x32.png",
    name: "docker, docker-compose",
    description: "На уровне использования контейнеров",
  },
  {
    picture: "https://nginx.org/favicon.ico",
    name: "nginx",
    description: "Использовал для обработки входящих запросов к статическим файлам",
  },
  {
    picture: "https://assets.ubuntu.com/v1/49a1a858-favicon-32x32.png",
    name: "Linux",
    description: "На уровне редактирования файлов с vim и установки пакетов, docker и тд.",
  },
  {
    picture: "",
    name: "Websockets",
    description: "Опыт как со стороны backend, так и со стороны frontend",
  },
  {
    picture: "",
    name: "API",
    description: "Работал с разными API, например GAPI (google)",
  },
  {
    picture: "",
    name: "Backend и инфраструктура",
    description: "Разбираюсь не только во frontend, но и в backend и инфраструктуре",
  },
  {
    picture: "",
    name: "Отладка кода",
    description: "Умею отлаживать код и находить баги",
  },
];

const getYearsName = (years) => {
  if (years >= 5 && years <= 20) return "лет";
  if (years % 10 === 1) return "год";
  if (years % 10 < 5) return "года";
  return "лет";
};

const getMonthsName = (months) => {
  if (months >= 5 && months <= 20) return "месяцев";
  if (months % 10 === 1) return "месяц";
  if (months % 10 < 5) return "месяца";
  return "месяцев";
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
  const timePerformance = useMemo(() => {
    const diff = new Date() - new Date(2020, 8, 1, 0, 0, 0, 0);
    const days = diff / 1000 / 60 / 60 / 24;

    return {
      years: Math.floor(days / 365),
      months: Math.floor(((days / 365) % 1) * 12),
    };
  }, []);

  const age = useMemo(() => {
    const diff = new Date() - new Date(2001, 0, 12, 0, 0, 0, 0);

    return Math.floor(diff / 1000 / 60 / 60 / 24 / 365);
  }, []);

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
                {windowWidth < 500 ? null : (
                  <div className="main_info">
                    <Row>
                      <Col style={{ width: "100%" }}>
                        <Card title="Frontend-разработчик React" bordered={false} hoverable>
                          <span className="common-text">
                            <a target="_blank" href="https://t.me/pashac13" rel="noreferrer">
                              telegram
                            </a>{" "}
                            - предпочитаемый способ связи
                          </span>
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
                    cover={<img alt="example" src={photo} onLoad={setPageLoaded} />}
                  >
                    <Meta title="Чураков Павел Сергеевич" style={{ width: "fit-content" }} />
                    {windowWidth < 500 ? (
                      <>
                        <a target="_blank" href="https://t.me/pashac13" rel="noreferrer">
                          telegram
                        </a>{" "}
                        - предпочитаемый способ связи
                      </>
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
                              label: "2023-12",
                              children: (
                                <div>
                                  <h2 className="mb10">
                                    <b>Иннотех (ВТБ)</b>
                                  </h2>
                                  <span className="common-text">
                                    <b>Что делал:</b> <br /> - переписывал монолитное банковское приложение на
                                    микросервисное решение и встраивал в общее приложение, <br /> - много работы со
                                    сложными формами на готовых UI компонентах, <br /> - также писал логику для
                                    интеграции с монолитом.
                                    <br />
                                    <br />
                                    <b>Стэк:</b> typescript, react, formik, yup, styled-components, webpack.
                                  </span>
                                </div>
                              ),
                            },
                            {
                              label: "2023-02",
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
                                    , <br /> - разработал отдельный проект для{" "}
                                    <a
                                      target="_blank"
                                      href="https://support.portal.happydesk.ru/knowledge"
                                      rel="noreferrer"
                                    >
                                      Базы Знаний
                                    </a>
                                    , <br /> - написал компонент, обёрнутый в iframe, и логику для общения с основным
                                    окном (postMessage), <br /> - работал с чатом приложения, <br />- участвовал в
                                    переносе проекта на более современный стэк с сохранением старого кода.
                                    <br />
                                    <br />
                                    <b>Стэк:</b> typescript, react, redux, react-hook-form, vite, mui, rtk + tailwind,
                                    FSD, websockets.
                                  </span>
                                </div>
                              ),
                            },
                            {
                              label: "2021-06",
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
                              label: "2020-09",
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
                          <b>- Pet-проект</b> <br />
                          <span className="common-text mt10">
                            Веб-приложение (frontend) торрент-каталога, включающее в себя работу с пользователями и
                            валидацию всех торрентов (мобильная и десктоп версии). Я писал фронт, на typescript + redux,
                            применялся storybook:&nbsp;
                            <a target="_blank" href="https://sectorrent.site" rel="noreferrer">
                              sectorrent.site
                            </a>
                          </span>
                          <br />
                          <br />
                        </div>
                      </div>

                      <div className="performance_flex">
                        <div className="performance_basic">
                          <b>- Стажировался (3 месяца) full-stack-ом</b>
                          <br />
                          <span className="common-text mt10">
                            Получил хороший опыт на react + typescript + graphQL + docker + nest + typeorm + postgres +
                            авторизация по JWT.
                            <br />
                            <br />
                          </span>
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
                                      <img src={item.picture} style={{ width: "30px" }} />
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
                                  title={<a>{item.name}</a>}
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
                          - ищу крутую команду, где смогу реализовать свой потенциал; <br />
                          - я за чистый, переиспользуемый, понятный код и развитие продукта; <br />
                          - быстро отвечаю и помогаю коллегам; <br />
                          - энергичен, положительно отношусь к тяжёлым задачам; <br />
                          - готов учиться и изучать необходимые технологии. <br />
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
