var request = new XMLHttpRequest();
const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class','container')

app.appendChild(container);
getMovie = () => {
  console.log('getting movie...');

  let searchvalue = document.getElementById('searchinput').value;
// this allows me to get this information from the input field so I can use it later.

  request.open('GET', 'https://www.omdbapi.com/?apikey=ff967ee9&s='+ searchvalue, true);

  request.onload = function (){

    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      data.Search.forEach(movie => {
        // console.log("this is movie", movie.Title);
        // console.log("this is the year", movie.Year);
        // console.log("this is the poster", movie.Poster);\
        //testing to see whether or not the data from the movie was coming through

        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const h1 = document.createElement('h1');
        h1.textContent = movie.Title;
        // when movie title displays
        // for each title a click event
        // should display/hide the children
        // children---- year, poster
        // parent---title
        //pseudocode written for the next portion where I try to enable click hidden functionality

        const moviedescr = document.createElement('div');
        moviedescr.setAttribute('class','moviedesc')

        const p = document.createElement('p');
        p.setAttribute('class', 'moviedisplay');
        p.textContent= movie.Year;
        p.style.display="block";


        const poster = document.createElement('img');
        poster.setAttribute('class', 'moviedisplay');
        poster.src= movie.Poster;
        poster.style.display="block";

        // .target.querySelector('moviedisplay')
        // h1.addEventListener("click",function(e){
        //
        //   if (e.p.style.display == "none" && e.poster.style.display == "none") {p.style.display == "block"; poster.style.display == "block";
        // } else {
        //
        // }
        // });
        //ongoing code to allow the click on the title to initiate the information to display

        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(moviedescr);
        moviedescr.appendChild(p);
        moviedescr.appendChild(poster);


      });
    } else {
      const errorMessage = document.createElement('marquee');
      errorMessage.textContent = `not displaying content`;
      app.appendChild(errorMessage);
      //fun error message I found online
    }
  }
  request.send();

}
