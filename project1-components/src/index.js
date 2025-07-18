import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import StarRating from './Star';
// import { useState } from 'react';
const root = ReactDOM.createRoot(document.getElementById('root'));
// function Test() {
//   const [movieRating, setMovieRating] = useState(0)
//   return (
//     <div>
//       <StarRating maxRating={10} onSetRating={setMovieRating} />
//       <div>movie was rated {movieRating}</div>
//     </div>
//   )
// }
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} />
    <StarRating color="red" size={24} />
    <Test /> */}
  </React.StrictMode>
);

