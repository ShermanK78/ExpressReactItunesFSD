# React-Express-iTunes Web App

Search, and save your favourite iTunes items!

###Installation, Configuration & Testing

This guide provides users with clear instructions on how to set up, and test the application on their local machines.

---

## Installation and Local Setup

In this section, we'll provide step-by-step instructions for users to install and run the application on their local machines.

### Prerequisites

Before you start, ensure you have the following prerequisites:

- Node.js: You can download and install Node.js from [here](https://nodejs.org/).

### Installation

Follow these steps to set up and run the application locally:

1. **Clone the Repository:**

   Open your terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/ShermanK78/ExpressReactItunesFSD.git
   ```

2. **Navigate to the Project Directory:**

   Change your working directory to the project folder:

   ```bash
   cd ExpressReactItunesFSD
   ```

3. **Install Dependencies:**

   Run the following command to install the required dependencies for both the server and client:

   ```bash
   npm install
   ```
Please install ‘jest-localstorage-mock’ as well, for testing purposes:

   ```bash
   Npm install jest-localstorage-mock
   ```

## Run the application locally:

This application uses the ‘concurrently’ npm package.

This means the application can simply be started by:

Option 1:

1. **Start both server and back-end**

Navigate or remain within the project root folder[.../ExpressReactItunesFSD/], then run the following command:

```bash
    npm start
```

Option 2: [For testing and other purposes where you’d need the back and front-end running separately:

1. **Start the Server:**

   Navigate to the server directory: 

   ```bash
   cd server
   ```

   run the following command to start the server:

   ```bash
   node server.js
   ```

   The server should start at `http://localhost:9002`.

2. **Start the Client:**

   Open a new terminal window and navigate to the client directory:

   ```bash
   cd ../client
   ```

   Run the following command to start the client:

   ```bash
   npm start
   ```

   The client should start at `http://localhost:3000`.

### Testing

You can run tests for the application using the following commands:

- **Server Tests:** In the server directory, run `npm test` to execute server tests.

- **Client Tests:** In the client directory, run `npm test` to run client tests.

That's it! You now have the application tested and running locally on your machine.

---

## Features, Use Cases and Packages

This application makes use of the free Apple Itunes API to search for, and save your selection.

You may search using any keyword relevant to your search, using the following categories:
Movie
Music
Ebook

      2. You may save search results items by:
	     a. Clicking the ‘Save’ button under the result.

This will result in the item ‘Save’ button changing to ‘Saved’, and the item being added to the ‘Saved Results’ list at the bottom of the application.

      3. You may delete items by:
	    a. Clicking the ‘Saved’ button under the item, changing the button back to ‘Save’.
                b. Clicking the ‘Delete’ button next to the item, under ‘Saved Results’.


### Security Measures, External Services and Packages Utilized

- **Express.js:** Used for building the backend server.
- **React:** Used to create the front-end user interface.
- **Helmet:** Implemented for enhancing application security.
- **Jest:** Employed for unit testing the application.



### Deployment

The application is deployed as a combination of back-end and front-end. The front-end is hosted together with the back-end for efficiency. 

- Deployed on Render.com
- Access the deployed app by following this link: [(https://expressreactitunes.onrender.com/)]

## Thanks and look forward to more innovative and exciting developments!
