import React, { useState } from "react";

// as functional component
function MyComponent(props) {
    const [newSalary, setNewSalary] = useState(props.salary);
    const [raiseRate, setRaiseRate] = useState(5);

    const raiseSalary = () => {
        const newRate = raiseRate + 5;
        setRaiseRate(newRate);
        setNewSalary(props.salary + (props.salary * newRate) / 100);
        console.log({ newSalary, raiseRate });
    };

    const formatNumber = (n) => {
        return n.toLocaleString(undefined, { maximumFractionDigits: 2 });
    };

    return (
        <div>
            <h1>{props.name}</h1>
            <p>
                <img src={props.profileUrl} alt="" />
            </p>
            <button onClick={() => raiseSalary()}>Raise 5% on salary</button>

            <ul>
                <li>Salary {formatNumber(newSalary)}</li>
                <li>Raise rate {formatNumber(raiseRate)}%</li>
            </ul>
        </div>
    );
}

// uncomment if you want to test class component example
/*class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newSalary: props.salary,
            raiseRate: 5
        };
    }

    raiseSalary() {
        const newRate = this.state.raiseRate + 5;

        this.setState({ raiseRate: newRate });
        this.setState({ newSalary: this.props.salary + (this.props.salary * newRate) / 100 });

        console.log(this.state);
    }

    formatNumber(n) {
        return n.toLocaleString(undefined, { maximumFractionDigits: 2 });
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p><img src={this.props.profileUrl} alt=""></img></p>
                <button onClick={() => this.raiseSalary()}>Raise 5% on salary</button>

                <ul>
                    <li>Salary {this.formatNumber(this.state.newSalary)}</li>
                    <li>Raise rate {this.formatNumber(this.state.raiseRate)}%</li>
                </ul>
            </div>
        );
    };
}*/

export default MyComponent;