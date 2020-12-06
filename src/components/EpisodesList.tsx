import * as React from "react";
import {IEpisode} from "../interfaces";

function EpisodesList(props:any):JSX.Element {

    const {episodes, toggleFavAction, favourites, store} = props;
    const {state, dispatch} = store;

    return episodes.map((episode: IEpisode) => {
            return <section key={episode.id} className="episode_box">
                <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`}/>
                <section className="episode_info">
                    <div>
                        <div>{episode.name}</div>
                        Season: {episode.season} Episode: {episode.number}
                    </div>
                    <button type="button" onClick={() => toggleFavAction(state, dispatch, episode)}>
                        {favourites.includes(episode) ? "Remove from Fav" : "Add to Fav"}
                    </button>
                </section>
            </section>
        })
}

export default EpisodesList