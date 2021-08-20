import React, { Component } from 'react'
import axios from 'axios';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

      bookings:[]
      
    };
  }
componentDidMount(){


this.retrieveBookings();
}


retrieveBookings(){
  axios.get("http://localhost:8015/booking").then(res=>{

  if(res.data.success){
    this.setState({
      bookings:res.data.existingBookings
    });
    console.log(this.state.bookings);
  }
  });
}





  render() {
    return (
      <div>
        {this.state.bookings.map(bookings=>(

          <div>
            <p>
              {bookings.CustomerName}
            </p>
            <p>
              {bookings.CustomerEmail}
            </p>
            <p>
              {bookings.MobileNumber}
            </p>
            <p>
              {bookings.TourOption}
            </p>
            <p>
              {bookings.Date}

            </p>
            <p>
              {bookings.Time}

            </p>
            <p>
              {bookings.TourGuideName}

            </p>


          </div>

        ))}


      </div>
    )
  }
}

export default App