import React from 'react'

class Clock extends React.Component{
    state ={Date : new Date()}

    componentDidMount(){
        this.timer = setInterval(()=>(
           this.setState({Date: new Date()})
        ),1000) 
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render(){
        return(
           <h1 className='text-2xl ml-2 mt-4'>The current Time is : {new Date().toLocaleTimeString(this.props.time)}</h1>
        )
    }
}

export default Clock;