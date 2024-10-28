let randomU = Math.floor(Math.random()*100)
export const RANDOM_USER_PHOTO =  "https://randomuser.me/api/portraits/men/"+randomU+".jpg";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODFmMWRiNWI2MjEzMDAyMTFkOWE3NjA5ZWRjOTc4NSIsIm5iZiI6MTczMDA5NTE2Ni4wMDI0NSwic3ViIjoiNjcxYjNhNWQyN2JkNTdkOTFmNjI4NmVjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Eo54qSYU48ztMvDQi_Xb3BzpJWLhu9MFK1vUbeny9rM'
    }
  };


  export const API_URL = "https://api.themoviedb.org/3/movie/now_playing?page=1"