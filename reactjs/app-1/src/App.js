import React,{Component} from 'react'
import NameFrom from "./components/NameFrom.js"
import Form2 from './components/Form2.js'

//组件
class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <NameFrom />

        <hr/>

        <Form2/>
      </div>
    )
  }
}

export default App;
