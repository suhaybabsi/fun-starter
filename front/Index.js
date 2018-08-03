import React from 'react';
import ReactDOM from 'react-dom';

class Root extends React.Component {

    render() {
        return (
            <h2>Hello, React is here .. !</h2>
        );
    }
}

ReactDOM.render(<Root />, document.getElementById("app"));