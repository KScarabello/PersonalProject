import React, {Component} from 'react';
import EventDetails from './EventDetails';
import axios from 'axios';





export default class DisplayEvent extends Component{
    constructor(){
        super()

        this.state = {
            events: []


        }




    }    

    // componentDidMount(){
    //     axios.get('http://localhost:3001/api/event/' + )
    //         .then(response => {
    //             this.setState({
    //                 events: response.data
    //             })
            
    //         })
    // }
  render(){
    
    let eventInfo = this.state.events.map((e,i) => {
        return(
            <div key={i}>
                title: {e.title}
                <br/>   
                description: {e.description}
            </div>
        )
    
    })


    // let eventInfo = JSON.stringify(this.state.events)


        return(
            <div>
                {/* <EventDetails details={JSON.stringify(this.state.events)} /> */}
                {eventInfo}


            </div>

        )

    }


}