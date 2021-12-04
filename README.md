# Capstone project for Fall 2021

!-Submission Structure-!

 app/home-page: Contains all the files necessary to create the home page of the site.
 
 app/login: Contains all the files necessary to create the login page for the site.
 
 app/models: Contains the files that create a layout for what a User and Vent object can/must be.
 
 app/personal: Contains the files for the would-be personal page.
 
 app/services: Contains all the files relating to connecting to the database and posting to it, such as creating new users and handling login functions, to posting vents to the database.
 
 app/vent-box: Contains the files for creating the text form box that allows you to post to the database.

app/vent-list: Contains the files for creating the list of all vents inside the database and showing them to you in the form of a list.

!-Project Report-!

A. This project is a website that allows people to log in and post things anonymously to vent their feelings. It uses an online database to store the posts and users, and lets you log in using google.

B. My original requirements were to be able to post, comment, like, and possibly post even photos. My final requirements, as of right now, are simply that users can actually use the site anonymously and feel their information is protected. Despite the multiple problems it has, I think it meets those goals relatively well.

C. I didn't have an original timeline for my project, as I was pretty bad about building something solid in that regard. However the final timeline went something like this:

October 12 - Created Initial Project Site
October 16 - Added Firebase Hosting
October 23 - Got list for posts working
October 24 - Got Login functionality working and fixed hosting problems
November 18 - Added Authentication to site and skeleton for personal page
November 29 - Finally Uploaded styling to the GitHub
December 2 - Got the user ID working for listing who is logged in, and added more bootstrap styling
December 3 - Final commit uploaded.

I should have used GitHub more than I did, but I feel it was a big help still overall.

D. I personally expected more of myself, but I kept running into roadblocks and mismanaged my time so I ended up falling behind on the amount of progress I could have made. Things I thought I knew were changed because of updates and I had to stumble to catch my footing again. My results meet at least some of my expectations, which are being able to post and log in, as well as protecting the site from being able to be seen by non-users. However, I didn't get to add in the personal page like I wanted due to errors with addings users to posts. Lack of in depth styling also bothered me, as I wanted to make the site look better but work and other personal issues got in the way.

E. VS Code was the biggest player here as it let me code the entire project. Angular is what my entire project runs off of, so it is definitely second in usefulness here. Firebase is equally as useful, as it not only hosts my project on a site, but also allows it to have a database and handles login functionality. Bootstrap is useful for styling, and I hoenstly wish I had used it more because in all honesty the site is very bland and bare bones. GitHub is, again, a staple for people in my line of work. It lets me keep track of my progress and lets me revert back to old versions if errors show up. A must-have in the industry.

F. Work that needs to be done: Add users to posts, add page that shows all posts currently logged in user had made, add like functionality, add more styling, fix error with word count function not working properly. Quite a bit more to be done, and it honestly needs more than I'm probably overlooking right now. 




!-User Manual/Deployment Instructions-!
In order to run this project on your own local client, the following steps need to be made:

1. Preferrably use VS Code to open the folder, and have Node installed
2. Using the terminal type 'cd capstone' to change directories into the actual project
3. Still using the terminal, type 'ng serve' and wait for the project to compile and launch onto a local server.
4. If angular is not working, you may need to run the command 'npm install -g @angular/cli' to install angular.
5. Once running, click the "Log in with Google" button and log in using a preferred email.
6. After being redirected to the page, use the text box to type and hit the 'share' button to post to the database.

