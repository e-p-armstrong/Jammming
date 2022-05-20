import {Tracklist} from '../Tracklist/Tracklist.jsx'
import './Playlist.css'

export function Playlist(props){
    console.log("props.playlist.tracks",props.tracks)
    function handleChange(event){
        console.log("handleChange fired, event target:",event.target)
        console.log("event target value:",event.target.value)
        props.onNameChange(event.target.value)

    }
    return (
        <div className="Playlist">
            <input defaultValue={"New Playlist"} onChange={handleChange}/>
            <Tracklist tracks={props.tracks} onRemove={props.onRemove} isRemoval={true}/>
            <button className="Playlist-save" onClick={props.onSave}>SAVE TO SPOTIFY</button>
        </div>
    );
}