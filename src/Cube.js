import React from 'react';
import photo from './images/photo_2023-01-28_20-50-21.jpg';
import {Card, Carousel, Col, List, Row, Timeline} from "antd";

import muiIcon from './images/icons/mui.svg';
import htmlIcon from './images/icons/icons8-html-50.png';
import jsIcon from './images/icons/icons8-js-50.png';
import tsIcon from './images/icons/icons8-typescript-50.png';
import cssIcon from './images/icons/icons8-css-50.png';
import reactIcon from './images/icons/icons8-react-a-javascript-library-for-building-user-interfaces-24.png';
import reduxIcon from './images/icons/icons8-redux-an-open-source-javascript-library-for-managing-application-state-24.png';

const { Meta } = Card;

const listSkills = [
  {picture: [htmlIcon, jsIcon, cssIcon],
  name: 'html, css (scss, less) и js',
  description: ' - 10/10'},
  {picture: [muiIcon, 'https://tailwindcss.com/favicons/favicon.ico?v=3'],
    name: 'Material UI, Tailwind, CCS Modules',
    description: 'Использую разные способы использования стилей'},
  {picture: reactIcon,
    name: 'функциональный React v18',
    description: 'опыт 3 года'},
  {picture: tsIcon,
    name: 'typescript',
    description: 'опыт больше года'},
  {picture: reduxIcon,
    name: 'redux, redux-toolkit',
    description: 'опыт 3 года'},
  {picture: 'https://threejs.org/files/favicon.ico',
    name: 'threeJS',
    description: '3D в браузере'},
  {picture: 'https://storybook.js.org/favicon.svg?v=eac3ed5255c5d69cad47bb7ed6ce3dbf',
    name: 'storybook',
    description: 'писал свою небольшую библиотеку компонентов'},
  {picture: 'https://testing-library.com/img/octopus-32x32.png',
    name: 'jest и react-testing-library',
    description: ''},
  {picture: ['https://webpack.js.org/favicon.a3dd58d3142f7566.ico', 'https://vitejs.dev/logo.svg'],
    name: 'webpack и vite',
    description: 'Есть практический опыт'},
  {picture: 'https://graphql.org/favicon.ico',
    name: 'GraphQL',
    description: 'Не только rest'},
  {picture: 'https://github.githubassets.com/favicons/favicon.png',
    name: 'git',
    description: 'Понимаю git-flow, знаю много команд git'},
  {picture: 'https://jwt.io/img/favicon/favicon-32x32.png',
    name: 'JWT',
    description: 'Понимаю процесс авторизации по JWT'},
  {picture: 'https://static.tildacdn.com/tild6431-3463-4161-b339-613661656231/swagger.png',
    name: 'swagger',
    description: 'Умею работать со swagger'},
  {picture: 'https://nodejs.org/static/images/favicons/favicon.png',
    name: 'node.js, nest, typeorm',
    description: 'опыт год'},
  {picture: 'https://www.docker.com/wp-content/uploads/2023/04/cropped-Docker-favicon-32x32.png',
    name: 'docker, docker-compose',
    description: 'На уровне использования контейнеров'},
  {picture: 'https://nginx.org/favicon.ico',
    name: 'nginx',
    description: 'Настраивал на одной работе'},
  {picture: 'https://assets.ubuntu.com/v1/49a1a858-favicon-32x32.png',
    name: 'Linux',
    description: 'На уровне редактирования файлов с vim и установки пакетов, docker и тд.'},
  {picture: '',
    name: 'Websockets',
    description: 'Опыт как со стороны backend, так и со стороны frontend'},
  {picture: '',
    name: 'API',
    description: 'Работал с разными API, например GAPI (google)'},
  {picture: '',
    name: 'Backend и инфраструктура',
    description: 'Разбираюсь не только во frontend, но и в backend и инфраструктурных вещах'},
  {picture: '',
    name: 'Отладка кода',
    description: 'Умею отлаживать код и находить баги'},
]

