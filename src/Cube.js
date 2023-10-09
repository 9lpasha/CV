import React, {useMemo} from 'react';
import photo from './images/photo_2023-01-28_20-50-21.jpg';

export const Cube = ({windowWidth, windowHeight, page, visible, pageForContent, reff}) => {
  const minSide = useMemo(() => {
    let value = windowWidth < windowHeight ? windowWidth : windowHeight;
    return value < 1000 ? value - 100 : value * 0.9;
  }, [windowWidth, windowHeight]);

  return (
    <div
      className={`cube ${page % 2 === 0 ? 'forward' : 'reverse'}`}
      style={{
        width: minSide + 'px',
        height: minSide + 'px',
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
                <div className="main_info">
                  <div className="main_info1">
                    Чураков Павел Сергеевич
                  </div>
                  <div className="main_info2">
                    22 года (12.01.2001)
                  </div>
                  <div style={{fontSize: "16px"}} className="main_info2">
                    8-904-668-50-31
                  </div>
                  <div style={{fontSize: "16px"}} className="main_info2">
                    131313pasha@mail.ru
                  </div>
                  <div style={{fontSize: "16px"}} className="main_info2">
                    <a href="https://t.me/pashac13">Telegram</a> - предпочитаемый способ связи
                  </div>
                </div>
                <div className="main_photo">
                  <img src={photo} alt=""/>
                </div>
              </div>
              <div className="developer">
                <div className="developer_main" style={{fontSize: "22px"}}>
                  Frontend-разработчик React  <span className="developer_dop">150 - 180 т.р.</span>
                </div>
                <div className="developer_dop">
                  Полная занятость, 40 часов
                </div>
              </div>
              <div className="performance">
                <span className="performance_main1">
                  Опыт
                </span>

                <div className="performance_flex">
                  <div className="performance_time">
                    <br/>
                  </div>
                  <div className="performance_basic">
                    Работаю 2 года Frontend - разработчиком.<br/><br/>
                    На первой работе разрабатывали корпоративную систему для строительной компании. Сначала был React на JS, а потом перешли на React + redux-toolkit (typescript). Писал интерфейс со сложной бизнес-логикой, свою библиотеку компонентов.
                    Были уведомления по WS, такие разделы, как свой чат, лента (как instagram), корпоративный маркетплейс, работа со складом. Писал анимацию на canvas и через css (transform).<br/><br/>
                    Потом перешёл на вторую работу, проекту было лет 5-6, там стэк был подревнее, React redux axios (JS), мы переписываем этот проект на TS, redux-toolkit.
                    Было много апишек, интернационализация, шаблон INSPINIA, переписывали на MUI.
                  </div>
                </div> <br/>

                <div className="performance_flex">
                  <div className="performance_time">
                    <br/>
                  </div>
                  <div className="performance_basic">
                    А также в моём арсенале был опыт с такими проектами:<br/><br/>
                    - Веб-приложение (frontend) торрент-каталога, включающее в себя работу с пользователями и валидацию
                    всех торрентов (мобильная и десктоп версии). Я писал фронт, на typescript + redux, применялся storybook:
                    <a href="https://sectorrent.site">sectorrent.site</a>. <br/><br/>
                  </div>
                </div>

                <div className="performance_flex">
                  <div className="performance_time">
                    <br/>
                  </div>
                  <div className="performance_basic">
                    - Проект для лаборатории проектирования малых космических аппаратов.
                    Главная фишка - симулятор полёта спутника вокруг земли (вычисления на бэке с++ и передача данных на фронт по gRPC, фронт на React + three.js).
                    Я получал данные по gRPC и rest, работал со swagger:
                    <a href="https://space.miem.hse.ru">space.miem.hse.ru</a>. <br/> <br/>
                  </div>
                </div>

                <div className="performance_flex">
                  <div className="performance_time">
                    <br/>
                  </div>
                  <div className="performance_basic">
                    Стажировался (3 месяца) full-stack-ом.<br/>
                    Получил хороший опыт на react + typescript + graphQL + docker + nest + typeorm + postgres + авторизация по JWT.<br/><br/>
                  </div>
                </div>

                <div className="performance_flex">
                  <div className="performance_time">
                    <br/>
                  </div>
                  <div className="performance_basic">
                    Примеры тестовых заданий: <br/>
                    - <a href="https://9lpasha.github.io/miniGame-React-Redux/">Мини-игра на react/redux-toolkit/ts</a> <br/>
                    - <a href="https://9lpasha.github.io/outside-digital/">Кусок простого интерфейса с небольшой логикой</a>
                  </div>
                </div>

              </div>
              <div className="edu">
                <div className="edu_main">
                  Образование
                </div>
                <div className="edu_flex">
                  <div className="edu_type">
                    Высшее образование (4 курс)<br/>Дневная/Очная
                  </div>
                  <div className="edu_name">
                    <div className="edu_name1">
                      Национальный Исследовательский Университет Высшая Школа Экономики
                    </div>
                    <div className="edu_name2">
                      Специальность: Информатика и вычислительная техника
                    </div>
                  </div>
                </div>
              </div>
              <div className="knowledge">
                <div className="know_main">
                  Знания и навыки
                </div>
                <div className="know_basic">
                  - html, css (scss) и js (нативные особенности, BOM, DOM, web api и тд.) - уровень специалист;<br/>
                  - адаптивная верстка любой сложности;<br/>
                  - figma;<br/>
                  - react-Bootstrap, React Material UI;<br/>
                  - базовые алгоритмы и структуры данных (нарешал много задач на LeetCode);<br/>
                  - функциональный React v18 (react-router, hooks, понимание рендера компонентов, оптимальный рендер);<br/>
                  - typescript (опыт год, хорошее знание interfaces, types, generics, typing of functions);<br/>
                  - redux(redux-toolkit);<br/>
                  - threeJS (3D в браузере);<br/>
                  - storybook;<br/>
                  - знаком с jest и react-testing-library;<br/>
                  - настраивал webpack на одном из проектов;<br/>
                  - rest, GraphQL;<br/>
                  - git;<br/>
                  - авторизация по JWT;<br/>
                  - swagger;<br/>
                  - docker, docker-compose;<br/>
                  - node.js, nest, typeorm (опыт год);<br/>
                  - elasticsearch;<br/>
                  - nginx;<br/>
                  - linux (на уровне редактирования файлов с vim и установки пакетов, docker и тд.);<br/>
                  - websockets;<br/>
                  - работа с файлами (передача по http); <br/>
                  - сейчас изучаю паттерны проектирования, SOLID, сложные моменты typescript, смтрю в сторону web3; <br/>
                  - работал с разными API, например GAPI (google);<br/>
                  - разбираюсь в инфраструктуре, развёртывании и смежных с ним процессах.<br/>
                  - умею держать в голове продукт, блок, приложение целиком;<br/>
                  - умею искать и исправлять ошибки, довожу до конца.<br/>
                </div>
              </div>
              <div className="projects">
                <div className="know_main">
                  Личные качества
                </div>
                <div className="know_basic">
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
            </> :
          <>
            <div className="main">
              <div className="main_info">
                <div className="main_info1">
                  Чураков Павел Сергеевич
                </div>
                <div className="main_info2">
                  22 года (12.01.2001)
                </div>
                <div style={{fontSize: "16px"}} className="main_info2">
                  8-904-668-50-31
                </div>
                <div style={{fontSize: "16px"}} className="main_info2">
                  131313pasha@mail.ru
                </div>
                <div style={{fontSize: "16px"}} className="main_info2">
                  <a href="https://t.me/pashac13">Telegram</a> - предпочитаемый способ связи
                </div>
              </div>
              <div className="main_photo">
                <img src={photo} alt=""/>
              </div>
            </div>
            <div className="developer">
              <div className="developer_main" style={{fontSize: "22px"}}>
                Frontend-разработчик React  <span className="developer_dop">150 - 180 т.р.</span>
              </div>
              <div className="developer_dop">
                Полная занятость, 40 часов
              </div>
            </div>
            <div className="performance">
                <span className="performance_main1">
                  Опыт
                </span>

              <div className="performance_flex">
                <div className="performance_time">
                  <br/>
                </div>
                <div className="performance_basic">
                  Работаю 2 года Frontend - разработчиком.<br/><br/>
                  На первой работе разрабатывали корпоративную систему для строительной компании. Сначала был React на JS, а потом перешли на React + redux-toolkit (typescript). Писал интерфейс со сложной бизнес-логикой, свою библиотеку компонентов.
                  Были уведомления по WS, такие разделы, как свой чат, лента (как instagram), корпоративный маркетплейс, работа со складом. Писал анимацию на canvas и через css (transform).<br/><br/>
                  Потом перешёл на вторую работу, проекту было лет 5-6, там стэк был подревнее, React redux axios (JS), мы переписываем этот проект на TS, redux-toolkit.
                  Было много апишек, интернационализация, шаблон INSPINIA, переписывали на MUI.
                </div>
              </div> <br/>

              <div className="performance_flex">
                <div className="performance_time">
                  <br/>
                </div>
                <div className="performance_basic">
                  А также в моём арсенале был опыт с такими проектами:<br/><br/>
                  - Веб-приложение (frontend) торрент-каталога, включающее в себя работу с пользователями и валидацию
                  всех торрентов (мобильная и десктоп версии). Я писал фронт, на typescript + redux, применялся storybook:
                  <a href="https://sectorrent.site">sectorrent.site</a>. <br/><br/>
                </div>
              </div>

              <div className="performance_flex">
                <div className="performance_time">
                  <br/>
                </div>
                <div className="performance_basic">
                  - Проект для лаборатории проектирования малых космических аппаратов.
                  Главная фишка - симулятор полёта спутника вокруг земли (вычисления на бэке с++ и передача данных на фронт по gRPC, фронт на React + three.js).
                  Я получал данные по gRPC и rest, работал со swagger:
                  <a href="https://space.miem.hse.ru">space.miem.hse.ru</a>. <br/> <br/>
                </div>
              </div>

              <div className="performance_flex">
                <div className="performance_time">
                  <br/>
                </div>
                <div className="performance_basic">
                  Стажировался (3 месяца) full-stack-ом.<br/>
                  Получил хороший опыт на react + typescript + graphQL + docker + nest + typeorm + postgres + авторизация по JWT.<br/><br/>
                </div>
              </div>

              <div className="performance_flex">
                <div className="performance_time">
                  <br/>
                </div>
                <div className="performance_basic">
                  Примеры тестовых заданий: <br/>
                  - <a href="https://9lpasha.github.io/miniGame-React-Redux/">Мини-игра на react/redux-toolkit/ts</a> <br/>
                  - <a href="https://9lpasha.github.io/outside-digital/">Кусок простого интерфейса с небольшой логикой</a>
                </div>
              </div>

            </div>
            <div className="edu">
              <div className="edu_main">
                Образование
              </div>
              <div className="edu_flex">
                <div className="edu_type">
                  Высшее образование (4 курс)<br/>Дневная/Очная
                </div>
                <div className="edu_name">
                  <div className="edu_name1">
                    Национальный Исследовательский Университет Высшая Школа Экономики
                  </div>
                  <div className="edu_name2">
                    Специальность: Информатика и вычислительная техника
                  </div>
                </div>
              </div>
            </div>
            <div className="knowledge">
              <div className="know_main">
                Знания и навыки
              </div>
              <div className="know_basic">
                - html, css (scss) и js (нативные особенности, BOM, DOM, web api и тд.) - уровень специалист;<br/>
                - адаптивная верстка любой сложности;<br/>
                - figma;<br/>
                - react-Bootstrap, React Material UI;<br/>
                - базовые алгоритмы и структуры данных (нарешал много задач на LeetCode);<br/>
                - функциональный React v18 (react-router, hooks, понимание рендера компонентов, оптимальный рендер);<br/>
                - typescript (опыт год, хорошее знание interfaces, types, generics, typing of functions);<br/>
                - redux(redux-toolkit);<br/>
                - threeJS (3D в браузере);<br/>
                - storybook;<br/>
                - знаком с jest и react-testing-library;<br/>
                - настраивал webpack на одном из проектов;<br/>
                - rest, GraphQL;<br/>
                - git;<br/>
                - авторизация по JWT;<br/>
                - swagger;<br/>
                - docker, docker-compose;<br/>
                - node.js, nest, typeorm (опыт год);<br/>
                - elasticsearch;<br/>
                - nginx;<br/>
                - linux (на уровне редактирования файлов с vim и установки пакетов, docker и тд.);<br/>
                - websockets;<br/>
                - работа с файлами (передача по http); <br/>
                - сейчас изучаю паттерны проектирования, SOLID, сложные моменты typescript, смтрю в сторону web3; <br/>
                - работал с разными API, например GAPI (google);<br/>
                - разбираюсь в инфраструктуре, развёртывании и смежных с ним процессах.<br/>
                - умею держать в голове продукт, блок, приложение целиком;<br/>
                - умею искать и исправлять ошибки, довожу до конца.<br/>
              </div>
            </div>
            <div className="projects">
              <div className="know_main">
                Личные качества
              </div>
              <div className="know_basic">
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
          </>
        }
      </div>
    </div>
  );
};
