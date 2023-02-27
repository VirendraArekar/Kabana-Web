import React, { Suspense } from 'react';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import { useWindowSize } from './components/misc/resize.hook';
import { Home } from './components/pages/Home';
import {Decision} from './components/pages/Decision'


function App() {
  const [width] = useWindowSize();

  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/decision" element={<Decision />} />
        </Routes>
      </BrowserRouter>
      {/* <BrowserRouter>{width > 1490 ? <Home /> : <HomeMobile />}</BrowserRouter> */}
    </Suspense>
  );
}

export default App;
