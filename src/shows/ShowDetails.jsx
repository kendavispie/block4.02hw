import "./shows.css";
import EpisodeDetails from "../episodes/EpisodeDetails";
import EpisodeList from "../episodes/EpisodeList"
import { useState } from "react";
/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  console.log("show details", show)
   const [selectedEpisode, setSelectedEpisode] = useState(null);

     if (!show) {
        return (
        <h2>Select show to preview details</h2>
        );
     }

    
      return(
     <div className="show-details">
      <EpisodeList 
      name={show.name}
      episodes={show.episodes}
      selectedEpisode={selectedEpisode}
      setSelectedEpisode={setSelectedEpisode}
      />

      <EpisodeDetails
      episode={selectedEpisode}
      />
  </div>
     );

     
}