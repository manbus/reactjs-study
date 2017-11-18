import React,{Component} from 'react';
import If from "./components/If.js";
import Show from "./components/Show.js";
import Handle from './components/Handle.js';
import Parent from './components/Parent.js'

//组件
class App extends Component {
  constructor(props){
    super(props);

    //初始化 , this.state 初始化为任何类型的值
    this.state = {value:false,members:['张三',"李四",'王五','赵柳']}
  }

  changeColor = () => {
    //this.setState进行更新
    /*
    this.setState会和原来的state进行合并，没有修改的值保持鸳鸯
    this.setState 的更新属于异步操作
    this.setState 会将多次相同的操作进行合并(性能优化)
    */
    this.setState({value: !this.state.value});
  }

  addMember = () => {
    let oldMembers = this.state.members;
    oldMembers.push(Math.random() * 10000 + '');

    this.setState({members:oldMembers})
  }

  /*
  repact : props ,state
  props:用于父组件给子组件传递数据，属于单向数据流传递，props是属于父组件传递的，子组件只负责接收，子组件通常是无法修改props！！！
  state: state属于组件内部独有的状态值，通过this.state 进行初始化，this.setState是修改状态值(不能直接this.state = {value:false}).
  每次state的值发生变化，那么组件就会触发更新操作!!!
  */


  render(){
    return(
      <div>

      <button onClick={this.changeColor}>点击转换颜色</button>

      <button onClick={this.addMember}>点击添加成员</button>



      {/* 注意 {} */}
      <If test={this.state.value} />

      {/* 两个标签之间的内容，就是传递 Show的props.children */}
      <Show>Hello!!!!</Show>

      {/* Show , If 兄弟关系 */}
      <Show>Hello!!!!<If test={this.state.value} /></Show>

      {/* 通过state的变化来进行节点的更新吧！ */}

      <ul>
      {
        this.state.members.map((e,i) => {
          //key是为了调高react 对节点重新利用的效率
          return <li key={i}>{e}</li>
        })
      }
      </ul>

      <Handle />

      <Parent />

      </div>
    )
  }
}

export default App
