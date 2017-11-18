import React from 'react'

class Child extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
      <button onClick={this.props.incValue}>点击修改父组件中的数据</button>
      </div>
    )
  }
}

export default Child
