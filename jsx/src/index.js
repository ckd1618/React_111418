// Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
function getButtonText(){
    return 'Click on Me!';
}

const App = () => {
    

    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue', color: 'white'}}>{getButtonText()}</button>
        </div>
    );
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);