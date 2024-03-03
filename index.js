import React from "react"
import ReactDOM from "react-dom/client"
import App from "./Component/App"
import { Provider } from "react-redux"

import { Store } from "@reduxjs/toolkit"
import myStore from "./Store/Store"
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <>
    <Provider store ={myStore}>
    <App/>
    </Provider>
    </>
)