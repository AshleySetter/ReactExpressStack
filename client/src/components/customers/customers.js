import React, {Component} from 'react'; // import Component from react using object deconstruction
import './customers.css';

class Customers extends Component {
    constructor() {
        super();
        this.state = {
            customers: []
        } // initialise state as an object with a property customers which is an empty list
    }

    componentDidMount() { // lifecycle method that runs automatically when the component is mounte
        /* the `fetch('/api/customers')` command below fetches the data from the expres backend - uses the proxy
        address we specified ("proxy": "http://localhost:5000") in the package.json file. fetch returns a promise
        so we use .then() to retrieve the result when the fetch command finishes*/
        fetch('/api/customers')
        .then(res => res.json()) // get the response res and retrieves the res.json()
        .then(customers => this.setState({customers: customers}, () => console.log('Customers fetched..', customers))) // setState is the only legitimate way to update state 
        /* setState updates the property customers of the state object with the variable customers which 
        we have used then to set as the result of the previous then command res.json(). 2nd argument
        of this.setState is a callback function which we have used to output the data fetched to the 
        console - can view this in chrome dev tools console - can view it with F12 */

    }
    render() {
        return (
        <div>
            <h2>Customers</h2>
            <ul> {/* we have put some formatting stuff in customers.css so these ui elements looks nice */}
                {this.state.customers.map(customer => 
                    <li key={customer.id}> { customer.firstName } { customer.lastName } {/* li is a jsx list */}
                    </li> 
                )} 
            </ul>

        </div>
        );
    }
}

export default Customers;
