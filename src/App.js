import {Cube} from "./Cube";
import {useEffect, useRef, useState} from "react";
import './style.css';
import {Button} from "antd";
import React from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [page, setPage] = useState(0);
  const [pageForContent, setPageForContent] = useState(0);
  const [visible, setVisible] = useState(1);
  const cubeContentRef = useRef(null);

  useEffect(() => {
    const onResize = (e) => {
      setWindowHeight(e.target.innerHeight);
      setWindowWidth(e.target.innerWidth);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, []);

  const leftButtonClick = () => {
    setTimeout(() => {
      setVisible(0);
      setPage(prev => prev - 1);
    }, 0);
    setTimeout(() => {
      setVisible(1);
      setPageForContent(prev => prev - 1);
    }, 1000);
  }

  const rightButtonClick = () => {
    setTimeout(() => {
      setVisible(0);
      setPage(prev => prev + 1);
    }, 0);
    setTimeout(() => {
      setVisible(1);
      setPageForContent(prev => prev + 1);
    }, 1000);
  }

  const cubeScroll = (e) => {
    cubeContentRef.current.scrollBy(0, e.deltaY);
  }

  return (
    <div
      className="App"
      onWheel={cubeScroll}
    >
      <Button
        onClick={() => {
          pageForContent % 2 === 0 ? leftButtonClick() : rightButtonClick()
        }}
        type="primary"
        shape="round"
        size="large"
        style={{
          background: 'rgb(165 165 165)'
        }}
      >

        {pageForContent % 2 === 0 ? 2 : 1}
      </Button>

      <Cube
        windowWidth={windowWidth}
        windowHeight={windowHeight}
        page={page}
        visible={visible}
        pageForContent={pageForContent}
        reff={cubeContentRef}
      />
    </div>
  );
}

export default App;
