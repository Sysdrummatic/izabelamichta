import React from "react";

import {
    About,
    Blog,
    Contact,
    Footer,
    MyWork,
    Projects,
    Header,
} from "./containers";
import { NavBar } from "./components";

const App = () => {
    return (
        <div className="app">
            <NavBar />
            <Header />
            <About />
            <MyWork />
            <Projects />
            <Blog />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
