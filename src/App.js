import {useEffect, useRef, useState} from "react";
import React from "react";

import {Cube} from "./Cube";
import './style.css';
import {makeShadow} from "./utils";
import backgroundImage from './images/background.jpg';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [page, setPage] = useState(0);
  const [pageForContent, setPageForContent] = useState(0);
  const [visible, setVisible] = useState(1);
  const [scrolledDown, setScrolledDown] = useState(false);
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
          behavior: 'smooth'
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
          behavior: 'smooth'
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

  return (
    <div className="App" onWheel={cubeScroll}>
      <div style={{
        width: '100%', height: '100%',
        background: `center / contain url('${backgroundImage}')`, opacity: '0.4',
        position: 'fixed',
        zIndex: '-1'
      }}/>
      <div style={{display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px'}}>
        <div className={'selected' + (page % 2 === 1 ? ' not-selected' : '')} onClick={leftButtonClick}>
          {page % 2 === 0 ? 1 : null}
        </div>
        <div style={{width: '20px', height: '1px', background: 'rgb(165, 165, 165)'}}/>
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
      />
    </div>
  );
}

export default App;
