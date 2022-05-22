
import './App.css';
import {Playlist} from '../Playlist/Playlist.jsx'
import {SearchBar} from '../SearchBar/SearchBar.jsx'
import {SearchResults} from '../SearchResults/SearchResults.jsx'
import React from 'react'
import {Spotify} from '../../util/Spotify'
//Maybe more imports idk if playlist and tracklist are the same

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      searchResults: [
        {name: "Tehkria suckz!", artist: "The Bitter Nahmatiixers", album: "A-M0ve!", id: 666},
        {name: "WE ARE SPACE IRELAND AND QUEBEC!", artist: "The Kool Kalithiharians", album: "Sorry Dave", id: 456},
        {name: "Photon's Termination -requiem-", artist: "The Prime Admiral", album: "Regret, regret, regret", id: 1048596}
      ],
      playlistName: "New Playlist",
      playlistTracks: [{name: "GATE OF STEINER -Piano-", artist: "Takeshi Abo", album: "STEINS;GATE Original Soundtrack", id: "1EyeHLX96JGGiF2l4tRvJR", uri: "spotify:track:1EyeHLX96JGGiF2l4tRvJR"}]
    }
    this.addTrack           = this.addTrack.bind(this)
    this.removeTrack        = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist       = this.savePlaylist.bind(this)
    this.search             = this.search.bind(this)
  }

  addTrack(track){
    console.log("addTrack ran its first bit",track)
    // let trackIsUnique;
    const PLT = this.state.playlistTracks
    for (let i = 0; i < PLT.length; i += 1){
      console.log(`For loop ran, with i: ${i}, plt element: ${PLT[i]}, and track: ${track}`)
      if (PLT[i].id === track.id){
        // trackIsUnique = false;
        console.log(`playlistTracks[i].id (${PLT[i].id}) is equal to track.id (${track.id}), apparently. This song was not added.`)
        return;
      }
    }
    const newPLT = this.state.playlistTracks.concat([track]);
    console.log("New plt is:", newPLT);
    this.setState({playlistTracks: newPLT})
  }

  removeTrack(track){
    const newPlaylistTracksArr = this.state.playlistTracks.filter((obj) =>{
      return !(obj.id === track.id)
    });
    this.setState({playlistTracks: newPlaylistTracksArr});
  }

  updatePlaylistName(newName){
    this.setState({playlistName : newName});
  }

  savePlaylist(){
    const PLT = this.state.playlistTracks;
    console.log("PLT",PLT)
    const uriArr = [];
    PLT.map((track)=>{
      uriArr.push(track.uri)
    });
    console.log("uriArr",uriArr)
    Spotify.savePlaylist(this.state.playlistName,uriArr)
  }

  search(term){
    console.log("Search fired");
    console.log(term);
    Spotify.search(term).then((result)=>{
      console.log("This was the search result array",result)
      const filteredResult = result.filter(track =>{ //Compares each track in the search result to every track in the playlist. If the track is in the playlist, it is filtered out of the search results.
        let isInPlaylist = false;
        this.state.playlistTracks.forEach(playlistTrack =>{
          if(track.id === playlistTrack.id){
            isInPlaylist = true;
          }
        });
        return !(isInPlaylist);
      })
      this.setState({searchResults : filteredResult})  
    });
    

  }

  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            {/* <!-- Add a SearchBar component --> */}
            <SearchBar onSearch={this.search}/>
            <div className="App-playlist">
              {/* <!-- Add a SearchResults component --> */}
              <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
              {/* <!-- Add a Playlist component --> */}
              <Playlist name={this.state.playlistName} tracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
}

// function App(props) {
//   useEffect(()=> {
//     let [searchResults, updateSearchResults] = useState(undefined)
//   }, [])
//   return (
//     <div>
//     <h1>Ja<span className="highlight">mmm</span>ing</h1>
//     <div className="App">
//       {/* <!-- Add a SearchBar component --> */}
//       <SearchBar />
//       <div className="App-playlist">
//         {/* <!-- Add a SearchResults component --> */}
//         <SearchResults />
//         {/* <!-- Add a Playlist component --> */}
//         <Playlist />
//       </div>
//     </div>
//   </div>
//   );
// }

export default App;
