import {Track} from '../Track/Track.jsx'

export function Tracklist (props){
    // console.log("props",props)
    // console.log("props.tracks",props.tracks)
    const trackList = props.tracks;
    // console.log("tracklist", trackList)
    console.log("<Tracklist /> list of tracks",trackList)
    return (
        <div className="TrackList">
            {/*     <!-- You will add a map method that renders a set of Track components  --> */}
            {trackList.map((trackObj)=>{
                // console.log(trackObj.id)
                return <Track key={trackObj.id} name={trackObj.name} artist={trackObj.artist} album={trackObj.album} id={trackObj.id} uri={trackObj.uri} onAdd={props.onAdd} onRemove={props.onRemove} isRemoval={props.isRemoval}/>
            })}
        </div>
    );
}