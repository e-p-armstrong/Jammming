import React from 'react'
import './Track.css'

export class Track extends React.Component{
    
    constructor(props){
        super(props)
        this.addTrack = this.addTrack.bind(this)
        this.removeTrack = this.removeTrack.bind(this)
    }

    renderAction(){
        return (this.props.isRemoval ? <button className='Track-action' onClick={this.removeTrack}>-</button> : <button className='Track-action' onClick={this.addTrack}>+</button>)
        // return (this.props.isRemoval ? '-' : '+')
    }

    addTrack(){
        this.props.onAdd({
            name: this.props.name,
            artist: this.props.artist,
            album: this.props.album,
            id: this.props.id,
            uri: this.props.uri
        })
    }

    removeTrack(){
        this.props.onRemove({
            name: this.props.name,
            artist: this.props.artist,
            album: this.props.album,
            id: this.props.id,
            uri: this.props.uri
        })
    }

    render(){
        return(
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.name}</h3> 
                    {/* ^ Track name goes there */}
                    <p>{this.props.artist} | {this.props.album}</p>
                    {/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
                </div>
            {/* <button className="Track-action" onClick={this.addTrack}>{this.renderAction()}</button> */}
            {this.renderAction()}
            </div>
        )
    }
}

// function Track (props){
//  return(
//     <div class="Track">
//     <div class="Track-information">
//         <h3>{props.name}</h3> 
//         {/* ^ Track name goes there */}
//         {/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
//     </div>
//     <button class="Track-action"><!-- + or - will go here --></button>
//     </div>

//  );

// }