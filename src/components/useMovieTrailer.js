import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import {addTrailerVideo} from '../utils/moviesSlice';
const useMovieTrailer= (movieid)=>{
const dispatch = useDispatch();


const movie_id=movieid;

const getMovieTrailer=async()=>{
  const data = await fetch(`https://api.themoviedb.org/3/movie/`+movie_id+`/videos`,API_OPTIONS);
    
   // const data = await fetch(`https://api.themoviedb.org/3/movie/897087/videos`,API_OPTIONS);
    const json=await data.json();
   
   const filterdata = json.results.filter(video=>video.type==="Trailer")
    //if there is no trailer , take 1st video from json no matter if is is trailer /not 
   const trailer= filterdata.length? filterdata[0]:json.results[0];
   dispatch(addTrailerVideo(trailer))
 
 }
useEffect(()=>{
    getMovieTrailer();
  },[])
}
export default useMovieTrailer;