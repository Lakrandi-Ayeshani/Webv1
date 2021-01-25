import React, {Component} from "react";
import Counter from "./Counter";
import logo from './logo.svg';
import './App.css';
import Profile from "./Profile";
import { render } from "@testing-library/react";

const employeeDirectory = [
  {name: "Chathura Prabashwara",
  position: "CEO",
  id: "1"},

  {name: "Willson Uncle",
  position: "Manager",
  id: "2"}, 

  {name: "Lakrandi Ayeshani",
  position: "Happy Developer",
  id: "3"}
  
]

class App extends Component {
  constructor(props){
    super(props);
      this.state ={
        employees : employeeDirectory
  } 
}
  render(){
  return (
    <div className="App">
      <h2>This is our second header</h2>
      <h1>This is the blank state we are working on...</h1>
      <Counter></Counter> <br></br>
      {
        this.state.employees.map(employee =>{
          //console.log(employee);
          return(
            <div style ={{backgroundColor: "yellow"}}>
              <Profile
              key={employee.id}
              id={ employee.id}
              name={employee.name}
              position={employee.position}
              />
            </div>
          )
        })
      }
    </div>
  );}
}

export default App;
