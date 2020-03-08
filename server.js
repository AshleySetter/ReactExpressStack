const express = require('express'); // imports express

const app = express(); // initialise express

app.get('/api/customers', (req, res) => { // the get route method
    const customers = [
        {id: 1, firstName: "John", lastName: "Doe"},
        {id: 2, firstName: "Tom", lastName: "Boe"},
        {id: 3, firstName: "Dave", lastName: "Foe"},
    ]; /* in real project we would here write the code to request data from a database e.g. mongoDB. 
    Here we are just hard coding it since it's a simple starter project */
    
    res.json(customers); /* sends a json response to this get request - so if a request is made to 
    the server with this address the server responds by sending the json data customers */
})

const port = 5000; // initialise port varaible to listen on

app.listen(port, () => console.log(`Server started on port ${port}`)); /* 2nd argument of listen is 
a callback (a fn passed to another fn to be invoked) which we are using here to notify us that
the server started and on which port it started. `() => {code}` is an arrow function it 
defines an anonymous function which runs the code inside the curley braces (for one liners you
can ommit the curly braces) */

