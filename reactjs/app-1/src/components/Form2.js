import React,{Component} from 'react'

class Form2 extends Component {
  constructor(props){
    super(props)
    this.state = {
      isGoing:true,
      numberOfGuests:2
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    let elem = event.target;//input的dom对象
    let name = elem.name;//isGoing or numberOfGuests

    //根据不同的input类型区分如何获得值
    let value = elem.value === "checkbox" ? elem.checked : elem.value;

  //   if (elem.type === 'checkbox'){
  //     this.setState({isGoing:value});
  //   } else {
  //     this.setState({numberOfguests:value});
  //   }
  // }

  render(){
    return(
      <div>
        <h1>复选框的状态为：{this.state.isGoing ? "选中" : "没选中"}，输入框的值为：{this.state.numberOfGuests}</h1>

        <form>
          <input
          name="isGoing"
          tyep="checkbox"
          checked={this.state.isGoing}
          onChange={this.handleInputChange}
          /><br/>
          <input
          name="numberOfGuests"
          type="number"
          value={this.state.numberOfGuests}
          onChange={this.handleInputChange}
          /><br/>
        </form>

      </div>
    )
  }

}

export default Form2
