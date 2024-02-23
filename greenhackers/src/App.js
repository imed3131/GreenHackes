import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Signup from './pages/SignUp';
import Signin from './pages/Signin';
import Main from './pages/Main';
import Files from './pages/Files';
import Dep from './pages/Dep';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        {/* <Route path="/" element={<Signup />} /> */}
          <Route path="/" element={<Signin />} />
          <Route path='/main' element={<Main />} />
          <Route path='/files' element={<Files />} />
          <Route path='/Dep' element={<Dep />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
