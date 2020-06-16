import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Ridom',
    lastName: 'Khan'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);


function getGreeting(user) {
    if(user) {
        return <h1>Hello, {formatName(user)}!</h1>
    }
    return <h1>Hello, Stranger.</h1>
}

const element1 = (
    getGreeting(user)
);



ReactDOM.render(
  element1,
  document.getElementById('root')
);