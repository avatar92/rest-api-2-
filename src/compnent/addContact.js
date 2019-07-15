import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
class Addcontact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                name:'',
                phone:'',
                email:''
        }
    }
    render() { 
        return ( 
            <div className='contactAdder'>  
            <h1>Add Contact page</h1>
            <p>Name:</p>
            <input type='text' placeholder='Name' id='myNameInput' onChange={(e)=>this.setState({
                name:e.target.value
            })}/>
            <p>Phone Number:</p>
            <input type='number' placeholder='Phone Number' id='myPhoneInput' onChange={(e)=>this.setState({
                phone:e.target.value
            })} />
            <p>Contact mail:</p>
            <input type='email' placeholder='example@gmail.com' id='myEmailInput' onChange={(e)=>this.setState({
                email:e.target.value
            })}/>
            <hr/>
            <Link to='/Contact'><button onClick={()=>this.props.addContact(this.state.name,this.state.phone,this.state.email)}>Add Contact</button></Link>
        </div>
        );
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        addContact:(newname,newphone,newemail)=>{
            dispatch({
            type:'ADD',
            newcontact:{
                id:Math.random(), 
                name:newname, 
                phone:newphone,
                email:newemail
            }
        })}
    }
}
export default connect(null,mapDispatchToProps)(Addcontact);
