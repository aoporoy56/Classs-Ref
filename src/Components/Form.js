import React, { Component, createRef } from 'react'

export default class Form extends Component {

    constructor(props) {
      super(props)
      this.usernameRef = createRef();
      this.state = {
        array : []
      }
      
    }
    
    submit = (e) =>{
        e.preventDefault();
        this.setState({
          array : [...this.state.array,this.usernameRef.current.value]
        })
        this.usernameRef.current.value='';
    }
  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
            <input type="text" ref={this.usernameRef} name="username" required autoFocus/>
            <button type='submit'>Click</button>
            {
              this.state.array.map((data,index)=> <h4 key={index}>{data}</h4>)
            }
        </form>
      </div>
    )
  }
}
