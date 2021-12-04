# Capstone project for Fall 2021

Submission Structure:

 app/home-page: Contains all the files necessary to create the home page of the site.
 app/login: Contains all the files necessary to create the login page for the site.
 app/models: Contains the files that create a layout for what a User and Vent object can/must be.
 app/personal: Contains the files for the would-be personal page.
 app/services: Contains all the files relating to connecting to the database and posting to it, such as creating new users and handling login functions, to posting vents to the database.
 app/vent-box: Contains the files for creating the text form box that allows you to post to the database.
 app/vent-list: Contains the files for creating the list of all vents inside the database and showing them to you in the form of a list.

!-User Manual-!
In order to run this project on your own local client, the following steps need to be made:

1. Preferrably use VS Code to open the folder, and have Node installed
2. Using the terminal type 'cd capstone' to change directories into the actual project
3. Still using the terminal, type 'ng serve' and wait for the project to compile and launch onto a local server.
4. If angular is not working, you may need to run the command 'npm install -g @angular/cli' to install angular.
5. Once running, click the "Log in with Google" button and log in using a preferred email.
6. After being redirected to the page, use the text box to type and hit the 'share' button to post to the database.

