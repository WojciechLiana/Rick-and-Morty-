import * as React from "react";
import {Store} from "../redux/Store";
import {IEpisodesProps} from "../interfaces";
import {fetchDataAction, toggleFavAction} from "../redux/actions";

const EpisodesList = React.lazy<any>(() => import('./EpisodesList'));

export default function Home():JSX.Element {
    const {state, dispatch} = React.useContext(Store);

    React.useEffect(() => {
        state.episodes.length === 0 && fetchDataAction(dispatch)
    });

    const props: IEpisodesProps = {
        episodes: state.episodes,
        store: {state, dispatch},
        toggleFavAction,
        favourites: state.favourites
    };

    return (
        <React.Fragment>
            <React.Suspense fallback="loading...">
                <div className="episodes_layout">
                    <EpisodesList {...props} />
                </div>
            </React.Suspense>
        </React.Fragment>
    );
}