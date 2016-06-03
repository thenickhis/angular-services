# angular-services
This is a project to help students at [DevMountain](www.devmounta.in) to learn how services work in angular 1.x. The project displays data from the [Marvel Api](http://developer.marvel.com/). The styles for the project are all included, so students only need to build out the html and javascript to complete this project.

##Starting out
Fork/Clone the project. Open in your text editor of choice. You will be building on the master branch. Follow instructions below to complete the project and learn about angular services.

###Step 1
####File structure & app skeleton
Add angular to your project.
Create these files in your scripts directory: `app.js`, `MainCtrl.js`, `dataService.js`.
Make sure to link to those in your `index.html`.

####Create the angular app
In the `app.js` file, create you angular module.
In the `index.html`, make sure to add the `ng-app` directive.

####Build the controller
Now in your `MainCtrl.js` file, build your controller and name it MainCtrl.
Add the controller directive in the `index.html` file.

####Test your app
Let's make sure things are wired up correctly. 
In your controller, add `$scope.test = 'Hello, Avengers';`.
Then, through your `index.html` and the `{{ }}` syntax, add the test string and open your app in your browser to make sure things are working.

###Step 2
####Getting data from your service
Currently there is an array in `dataService`. In your controller, get that data from the service and into your controller. Check to make sure that it is there. You can use the debugger, or a console log, etc.

####Put the data onto the $scope object
Now that you have the data, put it onto the $scope object.

###Step 3
####Build a card for each hero
You will see a div in the `index.html` that has the class `.hero-wrapper`. Nested in that div is another div, `.hero-card`. Build an ng-repeat onto the `.hero-card` div.

####Build out the hero card details
Inside of `.hero-card`, there are other elements. You should be able to build out all of the hero's details into those elements. (Hint: the image is a little tricky...).

####Take a look at your app in your browser, and see if you have all of the hero cards!

###Black Diamond
####Filter cards by hero name
You will notice in `index.html` that there is a form, and an input. Using all of your Angular knowledge, and all of your Googling powers, build a way to filter the hero cards by the hero's name!!
