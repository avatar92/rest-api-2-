import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
class Modifycontact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                name:'',
                phone:'',
                email:''
        }
    }
    render() { 
        console.log(this.props.AddReducer,this.props.id,Number(this.props.id))
        console.log(this.props.AddReducer.filter(el =>el.id===Number(this.props.id))[0].name)
        return ( 
            <div className='contactAdder'>  
            <h1>Add Contact page</h1>
            <p>Name:</p>
            <input type='text' defaultValue={this.props.AddReducer.filter(el =>el.id===Number(this.props.id))[0].name} id='myNameInput' onChange={(e)=>this.setState({
                name:e.target.value
            })}/>
            <p>Phone Number:</p>
            <input type='number' defaultValue={this.props.AddReducer.filter(el =>el.id===Number(this.props.id))[0].phone} placeholder='Phone Number' id='myPhoneInput' onChange={(e)=>this.setState({
                phone:e.target.value
            })} />
            <p>Contact mail:</p>
            <input type='email' defaultValue={this.props.AddReducer.filter(el =>el.id===Number(this.props.id))[0].email} placeholder='example@gmail.com' id='myEmailInput' onChange={(e)=>this.setState({
                email:e.target.value
            })}/>
            <hr/>
            <Link to='/Contact'><button onClick={()=>this.props.modifyContact(Number(this.props.id),this.state.name,this.state.phone,this.state.email)}>modify contact</button></Link>
        </div>
        );
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        modifyContact:(id,newname,newphone,newemail)=>{
            dispatch({
            type:'MODIFY',
            modifiedcontact:{
                id:id, 
                name:newname, 
                phone:newphone,
                email:newemail
            }
        })}
    }
}
const mapStateToProps=(state)=>{
    return{
        AddReducer:state.AddReducer
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Modifycontact);
