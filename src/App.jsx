/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
import { useState } from "react";
import ShowSelection from "./shows/ShowSelection";
import ShowDetails from "./shows/ShowDetails";
import tvShows from "./shows/data";
 function App() {
  const [
         selectedShow,
         setSelectedShow] = useState(null)
  const [shows] = useState(tvShows);
  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection 
        shows={tvShows} 
        setSelectedShow={setSelectedShow}/>
      </header>
      <main>
        <ShowDetails 
        show={selectedShow}/>
        
      </main>
    </>
  );
}
export default App