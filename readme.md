Multi-Threaded Node.js Server
=============================

This project demonstrates a multi-threaded Node.js server using the cluster module to effectively distribute load across multiple CPU cores.

Features
--------

*   **Multi-Threaded Architecture**: Leverages Node.js clustering to distribute load across CPU cores.
*   **Scalability**: Designed to handle increased load by scaling across multiple cores.
*   **Simple REST Endpoint**: Includes a basic HTTP server that responds to GET requests.

Getting Started
---------------

### Prerequisites

*   Node.js installed on your machine.

### Installation

1.  Clone the repository:
     
    `git clone https://github.com/JoeAxelrod/node-server-multi-threaded.git`
    
2.  Install NPM packages:
     
    `npm install`
    

### Running the Server

Execute the command:

`npm start`

This starts the server in a clustered mode, utilizing available CPU cores.

### Running Tests

Run the automated tests using:

`npm test`

This will start the server, execute the tests, and then shut down the server.

Architecture
------------

### Server (app.js)

*   Initializes a cluster of Node.js processes.
*   Each worker process creates an HTTP server.
*   Responds to GET requests on the root endpoint (`/`).

### Tests (server.test.js)

*   Tests to ensure server responds correctly.
*   Validates load balancing across multiple worker processes.

Log Output Example
------------------

When running `node app.js`, the output will indicate the primary process and multiple worker processes starting up. For instance:

this machine has 8 CPUs  
Primary 11728 is running  
this machine has 8 CPUs  
Worker 11733 started  
...

Note: The log "this machine has 8 CPUs" will appear multiple times due to the log being called in each worker process.

Conclusion
----------

This project serves as a basic example of a multi-threaded Node.js server. It demonstrates how to utilize the clustering capabilities of Node.js to scale an application across multiple CPU cores.

License
-------

This project is licensed under the MIT License - see the `LICENSE` file for details.
