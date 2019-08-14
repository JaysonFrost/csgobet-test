import React from "react";
import ReactDOM from "react-dom";

import Main from 'containers/Main'
import GlobalStyle from './styles.js'

const App = () => (
    <React.Fragment>
        <GlobalStyle />
        <Main />
    </React.Fragment>
)

ReactDOM.render(<App />, document.getElementById("root"));