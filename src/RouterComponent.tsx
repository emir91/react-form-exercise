import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from './Form/Container';
import Home from './Home/Home';
import { FORM_PATHS } from "./globalConstants";

const RouterComponent = () => {
    return (
        <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              {FORM_PATHS.map(formPath => <Route key={formPath} path={formPath} element={<Form />} />)}
            </Routes>
      </Router>
    );
}
 
export default RouterComponent;