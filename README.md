# ID Assignment 2

Name: Wee Yan Kai <br>
Student Number: S10206089C <br>
Website Link: https://wyankai.github.io/IDAssigment2/

## Daily To Do List Website

This is a to do list website that uses localStorage to store the user's daily tasks. This website is meant to kept in the background while the user work to completing their daily tasks. User's can also edit their daily tasks. The website also uses Quotable API which provides the users with quotes to motivate them while they do their tasks

![homepage](https://user-images.githubusercontent.com/73118690/104125163-02110d00-5390-11eb-8398-a49c467db829.PNG)

## Design Process
 
The design is for the people who want to use a personalised to-do list.
The website stores the user's input into the localStorage so that the User's data would not be lost the moment they reload the screen.

-As the creator of the websote, I want to create a platform for the users for them to store their daily todo-list as well as badges function and a quotes function to help motivate the users.

## Features

Feature 1: To-do List that uses localStorage so the the users will not lose their daily to-do list the moment they refresh the page.
Feature 2: Completed button can be pressed again in case the user accidentally pressed the completed button
Feature 3: Delete button is that can remove data from localStorage database.
Feature 4: Badges button that shows the Users the achievement they have unlocked.
Feature 5: Settings button that allow the users to toggle Light and Dark Mode.
Feature 6: Light and Dark Mode that uses localStorage so that mode will still be on even after the user had reloaded the page.
 
### Existing Features
Feature 1: To-do List that uses localStorage so the the users will not lose their daily to-do list the moment they refresh the page.
Feature 2: Completed button can be pressed again in case the user accidentally pressed the completed button
Feature 3: Delete button is that can remove data from localStorage database.
Feature 4: Badges button that shows the Users the achievement they have unlocked.
Feature 5: Settings button that allow the users to toggle Light and Dark Mode.
Feature 6: Light and Dark Mode that uses localStorage so that mode will still be on even after the user had reloaded the page.
Feature 7: Users will be able to customise the colour of the text on the website.
Feature 8: A filter button for the users to filter out their tasks

### Features Left to Implement
Feature 7: Users will be able to customise the colour of the text on the website.

## Technologies Used
- HTML

- Javascript
    - The project uses **Javascript** for the scripting of the website

- CSS
    - The project uses **CSS** to style the website.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.

- Quotable API
    - The project uses **Quotable API** to print inspirational quotes 


## Testing

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. To Do List:
    1. Press the home button
    2. Type the a new daily tasks.
    3. Check if the delete button and the checked button works perfectly.
    4. Reload the page to see if the tasks stays there.
    
Expected Result: Tasks remains in the to-do list even after being reloaded<br>
End Result(Success): Tasks remains in the to-do list even after being reloaded<br>
<br>
2. Badges Collection:
   1. Press the badges button
   2. Hover over the "Beginner" badge
   
Expected Result: A desciption of how the badges is obtained will appear<br>
End Result(Success): A desciption of how the badges is obtained will appear<br>
<br>
3. Settings:
   1. Press the Settings button
   2. Press the Light Mode/Dark Mode button
   3.Reload the page
   
Expected Result: The page will be dark mode/light mode according to the button you pressed even after you reload the page.<br>
End Result(Success): The page will be dark mode/light mode according to the button you pressed even after you reload the page.<br>
<br>
4. Inspirational Quotes:
   1. Press the "Get Quote" button
   
Expected Result: A quote as well as the author is shown<br>
End Result(Success): A quote as well as the author is shown<br>
<br>

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

### Bugs
Currently the uncompleted button for the filter does not work.

## Credits
Icon stylesheet taken from :
- https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css
Quotable API used in the project:
- https://api.quotable.io/random
Ajax function to change the background of the body is taken from: 
- https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js

### Media
- The design assets for the badges are designed by myself.

### Acknowledgements

- I received inspiration for this project from Dev Ed's To-do List Beginner Project Video.
- I received inspiration for this project from the idea of Dailies from Habitica.
- I received inspiration for this project from Deepak Kumar's JavaScript Fetch API - Quote Generator Video.
