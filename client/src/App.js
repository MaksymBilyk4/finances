import React from 'react';
import {Route, Routes} from "react-router";
import {routes} from "./routes/routes";
import MainLayout from "./components/Layout/MainLayout";

const App = () => {

    return (
        <MainLayout>
            <Routes>
                {routes.map(el =>
                    <Route key={el.path} path={el.path} element={el.element}/>
                )}
            </Routes>
        </MainLayout>
    );
};

export default App;

