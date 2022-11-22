if (
  document.location.pathname == "/" ||
  document.location.pathname == "/index.html" ||
  document.location.pathname == "/page/home-withuser.html"
) {
  // Movie Now Showing
  
  //memproses data data dari api 
  let proses = async () => {
    const dataMovie = fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=1201742989a654711ed4998c2dc41085&language=en-US&page=1"
    );
    const response = await dataMovie; //syntax await return resolve
    const data = await response.json();
    const result = data.results;
    result.forEach((value) => {
      const title = value.original_title;
      const posterMovie = `https://www.themoviedb.org/t/p/w220_and_h330_face${value.poster_path}`;
      console.log(posterMovie);
      // let proses2 = async () => {
      //   const response = await detailMovie;
      //   const detailsMovie = await response.json();
      //   const { Genre } = detailsMovie;

      // Movie
      const wrapperMovie = document.getElementById("content-movie");

      const boxMovie = document.createElement("div");
      boxMovie.className = "box-movie box-active";
      wrapperMovie.appendChild(boxMovie);

      const picture = document.createElement("img");
      picture.src = posterMovie;
      picture.alt = "image-movie";
      boxMovie.appendChild(picture);

      const textMovie = document.createElement("div");
      textMovie.className = "text-movie hidden";
      boxMovie.appendChild(textMovie);

      const titleMovie = document.createElement("h4");
      titleMovie.className = "title-movie";
      titleMovie.textContent = title;
      textMovie.appendChild(titleMovie);

      const genre = document.createElement("p");
      genre.className = "genre";
      genre.textContent = "ini genre";
      textMovie.appendChild(genre);

      const buttonDetail = document.createElement("button");
      buttonDetail.className = "details";
      textMovie.appendChild(buttonDetail);

      const details = document.createElement("a");
      details.href =
        document.location.pathname === "/page/home-withuser.html"
          ? "./details.html"
          : "./page/details-noUser.html";
      details.textContent = "Details";
      buttonDetail.appendChild(details);

      // };
      // proses2();
    });
  };
  proses();

  //Database Movie
  const dataMovieUC = [
    {
      title: "Spiderman-Man Homecoming",
      genre: "Action, Adventure, Sci-FI",
      image: "../asset/img/movie.png",
      dateRelease: "",
      author: "",
      casts: "",
      duration: "",
      synopsis: "",
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
      synopsis: "",
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
      synopsis: "",
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
      synopsis: "",
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
      synopsis: "",
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
      synopsis: "",
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
      synopsis: "",
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
      synopsis: "",
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
      synopsis: "",
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
      synopsis: "",
    },
  ];

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
    details.href =
      document.location.pathname === "/page/home-withuser.html"
        ? "./details.html"
        : "./page/details-noUser.html";
    details.textContent = "Details";

    wrapperUCMovie.appendChild(cardMovie);
    cardMovie.appendChild(picture);
    textMovie.appendChild(titleMovie);
    textMovie.appendChild(genre);
    buttonDetail.appendChild(details);
    textMovie.appendChild(buttonDetail);
    cardMovie.appendChild(textMovie);
  });
} else if (document.location.pathname == "/page/details.html") {
  // Set New Date
  const date = document.getElementById("date");
  const newDate = (date.value = new Date().toISOString().slice(0, 10));
}
