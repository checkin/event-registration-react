import React from 'react';
import ReactDOM from "react-dom";
import EventRegistrationForm from '../build/main';

function App() {
    return <EventRegistrationForm eventId={49815} />;
}


const app = document.getElementById("app");
ReactDOM.render(<App />, app);