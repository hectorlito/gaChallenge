var request = new XMLHttpRequest();
const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class','container')

app.appendChild(container);
getMovie = () => {
  console.log('getting movie...');

  let searchvalue = document.getElementById('searchinput').value;
  // console.log(searchvalue);

  request.open('GET', 'http://www.omdbapi.com/?apikey=ff967ee9&s='+ searchvalue, true);

  request.onload = function (){
    // let ID= 0;
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      data.Search.forEach(movie => {
        // console.log("this is movie", movie.Title);
        // console.log("this is the year", movie.Year);
        // console.log("this is the poster", movie.Poster);

        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const h1 = document.createElement('h1');
        h1.textContent = movie.Title;
        // when movie title displays
        // for each title a click event
        // should display/hide the children
        // children---- year, poster
        // parent---title

        const moviedescr = document.createElement('div');
        moviedescr.setAttribute('class','moviedesc')

        const p = document.createElement('p');
        p.textContent= movie.Year;
        p.style.display="none";


        const poster = document.createElement('img');
        poster.src= movie.Poster;
        poster.style.display="none";

        h1.addEventListener("click",function(e){
          e.target.querySelector('.moviedescr').style.display = "block";
        });
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
    }
  }
  request.send();

}
