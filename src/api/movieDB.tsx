import axios from 'axios';

const movieDB = axios.create({
  baseURL:'https://api.themoviedb.org/3/movie',
  params:{
    api_key: 'b7dc5e020f5261aa73cb34093b069c9a',
    language: 'en-US'
  }
})


export default movieDB;