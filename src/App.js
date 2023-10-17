import {useEffect, useRef, useState} from "react";
import React from "react";
import { LoadingOutlined } from '@ant-design/icons';

import {Cube} from "./Cube";
import './style.css';
import {makeShadow} from "./utils";
import backgroundImage from './images/green_background.jpg';
import {Spin} from "antd";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [page, setPage] = useState(0);
  const [pageForContent, setPageForContent] = useState(0);
  const [visible, setVisible] = useState(1);
  const [scrolledDown, setScrolledDown] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  const cubeContentRef = useRef(null);
  const loaderRef = useRef(null);

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

  const leftButtonClick = (e) => {
    makeShadow(e);

    if (pageForContent % 2 === 1) {
      setTimeout(() => {
        setVisible(0);
        setPage(prev => prev - 1);
      }, 0);
      setTimeout(() => {
        setVisible(1);
        setPageForContent(prev => prev - 1);
        cubeContentRef.current.scroll({
          top: 0,
          left: 0,
          behavior: 'auto'
        });
        setScrolledDown(false);
      }, 1000);
    }
  }

  const rightButtonClick = (e) => {
    makeShadow(e);

    if (pageForContent % 2 === 0) {
      setTimeout(() => {
        setVisible(0);
        setPage(prev => prev + 1);
      }, 0);
      setTimeout(() => {
        setVisible(1);
        setPageForContent(prev => prev + 1);
        cubeContentRef.current.scroll({
          top: 0,
          left: 0,
          behavior: 'auto'
        });
        setScrolledDown(false);
      }, 1000);
    }
  }

  const cubeScroll = (e, ifTouch = false) => {
    if (!ifTouch) {
      cubeContentRef.current.scrollBy(0, e.deltaY);
    }
    if (cubeContentRef.current.scrollTop !== 0) {
      setScrolledDown(true);
    } else {
      setScrolledDown(false);
    }
  }

  const antIcon = <LoadingOutlined style={{ fontSize: 54, color: '#00a600' }} spin />;

  return (
    <>
      <div
        className="App"
        onWheel={cubeScroll}
        style={{transition: 'all .5s ease'}}
      >
      <div style={{
        width: '100%', height: '100%',
        background: `center / contain url('${backgroundImage}')`,
        position: 'fixed',
        zIndex: '-1'
      }}/>
      <div style={{display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px'}}>
        <div className={'selected' + (page % 2 === 1 ? ' not-selected' : '')} onClick={leftButtonClick}>
          {page % 2 === 0 ? 1 : null}
        </div>
        <div style={{width: '20px', height: '1px', background: 'rgb(81 122 62)'}}/>
        <div className={'selected' + (page % 2 === 0 ? ' not-selected' : '')} onClick={rightButtonClick}>
          {page % 2 === 1 ? 2 : null}
        </div>
      </div>
          <div onClick={() => {
            setScrolledDown(false);
            cubeContentRef.current.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth'
            });
          }} className='selected scroll-circle' style={{opacity: scrolledDown ? 1 : 0}}>
            <div className='arrow arrow-bottom'/>
          </div>

      <Cube
        windowWidth={windowWidth}
        windowHeight={windowHeight}
        page={page}
        visible={visible}
        pageForContent={pageForContent}
        reff={cubeContentRef}
        onScroll={(e) => cubeScroll(e, true)}
        setPageLoaded={() => {
          setTimeout(() => {
            setPageLoaded(true);
            setTimeout(() => {
              loaderRef.current.style.zIndex = '-1';
            }, 500);
          }, 500)
        }}
      />
    </div>

      <div ref={loaderRef} style={{
        width: '100%', height: '100%',
        display: 'flex', justifyContent: 'center',
        alignItems: 'center', position: 'fixed',
        top: '0', background: 'rgb(12, 19, 9)',
        opacity: pageLoaded ? 0 : 1,
        transition: 'all .5s ease',
      }}>
        <Spin indicator={antIcon} />
      </div>

    </>
  );
}

export default App;
