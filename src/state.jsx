import React,{Component} from 'react';

// import './App.css';

class State extends Component {

  constructor(){

    super();
    this.state={
        displayInfo: false

    }
    console.log("From constructor", this)
  }



  render(){

    let info=-this.state
    console.log("   From Component")
    return (
      <div className="App">
        <header className="App-header">
        
         <p>Full Stack Development(MEAN,MERN,Spring)</p>
         <p>ReactJS,Angular,Vue JS, ExtJS</p>
        
      </header>
      </div>
    );
  }

}

export default State;
