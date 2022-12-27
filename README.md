# EasyTasking - Frontend
## Description
A full-stack application built to give students a way to organize or manage their tasks more easily. 
It could be used by a small group friends that are working on a group project.
It could also be used by simply any group of people wanting to have a common task list.

The application does a couple things:

  1. It allows users to see a list of all the tasks;
  
  2. It allows users to see a task in detail;
  
  3. It allows users to edit tasks by:
    a. Changing the name of the task;
    b. Changing the description of the task;
    c. Changing the Color of the task.
    
  4. It allows users to delete tasks;
  
  5. It allows users to see who created the task

  6. It allows users to see who is part of the group that is able to access the website
 
### How it's Built
It's built using SpringBoot for the backend and React.js for the frontend

![image](https://user-images.githubusercontent.com/95504452/209610775-43158992-91f5-47bc-9e66-6f1208a3a2e7.png)
These are the components and files of the application.

For the backend, here it is: https://github.com/dazhuox/EasyTasking---Backend

Librairies used :
1. React Router (react-router-dom): https://reactrouter.com/en/main
2. React Color (react-color): https://github.com/uiwjs/react-color

### Running the Project
To run the project, 
First download node_modules and add it to this react app.
Then, download the files for the backend. Link here: https://github.com/dazhuox/EasyTasking---Backend
The port is 8080.
Note: The IDE used is IntelliJ.

### Challenges
Firstly, time was a major constraint.
For reasons I'm not getting into, this was done over 2 days.
Secondly, just writing the code was quite challenging as I tried things I hadn't learned yet, which often didn't end up working.
The Student entity was designed to have a firstName and a lastName, but for some reason I decided to make it a single String called "fullName" in StudentResponse. 
That made it challenging as I couldn't manipulate the CRUD operations as easily as I wanted to.
I also did not have enough time to make the design look good for some of the pages.
Lastly, I found it difficult to learn how to use Router as it had many versions, and finding information was difficult as their website did not answer most of my questions. Other sources were not helpful either as they mostly were from outdated versions of Router, where everything was different.

## Design

### Home Page
First, the Home page. This is a very generic page that doesn't show the functionalities in its content. 
![image](https://user-images.githubusercontent.com/95504452/209612826-3aa0a65b-3ca4-49f7-8d27-c2eadd22ca08.png)


#### Mobile

![image](https://user-images.githubusercontent.com/95504452/209613718-58ad15d0-d815-4cf3-845c-90c3d29b701c.png)


### Tasks Page
Then, we have the Tasks Page. This page shows the entire list of tasks made by everyone.
![image](https://user-images.githubusercontent.com/95504452/209612900-1e3394f0-7e59-46c9-92ce-2646ae323c7e.png)


#### Mobile

![image](https://user-images.githubusercontent.com/95504452/209613535-5420f683-3258-42ad-b915-1c0ddd7c5688.png)


Clicking on the "Add Task" Button brings us to a page to add a new task, clicking on a task brings us to a a page that shows the task on itself. That page is called "TaskDetails" and has a button "Go Back" and "Edit".
![image](https://user-images.githubusercontent.com/95504452/209613102-126c8a05-9774-4d0d-8883-477109940e0b.png)

Clicking on "Edit" brings us to a page where the user could update the task's Name, Description, and change the color using a color picker.

### Students Page
This is a very simple page where all the students that are participants are shown by their email.
This is so students or users can contact eachother through their emails


