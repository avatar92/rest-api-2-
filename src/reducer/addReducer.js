const AddReducer = (state=[{id:Math.random(),name:'asma',phone:'07456844658',email:'asma@gmail.com'}],action)=>{
    switch (action.type){
        case 'ADD': 
            return [...state,
                    action.newcontact
                    ];
        case 'DELETE': 
            return state.filter(el=>el.id!==action.id)
        case 'MODIFY': 
            return state.map(el=>el.id===action.modifiedcontact.id?el=action.modifiedcontact:el)
        default :
            return state; 
    }
}



export default AddReducer