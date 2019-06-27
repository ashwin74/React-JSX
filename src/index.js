//Import the React and ReactDOM libraries.
import React from 'react';
import ReactDOM from 'react-dom';


//Create a React Component.
const App = () => {
    const Submit = {text: 'clickerz'};
    const Style = {backgroundColor:'blue', color:'white'};
    const labelText = 'Enter Name';
    return (
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="name" type="text"/>
            <button style={Style}>{Submit.text}</button>
        </div>
    );
};

//Take the React component and show it on the screen.
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);