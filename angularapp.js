const app = angular.module('MovieApp', []);

// http://www.omdbapi.com/?apikey=ff967ee9&t=john+q
app.controller('MainController', ['$http',function($http){
  this.test = 'works';
  // this.searchterm = "";
  this.movie= {};
  this.movies= [];
  this.url = 'http://www.omdbapi.com/?apikey=ff967ee9&'
  this.movieTitle = 'good';

  //update state
  getMovie = () => {
    console.log('getting movie....');
    let searchvalue = document.getElementById('searchinput').value;
    console.log(searchvalue);
    // change this.movie to a movie
    $http({
      url: this.url + '&s=' + searchvalue,
      method: 'GET'
    })
    .then((response)=>this.movies = response.data)
    .catch(err=>console.log(err));
  }

}]);
