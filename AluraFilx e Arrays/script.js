var ListaFilmes = [
  "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BZTJiNGM2NjItNDRiYy00ZjY0LTgwNTItZDBmZGRlODQ4YThkL2ltYWdlXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTkxODAyODMwNV5BMl5BanBnXkFtZTcwNzk5Nzk2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTAxMDE4Mzc3ODNeQTJeQWpwZ15BbWU4MDY2Mjg4MDcx._V1_UY268_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMzQ2ZTBhNmEtZDBmYi00ODU0LTgzZmQtNmMxM2M4NzM1ZjE4XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_UX182_CR0,0,182,268_AL_.jpg"
]

var NomeFilmes = []
NomeFilmes.push("Iception", "The Dark Knight", `Interstellar`, "Matrix", "Split", "The Silence<br>of the Lambs", `The Strangers`, "The Others", "Saw")

var linksTrailer = []
linksTrailer.push(
  "https://youtu.be/YoHD9XEInc0",
  "https://youtu.be/EXeTwQWrcwY",
  "https://youtu.be/zSWdZVtXT7E",
  "https://youtu.be/2KnZac176Hs",
  "https://youtu.be/84TouqfIsiI",
  "https://youtu.be/W6Mm8Sbe__o",
  "https://youtu.be/BbqELQHpmQM",
  "https://youtu.be/C7pKqaPtMiA",
  "https://youtu.be/S-1QgOMQ-ls"
)

for (var i = 0; i < ListaFilmes.length; i++) {
  document.write(
    "<div class='itens'>", "<a href=", linksTrailer[i], " target='_blank' >", `<img class='$ {(i == 5)?"poster":"poster"}' 
  src=${ListaFilmes[i]}  >`, "<h2 class='nomes'>", NomeFilmes[i], "</h2>", "</a>", "</div>")
}