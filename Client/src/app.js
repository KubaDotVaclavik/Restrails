import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    render(){
        return <div>
            <h1>Hello from react boundle hot reload3333</h1>
            <h2>hey 2</h2>
        </div>
    }
}

ReactDOM.render(<Hello/>, document.getElementById('app-root'));