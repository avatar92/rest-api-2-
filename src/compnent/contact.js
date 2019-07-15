import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        console.log('state',this.props.AddReducer) 
        return (
            <div className='contactContainer'>  
                <h1>Contact App</h1>
                <Link to='/add_contact'><button>Add contact</button></Link>
                <Link to='/contact_list'><button>contact List</button></Link>
                <h1>this the contact page</h1>                
                <div>
                        {this.props.AddReducer.map((el)=><div key={el.id} className='contactstylecontainer'>
                            <h1>Contact name : {el.name}</h1>
                            <h3>Contact name : {el.phone}</h3>
                            <h3>Contact name : {el.email}</h3>
                            <Link to={`/modify/${ el.id }`}><button>modify</button></Link>
                            <button onClick={()=>{this.props.delete(el.id)
                                                    console.log(el.id)}}>delete</button>
                        </div>)}
                </div>
            </div>

        );
    }
}
const mapStateToProps=(state)=>{
        return{
            AddReducer:state.AddReducer
}
} 
const mapDispatchToProps = dispatch =>{
    return{
        delete:(x)=>{
            dispatch({
                type:'DELETE', 
                id:x
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Contact);