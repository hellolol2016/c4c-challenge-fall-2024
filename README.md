# C4C Challenge Submission: Dennis Wang

Hello, this is my submission for NEU Code4Community fall 2024 coding challenge.

<iframe width="560" height="315" src="https://www.youtube.com/embed/video-id" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## How to start

1. Make sure you have nodejs and npm installed on your device!
2. Clone the repo or download it as a zip and extract.
3. In the C4C-Challenge-Fall-2024 folder, run `npm install` in terminal
4. Once all required libraries are downloaded, run `npm run frontend` in a terminal
5. Start the backend with `npm run backend` in another terminal
   Note: you only need to include the image name and filetype (e.g. youtube.png)

## High-level overview

**Frontend** - Uses React, HTML, and CSS to take user input and represent backend data
**Backend** - Express to host server and take user requests to access / make changes to a backend data json document.

## Design Choices

1. I chose to use a data json file in the backend because the rubic did not mention anything about scalability. This was the most convenient and easy to implement to store data.
2. I chose to use tailwindcss to make styling easier and to demonstrate understanding of frontend design
3. I originally had a React state value for each input element, but I removed them in the end because it would slow down the application if more inputs were needed. It was also a unnecessary to save the input values in states because there is no clear advantage in keeping them as states.

## Short Reflection

- I got to learn how to manage data in the backend with a JSON file, while this is not very scalable it is great for smaller personal projects
- If I had more time, I would've implemented a login page with JWT to add more security to making changes to the data file. I would probably also make a modal that pops up when you click on the projects to provide more info.
- In the beginning, I had to learn how to make updates to a local json file so it reflects the user input. There were some errors with finding the right filepath but I was able to fix it by guessing and checking with different filepaths. The search function was also something new I learned, seeing the projects change as I updated the partner info input box was really satisfying when I first got it to work.
- I chose to implement a search feature because I thought learning how to make real time backend calls is a great way to demonstrate fullstack developer knowledge. Also, data persistence is another skill I wanted to show, though it is only local on the server.
