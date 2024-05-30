import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RouterCustom from "./router";
import "./style/style.scss";






const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<h1>Green Shop</h1>); //goi ra component thay vi goi truc tiep text
root.render(
    <BrowserRouter>
    <RouterCustom />
    </BrowserRouter>
);
