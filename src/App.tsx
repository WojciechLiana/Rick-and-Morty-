import React from 'react';
import {Link} from "@reach/router";

function App(props: any): JSX.Element {

    return (
        <div className="App">
            <header className="header">
                <h1>Rick and Morty</h1>
                <p>Choose your favourite episode</p>
                <Link to="/">Home</Link>
                <Link to="/fav">Favourites</Link>
            </header>
            {props.children}
        </div>
    );
}

export default App;
