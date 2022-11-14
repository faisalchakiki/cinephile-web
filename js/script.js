//Database Movie
const dataMovie = [
  {
    title: "Spiderman-Man Homecoming",
    genre: "Action, Adventure, Sci-FI",
    image: "../asset/img/movie.png",
    dateRelease: "",
    author: "",
    casts: "",
    duration: "",
    synopsis: ""
  },
  {
    title: "Spiderman-Man No Way Home",
    genre: "Action, Adventure, Sci-FI",
    image:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
    dateRelease: "",
    author: "",
    casts: "",
    duration: "",
    synopsis: ""
    },
  {
    title: "Peaky Blinders",
    genre: "Drama, Crime",
    image:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    dateRelease: "",
    author: "",
    casts: "",
    duration: "",
    synopsis: ""
    },
  {
    title: "The Walking Dead",
    genre: "Action, Adventure, Drama, Fantasy",
    image:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/xf9wuDcqlUPWABZNeDKPbZUjWx0.jpg",
    dateRelease: "",
    author: "",
    casts: "",
    duration: "",
    synopsis: ""
    },
  {
    title: "The Takeover",
    genre: "Action, Crime, Thriller",
    image:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/g7rdcofib7HqdlDP1LT7Hmf1f2o.jpg",
    dateRelease: "",
    author: "",
    casts: "",
    duration: "",
    synopsis: ""
    },
  {
    title: "Manifest",
    genre: "Drama, Mystery, Sci-FI",
    image:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1xeiUxShzNn8TNdMqy3Hvo9o2R.jpg",
    dateRelease: "",
    author: "",
    casts: "",
    duration: "",
    synopsis: ""
    },
];

const dataMovieUC = [
  {
    title: "Manifest",
    genre: "Drama, Mystery, Sci-FI",
    image:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1xeiUxShzNn8TNdMqy3Hvo9o2R.jpg",
    dateRelease: "",
    author: "",
    casts: "",
    duration: "",
    synopsis: ""
    },
  {
    title: "Wild is the Wind",
    genre: "Crime, Drama",
    image:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/rITxQBtnMpneZf8QzH1dqONQocx.jpg",
    dateRelease: "",
    author: "",
    casts: "",
    duration: "",
    synopsis: ""
    },
  {
    title: "Starwars: Andor",
    genre: "Fantasy, War&Politics, Sci-FI",
    image:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/59SVNwLfoMnZPPB6ukW6dlPxAdI.jpg",
    dateRelease: "",
    author: "",
    casts: "",
    duration: "",
    synopsis: ""
    },
  {
    title: "Chainsaw Man",
    genre: "Animation, Action, Sci-FI",
    image:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/yVtx7Xn9UxNJqvG2BkvhCcmed9S.jpg",
    dateRelease: "",
    author: "",
    casts: "",
    duration: "",
    synopsis: ""
    },
  {
    title: "Overdose",
    genre: "Action, Crime, Thiller",
    image:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/9RvM4wawLRlX608FgZr9kL8CLmy.jpg",
    dateRelease: "",
    author: "",
    casts: "",
    duration: "",
    synopsis: ""
    },
];

// Movie
const wrapperMovie = document.getElementById("content-movie");
dataMovie.forEach((data) => {
  const boxMovie = document.createElement("div");
  boxMovie.className = "box-movie box-active";
  const picture = document.createElement("img");
  picture.src = data.image;
  picture.alt = "image-movie";
  picture.loading = "lazy";
  const textMovie = document.createElement("div");
  textMovie.className = "text-movie hidden";
  const titleMovie = document.createElement("h4");
  titleMovie.className = "title-movie";
  titleMovie.textContent = data.title;
  const genre = document.createElement("p");
  genre.className = "genre";
  genre.textContent = data.genre;
  const buttonDetail = document.createElement("button");
  buttonDetail.className = "details";
  const details = document.createElement("a");
  details.href = "./page/details-noUser.html";
  details.textContent = "Details";

  wrapperMovie.appendChild(boxMovie);
  boxMovie.appendChild(picture);
  textMovie.appendChild(titleMovie);
  textMovie.appendChild(genre);
  buttonDetail.appendChild(details);
  textMovie.appendChild(buttonDetail);
  boxMovie.appendChild(textMovie);
});

// UpComing Movie
const wrapperUCMovie = document.getElementById("uc-movies");
dataMovieUC.forEach((data) => {
  const cardMovie = document.createElement("div");
  cardMovie.className = "card-movie";
  const picture = document.createElement("img");
  picture.src = data.image;
  picture.alt = "image-movie";
  picture.loading = "lazy";
  const textMovie = document.createElement("div");
  textMovie.className = "text-movie";
  const titleMovie = document.createElement("h4");
  titleMovie.className = "title-movie";
  titleMovie.textContent = data.title;
  const genre = document.createElement("p");
  genre.className = "genre";
  genre.textContent = data.genre;
  const buttonDetail = document.createElement("button");
  buttonDetail.className = "details";
  const details = document.createElement("a");
  details.href = "./page/details-noUser.html";
  details.textContent = "Details";

  wrapperUCMovie.appendChild(cardMovie);
  cardMovie.appendChild(picture);
  textMovie.appendChild(titleMovie);
  textMovie.appendChild(genre);
  buttonDetail.appendChild(details);
  textMovie.appendChild(buttonDetail);
  cardMovie.appendChild(textMovie);
});

const wrapMovie = document.getElementById("movie-content");
console.log
dataMovie.forEach((data) => {
  const boxMovie = document.createElement("div");
  boxMovie.className = "box-movie box-active";
  const picture = document.createElement("img");
  picture.src = data.image;
  picture.alt = "image-movie";
  picture.loading = "lazy";
  const textMovie = document.createElement("div");
  textMovie.className = "text-movie hidden";
  const titleMovie = document.createElement("h4");
  titleMovie.className = "title-movie";
  titleMovie.textContent = data.title;
  const genre = document.createElement("p");
  genre.className = "genre";
  genre.textContent = data.genre;
  const buttonDetail = document.createElement("button");
  buttonDetail.className = "details";
  const details = document.createElement("a");
  details.href = "./page/details-noUser.html";
  details.textContent = "Details";

  wrapMovie.appendChild(boxMovie);
  boxMovie.appendChild(picture);
  textMovie.appendChild(titleMovie);
  textMovie.appendChild(genre);
  buttonDetail.appendChild(details);
  textMovie.appendChild(buttonDetail);
  boxMovie.appendChild(textMovie);
});