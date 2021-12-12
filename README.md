# Title
Note Taker and Organizer

# Application Descprition
In this challenge for module 11 I was tasked with creating the backend side of a front end application called note taker. Note taker is an application where people can write down events they have going on in their lives. This application attempts to solve the problem of people forgetting what events they need to attend by giving them a way to remeber what events they need to attend on a daily basis. By remebering what events are going on in their lives people can be organized and more productive with how they spend their time. 

# Application Overview
We established a notes array in our db.json file to serve as the database for this application. The routes used to get the notes from the array or adding new notes to the array are all located in our server file. We connected the routes in the server file to the database by importing the db.json file into our server file. The front end was given to me as part of the challenge. The index.html file serves as the landing page for the front end while the notes.htmlm file serves as the page where notes can be added to the application. The landing page has a button that moves the user to the page where notes are added once it is clicked. The public folder has the javascript files and css that give the front end funtionality and has the css that gives the application its design. The application is designed with an aside section on the left that has all of the notes inside the array of out database. The section next to the aside section is where a user can add notes and recored events. A plus sign in the at the top of  the application is used to save notes to the application after they have been written down.

# Running The Application
The first step to run this application on another computer is to make sure you have Visual Studio Code and Node.js donwloaded onto your computer. The links to download this software will be listed below. 
- <a href="https://code.visualstudio.com/docs/setup/setup-overview">Visual Studio Code Downlaod</a>
- <a href="https://nodejs.org/en/">Node.js Download For Windows</a>
- <a href="https://nodejs.org/en/">Node.js Download For Macs</a>

The next step is to clone the code from my github repository for this application. To clone the code for application click on the green code button you will see at the top right 
corner of the page. Make sure to choose the link that is listed under the https because the other option requires a security key to run on other computers. Type the command git
clone in the terminal in your visual studio code and then doulbe clike to put the https link after the git clone command. The code will be added to the computer after the git clone command has been entered. 

After the rpository has been cloned there will be some packages that need to be installed from the Node.js library. The packages that need to be downloaded are express, path, and fs.
To download the necessary packages a peron will need to type the command npm install express path fs inside the visual studio code ternminal. After gettinng all of the packages added the last thing to do is run the command npm start in the terminal to start the application. After entering npm start in the terminal you can type in http://localhost:3001 to pull the application up on the web.

# 

# Assignment Tasks
1. When the user logs into the application they are given a landing page where they can click a link to go the page with the notes
2. The notes page has all of the presaved notes on the lefthand column. The reight hand column has a space where the client can add notes to the note tracker and save those notes on the left hand column
3. After typing in the note and its text in the right hand column an icon appears in the top right corner that allows the user to save the notes to the notes in the left hand column
4. The user is able to click a plus icon to start writing down a new note and the text that is associated with it

# Tasks Achieved By:
I was able to achieve the tasks by reviewing the module and assimilating the concepts to what we were asked to do. I was also able to use past challenges for reference as well when it came to creating the readme file. Staying on course for today was also a big help in getting this assignment done

# Link to Deployed Applicaiton:
<a href="https://sleepy-stream-94662.herokuapp.com/notes">Link to Deployed Application</a>

# Screenshot for Deployed Application:
<img src="./public/images/IMG-1153.jpg" alt="Screenshot for Note Taker" />

# Contributors
Made with Love By Josh Jackson