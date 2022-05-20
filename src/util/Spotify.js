let accessToken;
const client_id = 'f1d785a13a08404e91b6372989a9f2eb';
// const redirect_uri = 'http://localhost:3000';
const redirect_uri = 'http://EvanCanIntoReact.surge.sh'

const baseAddress = "https://api.spotify.com";

let Spotify = {
    getAccessToken(){
        if (accessToken){
            console.log("First conditional fired and returned (accessToken already exists apparently)", accessToken)
            return accessToken;
        } else if (window.location.href.match(/access_token=([^&]*)/)){ //SHOULD fire if the access token is in the url
            let url = window.location.href
            accessToken = url.match(/access_token=([^&]*)/)[1];
            // console.log("this is the access token after assignment in Spotify.js",accessToken)
            const expiresIn = Number(url.match(/expires_in=([^&]*)/)[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            //Remove info from url (custom and experimental)
            // const cuttingPoint = url.indexOf('#')
            // url = url.substring(0,cuttingPoint)
            // url = url.match((/[^#]*/i)[0]) //Experimental: clears parameters from url using a stackoverflow-copypasted regex https://stackoverflow.com/questions/8584697/javascript-regular-expression-match-anything-up-until-something-if-there-it-ex
            // console.log("Second conditional, accesToken at the end",accessToken)
            return accessToken;
            // console.log("Second conditional fired and reached its end (accessToken acquired from url, hopefully)", accessToken)
        } else if (!accessToken){
            window.location = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_uri}`

        }
        //The thing above is *so* going to explode, I can feel it, and I hate it.
        //No longer explodes! I think... 
        
        
        
        // let scope = 'user-read-private user-read-email';

        // let url = 'https://accounts.spotify.com/authorize';
        // url += '?response_type=token';
        // url += '&client_id=' + encodeURIComponent(client_id);
        // url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
        // fetch(url).then((response)=>{

        // })
    },
    search(term){
        const AT = Spotify.getAccessToken();
        console.log("AT in search:",AT);
        let simplifiedTrackArr;
        return (fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,{
            headers: { Authorization: `Bearer ${AT}`}
        })
        .then((response) =>{
            console.log("This is the response",response)
            if(response.ok){
                console.log(response)
                return (response.json())
            } else{
                console.log(response.status,"request failed")
            }
        }).then(JSONresponse => {
            console.log("JSONresponse is:",JSONresponse)
            const tracksArr = JSONresponse.tracks.items;
            console.log("tracksArr is:",tracksArr)
            simplifiedTrackArr = tracksArr.map((track)=>{
                console.log("Now simplifying", track)
                const simpleTrack = {
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                };
                // console.log("simpleTrack:", simpleTrack)
                return simpleTrack;
            })
            console.log("first simplified track arr",simplifiedTrackArr)
            return(simplifiedTrackArr)
        })   )
        // console.log("this is the simplifiedTrackArr",simplifiedTrackArr)
        // return simplifiedTrackArr;
    },

    savePlaylist(PLname, trackUriArray){
        const pln = PLname;
        const tua = trackUriArray; //Don't want to have to type it all out
        console.log("Started to save playlist")
        if (!(pln && tua)){
            console.log("first if fired, because pln and tua are not both present",pln,tua)
            return;
        }
        const AT      = Spotify.getAccessToken();
        const headersVar = { Authorization: `Bearer ${accessToken}`};
        let userID;
        let playlistID;
        fetch(baseAddress+"/v1/me",{
            headers: headersVar
        }).then(response => {
            return(response.json())
        }).then((readableResponse)=>{
            console.log("What should be a readable response",readableResponse)
            userID = readableResponse.id;
            console.log("What should be a userID",userID)
        }).then(()=>{ //This was added recently
            fetch(baseAddress+`/v1/users/${userID}/playlists`,{
                headers: headersVar,
                method: 'POST',
                body: JSON.stringify({
                    name: pln,
                })
            }).then(response => {
                console.log("What should also be a userID",userID)
                console.log("playlist?",response)
                return response.json()
            }).then((JSONresponse)=>{
                console.log(JSONresponse)
                console.log("playlistID?",JSONresponse.id)
                playlistID = JSONresponse.id;
            }).then(()=>{
                fetch(baseAddress+`/v1/playlists/${playlistID}/tracks`, {
                    method: 'POST',
                    headers: headersVar,
                    body: JSON.stringify({
                        "uris": trackUriArray,
                        "position": 0
                    })
                })
            })
        })
        
        console.log("reached the end of savePlaylist without issue")
    }
}



export {Spotify}