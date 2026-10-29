import React, { useMemo } from "react";
import { Card, Carousel, Col, List, Row, Space, Timeline } from "antd";

import jsIcon from "./images/icons/icons8-js-50.png";
import tsIcon from "./images/icons/icons8-typescript-50.png";
import reactIcon from "./images/icons/icons8-react-a-javascript-library-for-building-user-interfaces-24.png";
import reduxIcon from "./images/icons/icons8-redux-an-open-source-javascript-library-for-managing-application-state-24.png";

import backgroundImage from "./images/background.jpg";
import photo from "./images/CV-avatar.jpg";
import vibeemDemo from "./images/demo-cv.gif";
import { FaTelegram, FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { translations, formatDuration } from "./i18n";

const { Meta } = Card;

const cvPdfUrl = `${process.env.PUBLIC_URL}/Churakov_Pavel_Frontend.pdf`;

const getTimePerformance = (year, month, yearEnd, monthEnd) => {
  // months are 1-based (9 = September); no end date means "until now"
  const now = new Date();
  const end = yearEnd ? yearEnd * 12 + monthEnd : now.getFullYear() * 12 + now.getMonth() + 1;
  const total = end - (year * 12 + month);

  return {
    years: Math.floor(total / 12),
    months: total % 12,
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
  lang,
}) => {
  const t = translations[lang];
  const timePerformance = useMemo(() => getTimePerformance(2020, 9), []);
  const timePerformance1 = useMemo(() => getTimePerformance(2020, 9, 2021, 6), []);
  const timePerformance2 = useMemo(() => getTimePerformance(2021, 6, 2023, 2), []);
  const timePerformance3 = useMemo(() => getTimePerformance(2023, 2, 2023, 12), []);
  const timePerformance4 = useMemo(() => getTimePerformance(2023, 12), []);

  const listSkills = t.skillsList.map((skill, idx) => {
    const icons = [
      [tsIcon, jsIcon, reactIcon, "https://nextjs.org/favicon.ico"],
      "",
      [reduxIcon],
      ["https://webpack.js.org/favicon.a3dd58d3142f7566.ico", "https://vitejs.dev/logo.svg"],
      "https://testing-library.com/img/octopus-32x32.png",
      "https://threejs.org/files/favicon.ico",
    ];
    return {
      ...skill,
      picture: icons[idx],
    };
  });

  const jobs = t.jobs;

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
                        <Card title={t.position} bordered={false} hoverable>
                          <Space wrap>
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
                            <a href={cvPdfUrl} download>
                              <Card size="small" hoverable>
                                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                  <FaFilePdf size={20} color="#E53935" /> <span style={{ whiteSpace: "nowrap" }}>{t.downloadCV}</span>
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
                    <Meta title={t.name} style={{ width: "100%", textAlign: "center" }} />
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
                        <a href={cvPdfUrl} download>
                          <Card size="small" hoverable>
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                              <FaFilePdf size={20} color="#E53935" /> <span style={{ whiteSpace: "nowrap" }}>{t.downloadCV}</span>
                            </div>
                          </Card>
                        </a>
                      </div>
                    ) : null}
                  </Card>
                </div>
              </div>

              <div className="projects">
                <Row>
                  <Col style={{ width: "100%" }}>
                    <Card title={t.about} bordered={false} hoverable>
                      <div className="edu_flex">
                        <div className="edu_name2 common-text" dangerouslySetInnerHTML={{ __html: t.aboutText }} />
                      </div>
                    </Card>
                  </Col>
                </Row>
              </div>

              <div className="projects">
                <Row>
                  <Col style={{ width: "100%" }}>
                    <Card title={t.ownProduct} bordered={false} hoverable>
                      <h2 className="mb10">
                        <a href="https://vibeem.space" target="_blank" rel="noreferrer">
                          <b>vibeem.space</b>
                        </a>{" "}
                        <span className="product-badge">{t.vibeemStatus}</span>
                        <br />
                        {t.vibeemDescription}
                      </h2>
                      <a href="https://vibeem.space" target="_blank" rel="noreferrer">
                        <img className="product-demo" src={vibeemDemo} alt="vibeem.space demo" loading="lazy" />
                      </a>
                      <span className="common-text">
                        <b>{t.whatDid}:</b> <br />
                        {t.vibeemTasks.map((task, i) => (
                          <span key={i}>
                            - {task}
                            <br />
                          </span>
                        ))}
                        <br />
                        <b>{t.stack}:</b> {t.vibeemStack}
                      </span>
                    </Card>
                  </Col>
                </Row>
              </div>

              <div className="performance">
                <Row>
                  <Col style={{ width: "100%" }}>
                    <Card title={`${t.experience} ${formatDuration(timePerformance, lang)}`} bordered={false} hoverable>
                      <div className="performance_flex">
                        <Timeline
                          mode="left"
                          items={[
                            {
                              label: (
                                <div>
                                  <b>12.2023 — {t.present}</b>
                                  <div>{formatDuration(timePerformance4, lang)}</div>
                                </div>
                              ),
                              children: (
                                <div>
                                  <h2 className="mb10">
                                    <b>{jobs[0].company}</b>
                                    <br />
                                    <span>{jobs[0].project1}</span>
                                    <br />
                                    {jobs[0].project1Description}
                                  </h2>
                                  <span className="common-text">
                                    <b>{t.whatDid}:</b> <br />
                                    {jobs[0].project1Tasks.map((task, i) => (
                                      <span key={i}>
                                        - {task}
                                        <br />
                                      </span>
                                    ))}
                                  </span>

                                  <h2 className="mb10">
                                    <br />
                                    {jobs[0].project2}
                                    <br />
                                  </h2>
                                  <span className="common-text">
                                    <b>{t.whatDid}:</b> <br />
                                    {jobs[0].project2Tasks.map((task, i) => (
                                      <span key={i} dangerouslySetInnerHTML={{ __html: `- ${task}<br />` }} />
                                    ))}
                                    <br />
                                    <b>{t.stack}:</b> {jobs[0].stack}
                                  </span>
                                </div>
                              ),
                            },
                            {
                              label: (
                                <div>
                                  <b>02.2023 — 12.2023</b>
                                  <div>{formatDuration(timePerformance3, lang)}</div>
                                </div>
                              ),
                              children: (
                                <div>
                                  <h2 className="mb10">
                                    <b>{jobs[1].company}</b>
                                    <br />
                                    <a target="_blank" href="https://happydesk.ru/" rel="noreferrer">
                                      {jobs[1].project1}
                                    </a>{" "}
                                    <br />
                                    {jobs[1].project1Description}
                                  </h2>
                                  <span className="common-text">
                                    <b>{t.whatDid}:</b> <br />
                                    {jobs[1].project1Tasks.map((task, i) => (
                                      <span key={i} dangerouslySetInnerHTML={{ __html: `- ${task}<br />` }} />
                                    ))}
                                    <br />
                                    <b>{t.stack}:</b> {jobs[1].stack}
                                  </span>
                                </div>
                              ),
                            },
                            {
                              label: (
                                <div>
                                  <b>06.2021 — 02.2023</b>
                                  <div>{formatDuration(timePerformance2, lang)}</div>
                                </div>
                              ),
                              children: (
                                <div>
                                  <h2 className="mb10">
                                    <b>{jobs[2].company}</b> <br />
                                    {jobs[2].project1}
                                  </h2>
                                  <span className="common-text">
                                    <b>{t.whatDid}:</b>
                                    <br />
                                    {jobs[2].project1Tasks.map((task, i) => (
                                      <span key={i}>
                                        - {task}
                                        <br />
                                      </span>
                                    ))}
                                    <br />
                                    <b>{t.stack}:</b> {jobs[2].stack}
                                  </span>
                                </div>
                              ),
                            },
                            {
                              label: (
                                <div>
                                  <b>09.2020 — 06.2021</b>
                                  <div>{formatDuration(timePerformance1, lang)}</div>
                                </div>
                              ),
                              children: (
                                <div>
                                  <h2 className="mb10">
                                    <b>{jobs[3].company}</b> <br />
                                    <a target="_blank" href="https://space.miem.hse.ru/vsvs" rel="noreferrer">
                                      {jobs[3].project1}
                                    </a>{" "}
                                    <br />
                                    {jobs[3].project1Description}
                                  </h2>
                                  <span className="common-text">
                                    <b>{t.whatDid}:</b>
                                    <br />
                                    {jobs[3].project1Tasks.map((task, i) => (
                                      <span key={i} dangerouslySetInnerHTML={{ __html: `- ${task}<br />` }} />
                                    ))}
                                    <br />
                                    <b>{t.stack}:</b> {jobs[3].stack}
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
                          {t.otherProjects} <br />
                          <span className="common-text mt10">
                            &nbsp;&nbsp;&nbsp;- {t.dressieWidget}&nbsp;
                            <a href="https://dressie.ai/" target="_blank" rel="noreferrer">
                              Dressie.ai
                            </a>
                          </span>
                          <br />
                          <span className="common-text mt10">
                            &nbsp;&nbsp;&nbsp;- {t.visualProgramming}&nbsp;
                            <a target="_blank" href="https://github.com/9lpasha/web-pilot" rel="noreferrer">
                              {t.link}
                            </a>
                            <br />
                          </span>
                          <span className="common-text mt10">
                            &nbsp;&nbsp;&nbsp;- {t.taskmanLib}&nbsp;
                            <a target="_blank" href="https://github.com/9lpasha/taskman-lib" rel="noreferrer">
                              {t.link}
                            </a>
                          </span>
                          <br />
                          <span className="common-text mt10">&nbsp;&nbsp;&nbsp;- {t.reactNativeApp}</span>
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
                    <Card title={t.education} bordered={false} hoverable>
                      <div className="edu_flex">
                        <div className="edu_name2 common-text">{t.bachelor}</div>
                      </div>
                      <br />
                      <div className="edu_flex">
                        <div className="edu_name2 common-text">{t.master}</div>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </div>

          <div
            style={{ width: "50%", height: "fit-content" }}
            className="container-page"
            ref={reff2}
            onScroll={onScroll}
          >
            <div style={{ position: "relative" }}>
              <div style={{ background: `center / contain url('${backgroundImage}')` }} className="local-background" />

              <div className="knowledge">
                <Row>
                  <Col style={{ width: "100%" }}>
                    <Card title={t.skills} bordered={false} hoverable>
                      <div className="edu_flex">
                        <div style={{ width: "100%" }} className="common-text">
                          <List
                            className="demo-loadmore-list"
                            itemLayout="horizontal"
                            dataSource={listSkills}
                            renderItem={(item) => (
                              <List.Item key={item.name}>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
