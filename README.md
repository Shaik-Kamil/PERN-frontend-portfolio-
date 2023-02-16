# Getting Started with Create React App

## Games collection backend deployed on render :

[deployed-backend](https://games-list-backend.onrender.com)

## Games collection frontend deployed on netlify:

[deployed-frontend](https://games-connoisseur.netlify.app)

## backend repo

[backend repo](https://github.com/Shaik-Kamil/PERN-backend-portfolio)

## frontend repo
[frontend rep](https://github.com/Shaik-Kamil/PERN-frontend-portfolio-)

# `Games Collection App`

This CRUD application uses react for the frontend to display the data and uses postGres on the backend to store the data on the backend server and is uses tailwindCSS for the styling. This is my portfolio project to add/maintain a personal collection of game.

## `Instructions`

In the event that the deployed application on netlify is not working or available. Please follow the steps below. You will also need the [backend repo](https://github.com/Shaik-Kamil/PERN-backend-portfolio) in conjunction with this repo to successfully have the application working on your local host.

1. fork and clone this repo to your local machine and open it on vscode.
2. in the terminal for this repo run`npm i`to install all dependencies.
3. Create an .env file and Once there, paste this in `REACT_APP_API_URL=http://localhost:`inside the .env.

> **Note**:your .env file must contain the same port as you have listed in the backend for this project. For example, if your backend port is 3003, your frontend .env file should be `REACT_APP_API_URL=http://localhost:3003` as well. Please make sure to check if both are the same.

4. Once you have installed all dependencies, type `npm start` on the command line to start the application in localhost.

### `User Stories`

1. As a user, I am able to see the home page of the application and can click on the links in the navigation bar and the footer.
2. As a user, I am able to see the list of Games in the collection already when I navigate to the the Games page.
3. As a user, I can click on the individual games in the collection either the title or the image to go to the individual page for that particular game.
4. As a user, I can edit the individual game in the collection by clicking on the edit button and update the individual game.
5. As a user, I can delete the individual game in the collection by clicking on the delete button.After clicking the delete button, I am taken back to the games collection page.
6. As a user, I can add any game to the collection by clicking on the add new game button on the navigation bar. If I don't provide an image for the game, a default image will be created instead.
