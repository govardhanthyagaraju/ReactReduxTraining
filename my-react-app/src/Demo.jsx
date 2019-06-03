import React from 'react';

class Demo extends React.Component {
    showAlert() {
        alert('React Rocks!!!');
    }
    render() {
        const name = 'Raj';
        return (
            <div>
                <p>Hello {name} </p>
                <p>and Citycode {560039 + 1}</p>
                <button onClick={this.showAlert}>Click me</button>
            </div>
        );
    }
}
export default Demo;