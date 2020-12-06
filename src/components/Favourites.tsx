import * as React from "react";
import {Store} from "../redux/Store";
import {IEpisodesProps} from "../interfaces";
import {toggleFavAction} from "../redux/actions";

const EpisodesList = React.lazy<any>(() => import('./EpisodesList'));

export default function Favourites():JSX.Element {
    const {state, dispatch} = React.useContext(Store);

    const props: IEpisodesProps = {
        episodes: state.favourites,
        store: {state, dispatch},
        toggleFavAction,
        favourites: state.favourites
    };

    return (
        <React.Suspense fallback="loading...">
            <div className="episodes_layout">
                <EpisodesList {...props} />
            </div>
        </React.Suspense>
    )
}