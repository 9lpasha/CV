import { useEffect, useRef, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

import { Cube } from "./Cube";
import { LanguageToggle } from "./LanguageToggle";
import "./style.css";
import { makeShadow } from "./utils";
import backgroundImage from "./images/background.jpg";

// Scrolls the page towards an accumulated target with time-based easing.
const smoothScrollBy = (s, page, e) => {
  if (!s.frame || s.page !== page) {
    cancelAnimationFrame(s.frame);
    s.frame = null;
    s.page = page;
    s.pos = page.scrollTop;
    s.target = page.scrollTop;
  }

  // deltaMode: 0 = pixels, 1 = lines, 2 = pages
  const delta = e.deltaMode === 1 ? e.deltaY * 40 : e.deltaMode === 2 ? e.deltaY * page.clientHeight : e.deltaY;
  const maxScroll = page.scrollHeight - page.clientHeight;
  s.target = Math.max(0, Math.min(maxScroll, s.target + delta));

  if (s.frame) return;

  let lastTime = performance.now();

  const step = (time) => {
    // stop if the user grabbed the page and scrolled it some other way
    if (Math.abs(page.scrollTop - s.pos) > 2) {
      s.frame = null;
      return;
    }

    const diff = s.target - s.pos;
    if (Math.abs(diff) < 0.5) {
      s.pos = s.target;
      page.scrollTop = s.target;
      s.frame = null;
      return;
    }

    // time-based easing: covers ~15% of the remaining distance per 60fps frame, at any frame rate
    const dt = Math.min(time - lastTime, 100);
    lastTime = time;
    s.pos += diff * (1 - Math.pow(0.85, dt / 16.7));
    page.scrollTop = s.pos;
    s.frame = requestAnimationFrame(step);
  };

  s.frame = requestAnimationFrame(step);
};

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [pageForContent, setPageForContent] = useState(0);
  const [scrolledDownLeft, setScrolledDownLeft] = useState(false);
  const [scrolledDownRight, setScrolledDownRight] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [lang, setLang] = useState(() => localStorage.getItem("cv-lang") || "ru");

  useEffect(() => {
    localStorage.setItem("cv-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const cubeContentLeftRef = useRef(null);
  const cubeContentRightRef = useRef(null);
  const loaderRef = useRef(null);
  const reffSlider = useRef(null);

  const ifFirstPage = pageForContent % 2 === 0;

  useEffect(() => {
    const onResize = (e) => {
      setWindowHeight(e.target.innerHeight);
      setWindowWidth(e.target.innerWidth);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const leftButtonClick = (e) => {
    makeShadow(e);

    if (!ifFirstPage) {
      setPageForContent((prev) => prev - 1);
    }
  };

  const rightButtonClick = (e) => {
    makeShadow(e);

    if (ifFirstPage) {
      setPageForContent((prev) => prev + 1);
    }
  };

  const activePageRef = ifFirstPage ? cubeContentLeftRef : cubeContentRightRef;
  const smoothScrollRef = useRef({ page: null, pos: 0, target: 0, frame: null });
  const appRef = useRef(null);

  // The wheel listener is attached once, so it reads the current page through a ref.
  const currentPageRef = useRef(activePageRef);
  currentPageRef.current = activePageRef;

  // Every wheel scroll (over the page or around it) goes through our own easing instead of the browser's.
  // The listener must be non-passive to cancel native scrolling, which React's onWheel can't do.
  useEffect(() => {
    const app = appRef.current;
    const smooth = smoothScrollRef.current;

    const listener = (e) => {
      if (e.ctrlKey || !e.deltaY) return; // keep pinch/ctrl zoom and horizontal scroll native
      const page = currentPageRef.current.current;
      if (!page) return;
      e.preventDefault();
      smoothScrollBy(smooth, page, e);
    };

    app.addEventListener("wheel", listener, { passive: false });

    return () => {
      app.removeEventListener("wheel", listener);
      cancelAnimationFrame(smooth.frame);
    };
  }, []);

  const onPageScroll = () => {
    const scrolled = activePageRef.current.scrollTop !== 0;
    ifFirstPage ? setScrolledDownLeft(scrolled) : setScrolledDownRight(scrolled);
  };

  const antIcon = <LoadingOutlined style={{ fontSize: 54, color: "#00a600" }} spin />;

  return (
    <>
      <div className="App" ref={appRef} style={{ transition: "all .5s ease" }}>
        <div
          style={{
            width: "100%",
            height: "100%",
            background: `center / contain url('${backgroundImage}')`,
            position: "fixed",
            zIndex: "-1",
          }}
        />
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            marginBottom: "20px",
            height: "40px",
            width: "100%",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", gap: "10px", alignItems: "center", height: "40px" }}>
            <div className={"selected" + (!ifFirstPage ? " not-selected" : "")} onClick={leftButtonClick}>
              {ifFirstPage ? 1 : null}
            </div>
            <div style={{ width: "20px", height: "1px", background: "rgb(81 122 62)" }} />
            <div className={"selected" + (ifFirstPage ? " not-selected" : "")} onClick={rightButtonClick}>
              {!ifFirstPage ? 2 : null}
            </div>
          </div>
          <div style={{ position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)" }}>
            <LanguageToggle lang={lang} setLang={setLang} />
          </div>
        </div>
        <div
          onClick={() => {
            ifFirstPage ? setScrolledDownLeft(false) : setScrolledDownRight(false);
            let tempRef = ifFirstPage ? cubeContentLeftRef : cubeContentRightRef;
            tempRef.current.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
          className="selected scroll-circle"
          style={{ opacity: ifFirstPage ? (scrolledDownLeft ? 1 : 0) : scrolledDownRight ? 1 : 0 }}
        >
          <div className="arrow arrow-bottom" />
        </div>

        <Cube
          windowWidth={windowWidth}
          windowHeight={windowHeight}
          pageForContent={pageForContent}
          reff={cubeContentLeftRef}
          reff2={cubeContentRightRef}
          reffSlider={reffSlider}
          onScroll={onPageScroll}
          lang={lang}
          setPageLoaded={() => {
            setTimeout(() => {
              setPageLoaded(true);
              setTimeout(() => {
                loaderRef.current.style.zIndex = "-1";
              }, 500);
            }, 500);
          }}
        />
      </div>

      <div
        ref={loaderRef}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: "0",
          background: "rgb(12, 19, 9)",
          opacity: pageLoaded ? 0 : 1,
          transition: "all .5s ease",
        }}
      >
        <Spin indicator={antIcon} />
      </div>
    </>
  );
}

export default App;
