import React, { Component } from 'react'
import logo from './snow.png'
import logo1 from './cloudy.png'
import logo2 from './sunny.jpg'
class Fetchapi extends React.Component {
   

    constructor() {
        super()
        this.state = {

            temp: '',
  

        };
        this.fetchData = this.fetchData.bind(this);
        
    }
    


    componentWillMount () {
        this.setState.changeDeaths='2000';
        
        this.fetchData()
    }


    fetchData() {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Halifax,ca&APPID=b25702b2a13d5cefa60ea9ea82811534')
        .then(response => {
          if(response.ok) return response.json();
          throw new Error('Request failed.');
        })
        .then(data => {
          this.setState(({temp:parseInt(data['main']['temp'])-273}));
        })
        .catch(error => {
          console.log(error);
        });
 
    }

    render() {
        return (
            <div className="MyTown">
 
                <p><b>Halifax Temprature is: </b>{this.state.temp} °C</p>
                {

                (this.state.temp) <= 10 ?
          <img alt="Snow" width={125} src={logo}  />
          :
          (this.state.temp >= 10) | parseInt(this.state.temp <= 20) ?
          <img alt="Cloudy" width={125} src={logo1}/>
          :
          <img alt="Sunny" width={125} src={logo2}/>
                } 
            </div>

        )
    }
}
export default Fetchapi;