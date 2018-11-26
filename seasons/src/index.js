import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = { lat: null, errorMessage: '' };
    // }

    state = { lat: null, errorMessage: '' }

    // this component triggers right after the constructor i.e. state
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }


    //class based components use render() { } while functional do not
    render() {
    //the render is basically you adding a prototype method from es5, or it works the same way as this.render= function() in constructor
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: { this.state.errorMessage }</div>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: { this.state.lat }</div>;
        }
        return <div>Loading...</div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));