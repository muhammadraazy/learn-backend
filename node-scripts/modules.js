// What is a Module in Node.js?
// Consider modules to be the same as JavaScript libraries.

// A set of functions you want to include in your application.

// Built-in Modules
// Node.js has a set of built-in modules which you can use without any further installation.

// Look at our Built-in Modules Reference for a complete list of modules.

// Include Modules
// To include a module, use the require() function with the name of the module:

// var http = require('http');
// Now your application has access to the HTTP module, and is able to create a server:

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);
// Create Your Own Modules
// You can create your own modules, and easily include them in your applications.

// The following example creates a module that returns a date and time object:

// Example
// Create a module that returns the current date and time:

// exports.myDateTime = function () {
//   return Date();
// };
// Use the exports keyword to make properties and methods available outside the module file.

// Save the code above in a file called "myfirstmodule.js"


// Include Your Own Module
// Now you can include and use the module in any of your Node.js files.

// Example
// Use the module "myfirstmodule" in a Node.js file:

// var http = require('http');
// var dt = require('./myfirstmodule');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The date and time are currently: " + dt.myDateTime());
//   res.end();
// }).listen(8080);
// Notice that we use ./ to locate the module, that means that the module is located in the same folder as the Node.js file.

// Save the code above in a file called "demo_module.js", and initiate the file:

// Initiate demo_module.js:

// C:\Users\Your Name>node demo_module.js
// // If you have followed the same steps on your computer, you will see the same result as the example: http://localhost:8080