# CS_405_SNHU
Architecture

The application is built using MEAN stack development. This consists of four different elements: MongoDB, Express framework, Angular, and Node.js. MongoDB makes up the web applications database, this is where account information and other important content is held. Express framework sets up the web server to handle requests and responses, direct incoming URLs to correct code, define the structure of the directory, and more. Angular is what users see when they access the web application. Using TypeScript, Angular creates a user interface which interacts with the other elements to display information to the users. The last element is Node.js. This is the foundation of the Express framework and the platform upon which the web application is built. It also serves as a webserver. 

On the customer side users interact with the interface created by Angular. Angular is designed to support single-page application (SPA) functionality. This means it is also used for the administrator SPA. Both customers and administrators log in with credentials stored in MongoDB. Express validates login, acting as the middleman between the front end and back end. It takes the request of logging in, checks if the credentials entered match any in the database, and then provides a response based on if the credentials are valid or not. Once logged in users are able to browse options based on cost and location. These details are also stored in the database and as with user login, Express once again acts as the middleman and displays information based on the user request.  All four elements work together to create a cohesive web application for both customers and administrators.  

Angular is different from the Express HTML customer-facing page in a few ways. First off, Angular is a single page application (SPA). This means that there is one page that gets rewritten as the user interacts with it rather than loading a whole new page. To do this, the application loads resources and adds them to the page without the need of refreshing the page. During development you can actually see this, if a change is made to the source code then the page automatically updates to display it. While working with the customer-facing page this did not occur. If a change was made then a refresh to the page would have to be made for the changes to be reflected. Along with HTML and CSS JavaScript was also used in this project. JavaScript is used to define webpage behavior and is a very common choice for web developers. 


Functionality

JSON is a file format whereas JavaScript is a language. JSON “grew out of a need for a stateless, real-time server-to-browser communication protocol without using browser plugins such as Flash” (“JSON”, 2022). JSON, while derived from JavaScript, can actually be used with many languages. It serves to connect the frontend and backend development pieces. This is because JSON is stateless as well as language independent. This means the data contained within the JSON file can be interpreted by non-JSON files such as JavaScript and HTML. 
There were a few instances throughout the full stack process where code was refactored. For instance, originally the travel information data was hard coded into a HTML. This was then changed to a JSON file which was read using handlebars. This is not best practice and was only done for testing purposes. Later, this file was then moved and changed to TypeScript where it now resides. Because the web page was not fully developed yet the data did not start where it ended up. It also changed formatting as it was changed from HTML to JSON to TypeScript. This is quite common and was done so that a web page containing information would be displayed when testing. This is important because if I had instead chosen not to include any data when testing I would not be able to see how the information was displayed and functioning. There may have been serious issues I overlooked that would have caused problems down the road. This is a great example of why reusable user interface components are so helpful. With them the system can be tested throughout the whole development process making trouble shooting easier. 


Testing

The most commonly used endpoints in this system were GET and POST. I tested with these endpoints quite frequently throughout the development process. GET was used to retrieve information on either all trips or a single trip, as well as to login. POST was used when adding and editing trips. To access these endpoints CORS (cross-origin resource sharing) had to be enabled. This also allowed authorization to be implemented into the system. Authorization as well as the other endpoints were methods created using Angular. The methods for request and retrieval were created in TypeScript and displayed to the user using HTML. I was able to make certain methods only accessible to signed in users by having the system check if a user is logged in or not. By adding this security the full stack application checks if a user is logged in, checks if the login information provided is valid, and only allows certain users to perform certain actions. 


Reflection

This course has been immensely helpful to me as I am interested in creating websites and applications. I always thought I was interested in back-end work, so I enjoyed working on full stack development and experiencing front end development. I also thought it was helpful to learn about how the front-end and back-end interact, as well as the way data flows throughout it. This course helped to teach me about using JSON, HTML, JavaScript, Angular, and Express. These are all things I have not had a lot of experience with so I enjoyed learning more about them. I also enjoyed working with MongoDB as it helped better my understanding of it. I also learned and worked with great tools like PostMan which helped with testing. I was able to practice what trouble shooting is like in a real-world situation which I also felt helped me feel more prepared for my future career.  
