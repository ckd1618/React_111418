import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    //class based components use render() { } while functional do not
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );
        return <div>Latitude: </div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));