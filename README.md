This project was built by me to serve as a means by which I can quickly POC out an idea.  

For development you need two terminals running:
1. Inside the client directory ```npm run start```
2. Inside the root directory ```node index.js```

For deployment you only need to build the client project, and then upload this WHOLE damn directory to your webserver.
Then on the webserver use something like ```PM2 start index.js```.  At this point index.js will be pointing to the /client/build directory.

Lastly you'll need some Nginx routing because the express API will be running on port 5000.