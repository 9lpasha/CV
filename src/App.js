import {useEffect, useRef, useState} from "react";
import React from "react";
import { LoadingOutlined } from '@ant-design/icons';
import {Spin} from "antd";

import {Cube} from "./Cube";
import './style.css';
import {makeShadow} from "./utils";
import backgroundImage from './images/background.jpg';


function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [pageForContent, setPageForContent] = useState(0);
  const [scrolledDownLeft, setScrolledDownLeft] = useState(false);
  const [scrolledDownRight, setScrolledDownRight] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

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

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, []);

  const leftButtonClick = (e) => {
    makeShadow(e);

    if (!ifFirstPage) {
      setPageForContent(prev => prev - 1);
    }
  }

  const rightButtonClick = (e) => {
    makeShadow(e);

    if (ifFirstPage) {
      setPageForContent(prev => prev + 1);
    }
  }

  const cubeScroll = (e, ifTouch = false) => {
    let tempRef = ifFirstPage ? cubeContentLeftRef : cubeContentRightRef;

    if (!ifTouch) {
      tempRef.current.scrollBy(0, e.deltaY);
    }
    if (tempRef.current.scrollTop !== 0) {
      ifFirstPage ? setScrolledDownLeft(true) : setScrolledDownRight(true);
    } else {
      ifFirstPage ? setScrolledDownLeft(false) : setScrolledDownRight(false);
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
      <div style={{display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px', height: '40px'}}>
        <div className={'selected' + (!ifFirstPage ? ' not-selected' : '')} onClick={leftButtonClick}>
          {ifFirstPage ? 1 : null}
        </div>
        <div style={{width: '20px', height: '1px', background: 'rgb(81 122 62)'}}/>
        <div className={'selected' + (ifFirstPage ? ' not-selected' : '')} onClick={rightButtonClick}>
          {!ifFirstPage ? 2 : null}
        </div>
      </div>
          <div onClick={() => {
            ifFirstPage ? setScrolledDownLeft(false) : setScrolledDownRight(false);
            let tempRef = ifFirstPage ? cubeContentLeftRef : cubeContentRightRef;
            tempRef.current.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth'
            });
          }} className='selected scroll-circle'
               style={{opacity: ifFirstPage ? (scrolledDownLeft ? 1 : 0) : (scrolledDownRight ? 1 : 0)}}>
            <div className='arrow arrow-bottom'/>
          </div>

      <Cube
        windowWidth={windowWidth}
        windowHeight={windowHeight}
        pageForContent={pageForContent}
        reff={cubeContentLeftRef}
        reff2={cubeContentRightRef}
        reffSlider={reffSlider}
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
