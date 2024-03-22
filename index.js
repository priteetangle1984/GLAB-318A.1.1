// console.log('hello world');

// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World!\n');
//   });

//   server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
//   });


//---comment first part 
//   const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<h1 style="color: red">Hello World!</h1>');
//     res.write('<p>I wonder what else we can send...</p>');
//     res.end();
//   });

//   server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`);
//   });

// http
//   .createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/html");

//     switch (req.url) {
//       case "/":
//         res.write("GLAB-318.1.1");
//         break;
//       case "/test":
//         res.write("You've reached the test endpoint.");
//         break;
//       default:
//         res.statusCode = 404;
//         res.write("Error: 404 Not Found");
//         break;
//     }

//     res.end();
//   })
//   .listen(3000, () => {
//     console.log(`Server running.`);
//   });


const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    const path = url.parse(req.url).pathname;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // Default route
    if (path === '/') {
        res.write('<h1>Hello World!</h1>');
        res.write('<p>Welcome to my Node.js server</p>');
        res.end();
    }
    // Route 1: Products
    else if (path === '/products') {
        res.write('<h2>Products</h2>');
        res.write('<ul>');
        res.write('<li>Product 1</li>');
        res.write('<li>Product 2</li>');
        res.write('<li>Product 3</li>');
        res.write('</ul>');
        res.end();
    }
    // Route 2: Blog
    else if (path === '/blog') {
        res.write('<h2>Blog</h2>');
        res.write('<div>');
        res.write('<h3>Post 1</h3>');
        res.write('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat euismod felis, eget consequat turpis ultrices ut.</p>');
        res.write('<h3>Post 2</h3>');
        res.write('<p>Nullam suscipit felis ut arcu malesuada, ac facilisis ipsum lacinia.</p>');
        res.write('<h3>Post 3</h3>');
        res.write('<p>Sed blandit, sem a fermentum tincidunt, libero purus ultricies purus, vel aliquam libero turpis et libero.</p>');
        res.write('</div>');
        res.end();
    }
    // Handle 404 - Not Found
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>404 Not Found</h1>');
        res.end();
    }
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});