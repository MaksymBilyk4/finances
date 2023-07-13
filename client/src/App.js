import React, {useEffect} from 'react';
import {Route, Routes} from "react-router";
import {routes} from "./routes/routes";
import MainLayout from "./components/Layout/MainLayout";
import {useDispatch} from "react-redux";
import {getAllDays, getAllExpenses} from "./redux/action/actions";

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllDays())
        dispatch(getAllExpenses())
    }, []);

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

