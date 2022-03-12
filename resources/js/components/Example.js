import React from 'react';
import ReactDOM from 'react-dom';
function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header"><h1>Welcome to laravel react</h1></div>

                        <div className="card-body"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium delectus magnam quae quod, quos? A consequuntur inventore iusto labore neque rerum similique. Corporis cum
                            eligendi maxime officiis, qui voluptatum?</p></div>
                        <div className="btn"><button>Click me</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
