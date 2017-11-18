
import React,{Component} from 'react'

//引入 Welcom 组件
import Welcome from './components/Welcome.js'

import Hello from './components/hello.js'

/*
App1:使用了Welcom组件，并且通过props给Welcome传递了参数
Welcome:使用了Hello组件，并且通过props给Hello传递了参数

App1 ----> Welcome ------>  Hello
*/

//App1实例化后就是组件
class App1 extends Component {
  render(){
    const obj = {
      city:'xxx',
      street:'yyy'
    }

    return (
      <div>
      {/*
        使用Welcome组件，并且给该组件传递参数，参数都会传递给该组件的props
        App1 是福组件，Welcome是子组件，数据由父组件传递给子组件，成为react的单项数据流
        其中city,street都属于props中的键值对
        */}
        <Welcome city={obj.city} street={obj.street}/>
        <Hello color="green" fontSize="100px" />
      </div>
    )

  }
}

export default App1;
