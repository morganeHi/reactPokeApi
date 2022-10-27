import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Details} from "./pages/Details";
import { Home } from "./pages/Home";
import './style/style.css'


const root = document.getElementById('root');
const app = createRoot(root);

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/:name' element={<Details/>} />
            </Routes>
        </BrowserRouter>
    )
}

app.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)