# AMUAY Wildlife Park Web Application
http://amuaywillifeparkapp-env-1.eba-tjk4eswt.us-east-1.elasticbeanstalk.com/information

## Introduction
The Zoo Web Application is a project based on a previous group web assignment(link here: https://github.com/is-Goten/Web_assignment) that required the use of only HTML and CSS to build web pages. After learning React, Node.js, Express, and MongoDB, I decided to upgrade and transform the previous project by incorporating these technologies. Now this is a MERN stack web application that allows users to view information about the animals and plants in a zoo, plan their visit, and submit queries or suggestions. The application uses React.js for the frontend, Express and Node.js for the backend, and MongoDB Atlas for the database.

## Features
The application has four main sections:
  - Home Page: This page displays recent activities in the zoo and allows users to subscribe to newsletters using the MailChimp API.
  - Wildlife Page: This page allows users to view information about plants and animals in the zoo. Users can filter plants or animals by category and conservation status, and click on a plant or animal to view detailed information about it.
  - Plan Your Visit Page: This page displays all the activities users can join in the zoo (not yet finished).
  - Information Page: This page provides users with directions, maps, opening hours and feeding hours. Users can also submit queries or suggestions using a form, which is stored in MongoDB Atlas database.
  
## Getting Started
### Prerequisites
To run the Zoo Web Application, you will need to have the following installed on your system:
  - Node.js
  - npm
  
### Installation
To install the application, follow these steps:
1. Clone the repository:  

```bash
git clone https://github.com/Yee627/AMUAY-Wildlife-Park-Web-Application
```

2. Install dependencies for the frontend and backend:
```bash
cd AMUAY-Wildlife-Park-Web-Application-master/client
npm install
```

```bash
cd AMUAY-Wildlife-Park-Web-Application-master/
npm install
```

3. Create a .env file in the backend directory with the following environment variables:
```makefile
MAILCHIMP_API_KEY=<your-mailchimp-api>
LIST_ID=<your-mailchimp-list-id>
DATABASE_URL=<your-mongodb-uri>
```

The frontend will be available at http://localhost:3000 and the backend will be available at http://localhost:4000.

## Contributing
If you would like to contribute to the project, feel free to submit a pull request or open an issue. Please make sure to follow the code style and conventions used in the existing code.
