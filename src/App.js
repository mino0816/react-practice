import logo from './logo.svg';
import './App.css';
import { createRef, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import Page from './page/Page';

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div>
      <Page isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
}
export default App;
