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
