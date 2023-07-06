import React, { useState } from 'react';
import './App.css';

function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}

function Nav(props) {
  return (
    <nav>
      <a
        href="/main"
        onClick={(event) => {
          event.preventDefault();
          props.onchangeMode('MAIN');
        }}
      >
        메인
      </a>{' '}
      |
      <a
        href="/my"
        onClick={(event) => {
          event.preventDefault();
          props.onchangeMode('MY');
        }}
      >
        마이 페이지
      </a>{' '}
      |
      <a href="#">로그인</a> |
      <a href="#">회원가입</a>
    </nav>
  );
}

function Main() {
  return (
    <main>
      <ul>
        <li>
          <a href="#">공연장 정보</a>
        </li>
        <li>
          <a href="#">뮤지컬 순위</a>
        </li>
        <li>
          <a href="#">연극 순위</a>
        </li>
        <li>
          <a href="#">전체 공연(인기순 나열)</a>
        </li>
      </ul>
    </main>
  );
}

function My() {
  return (
    <my>
      <ul>
        <li>
          <a href="#">내 일정 페이지(직접 등록)</a>
        </li>
        <li>
          <a href="#">관심 배우 일정 페이지</a>
        </li>
        <li>
          <a href="#">연극 순위</a>
        </li>
      </ul>
    </my>
  );
}

function App() {
  const [mode, setMode] = useState('TOP_MENU');
  let content = null;

  if (mode === 'TOP_MENU') {
    content = null;
  } else if (mode === 'MAIN') {
    content = <Main />;
  } else if (mode === 'MY') {
    content = <My />;
  }

  const onchangeMode = (newMode) => {
    setMode(mode === newMode ? 'TOP_MENU' : newMode);
  };

  return (
    <div>
      <Header title="a.pm" />
      <Nav id="top_menu" onchangeMode={onchangeMode} />
      {content}
    </div>
  );
}

export default App;