export const Cube = ({windowWidth, windowHeight, page, visible, pageForContent, reff}) => {
  return (
    <div
      className={`cube ${page % 2 === 0 ? 'forward' : 'reverse'}`}
      style={{
        width: windowWidth - 50 > 800 ? 800 : windowWidth - 50,
        height: windowHeight - 100 + 'px',
      }}
      ref={reff}
    >
      <div
        className={`cubeContent ${pageForContent % 2 === 0 ? 'forward' : 'reverse'}`}
        style={{opacity: visible}}
      >
        {
          pageForContent % 2 === 0 ?
            <>
              <div className="main">
                {
                  windowWidth < 500 ?
                    null :
                    <div className="main_info">
                      <Row>
                        <Col style={{width: '100%'}}>
                          <Card title="Frontend-разработчик React" bordered={false} hoverable>
                            <span className='common-text'>
                              22 года <br/>
                              8-917-284-54-36 <br/>
                              131313pasha@mail.ru <br/>
                              <a href="https://t.me/pashac13">telegram</a> - предпочитаемый способ связи
                            </span>
                          </Card>
                        </Col>
                      </Row>
                    </div>
                }
                <div className="main_photo">
                  <Card
                    hoverable
                    bordered={false}
                    style={{ width: 'fit-content' }}
                    cover={<img alt="example" src={photo} />}
                  >
                    <Meta title="Чураков Павел Сергеевич" style={{width: 'fit-content'}}/>
                    {
                      windowWidth < 500 ?
                        <>22 года <br/>
                          8-917-284-54-36 <br/>
                          131313pasha@mail.ru <br/>
                          <a href="https://t.me/pashac13">telegram</a> - предпочитаемый способ связи
                        </> :
                        null
                    }
                  </Card>
                </div>
              </div>


              <div className="performance">
                <Row>
                  <Col style={{width: '100%'}}>
                    <Card title="Опыт" bordered={false} hoverable>
                      <div className="performance_flex">
                        <Timeline
                          mode='left'
                          items={[
                            {
                              label: '2020-09',
                              children: (
                                <div>
                                  <h2 className='mb10'><b>Учебно-исследовательская лаборатория функциональной безопасности
                                    космических аппаратов и систем МИЭМ</b></h2>
                                  <span className='common-text'>Переписывание фронта на react + three.js, работа с grpc.
                                    Главная фишка - симулятор полёта спутника вокруг земли (вычисления на бэке с++
                                    и передача данных на фронт по gRPC, фронт на React + three.js)</span>
                                </div>
                              ),
                            },
                            {
                              label: '2021-06',
                              children: (
                                <div>
                                  <h2 className='mb10'><b>ООО ЭРА</b></h2>
                                  <span className='common-text'>Написание API - монолит (nest, typeorm, postgres), компонентов на фронте
                                    (react, typescript, redux, storybook), развёртывание проекта (nginx, docker).
                                    Запустили систему в продакшн и дорабатывали функциональность.</span>
                                </div>
                              ),
                            },
                            {
                              label: '2023-02',
                              children: (
                                <div>
                                  <h2 className='mb10'><b >ISS</b></h2>
                                  <span className='common-text'>Написание нового функционала на фронте (react redux),
                                    работа с чатом приложения (websockets на фронте и на node.js сервере),
                                    замена текстового редактора в приложении, переписывание целого
                                    раздела системы на typescript + redux-toolkit + tailwind (feature-sliced design).
                                    Перенос проекта с webpack и javascript на vite, typescript и шаблон MUI.</span>
                                </div>
                              ),
                            },
                          ]}
                        />
                      </div> <br/>

                      <div className="performance_flex">
                        <div className="performance_basic">
                          <b>- Pet-проект</b> <br/>
                            <span className='common-text mt10'>Веб-приложение (frontend) торрент-каталога, включающее в
                              себя работу с пользователями и валидацию
                              всех торрентов (мобильная и десктоп версии). Я писал фронт, на typescript + redux,
                              применялся storybook:&nbsp;
                              <a href="https://sectorrent.site">sectorrent.site</a>.
                            </span><br/><br/>
                        </div>
                      </div>

                      <div className="performance_flex">
                        <div className="performance_basic">
                          <b>- Стажировался (3 месяца) full-stack-ом</b><br/>
                          <span className='common-text mt10'>Получил хороший опыт на react + typescript + graphQL +
                            docker + nest + typeorm + postgres + авторизация по JWT.<br/><br/>
                          </span>
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </div>


              <div className="edu">
                <Row>
                  <Col style={{width: '100%'}}>
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
            </> :
          <>
            <div className="knowledge">
              <Row>
                <Col style={{width: '100%'}}>
                  <Card title="Знания и навыки" bordered={false} hoverable>
                    <div className="edu_flex">
                      <div style={{width: '100%'}} className="common-text">
                        <List
                          className="demo-loadmore-list"
                          itemLayout="horizontal"
                          dataSource={listSkills}
                          renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                  avatar={
                                  Array.isArray(item.picture) ?
                                    <Carousel effect="fade" autoplay style={{height: '30px', width: '30px'}}>
                                      {
                                        item.picture.map(el => (
                                          <div>
                                            <img style={{width: '30px'}} src={el} alt=""/>
                                          </div>
                                        ))
                                      }
                                    </Carousel> :
                                    item.picture ?
                                      <img src={item.picture} style={{width: '30px'}} /> :
                                      <div style={{width: '30px', height: '30px', borderRadius: '50%', background: '#ebebeb'}}/>
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
                <Col style={{width: '100%'}}>
                  <Card title="Личные качества" bordered={false} hoverable>
                    <div className="edu_flex">
                      <div className="edu_name2 common-text">
                        - ищу крутую команду, где смогу реализовать свой потенциал; <br/>
                        - умею составлять план работы и устанавливать корректные сроки; <br/>
                        - был ведущим разработчиком в команде из 4 человек; <br/>
                        - отзывчивость; <br/>
                        - многозадачность; <br/>
                        - сконцентрированность во время работы; <br/>
                        - быстро реагирую на ситуацию; <br/>
                        - энергичен; <br/>
                        - активно развиваю хард-скиллы; <br/>
                        - стараюсь писать чистый, переиспользуемый, понятный код. <br/>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          </>
        }
      </div>
    </div>
  );
};
