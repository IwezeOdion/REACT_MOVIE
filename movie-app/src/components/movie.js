import React, { useEffect, useState } from 'react'

function Movie() {

    const [movieList, setMovieList] = useState ([])

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=78841e0733ee8692f9f20044d4f7362a"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results))
  }

  useEffect(() => {
    getMovie()
  }, [])

  console.log(movieList)

  return (
  <div>
    {movieList.map((movie)=>(
  <img style={{width:"300px", height:"250px", marginLeft:"15px", marginTop: "30px"}} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
  ))}
  </div>
  )
}

export default Movie
