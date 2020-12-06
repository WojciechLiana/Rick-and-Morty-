import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StoreProvider} from "./redux/Store";
import Home from "./components/Home";
import Favourites from "./components/Favourites";
import {Router, RouteComponentProps} from "@reach/router";

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent;

ReactDOM.render(
    <React.StrictMode>
        <StoreProvider>
            <Router>
                <App path='/'>
                    <RouterPage pageComponent={<Home/>} path="/"/>
                    <RouterPage pageComponent={<Favourites/>} path="/fav"/>
                </App>
            </Router>
        </StoreProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
