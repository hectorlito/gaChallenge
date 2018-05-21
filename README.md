# GACodeChallenge

This app allows you to search movies via OMDB and then it will display the Title, Release Year, and a Movie Poster.

### Deployment

Heroku is a cloud platform that was used to host our web application. To view live, visit https://gacodehector.herokuapp.com/

### Utilizing
 - Express
 - HTML
 - CSS
 - JavaScript
 - Atom


### Approach
Began by researching OMDB and the information that it would provide in JSON. Then decided to display the Title, Year, and Poster based on the data provided. I think was able to dynamically render all of the information once the API was being requested.  I have commented out certain portions of code to explain what they would do so that students may be able to understand the importance behind it.  

## Contributors

#### Hector Guevara https://github.com/hectorlito

### Future Goals
- Enable the click functionality to allow for the data to display upon clicking the title
- initialize favorites page



#Bonus

I had actually tested this project before using Angular. This way seemed a lot more simple to me. 
This is not actually deployed but my code is available on the Angular named files.

Understanding the framework made more sense to me instead of having it written out in Vanilla JS. One of the key challenges students may face when using Angular are the small nuances, such as pairing it on both the HTML side and the JS side. What I mean by that is, calling the JS properly on the HTML side with (ctrl.) in reference to the (this.). Apart from that there are other small details that are necessary for the program to run that refer to tying to two files together, for example,
- ng-app on the same line as the opening html tag
- the use of curly brackets when calling upon ctrl. {{ctrl.movie.Title}}
- setting up a controller on both the app.js page and having it reflect on the opening body tag.
