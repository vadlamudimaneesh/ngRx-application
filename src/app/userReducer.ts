let userInitialState = {
    user : {
        name : 'Maneesh',
        email : 'maneesh.vadlamudi@deliverycentric.com',
        mobile : '+91 12345 67890'
    }
}

export function userReducer(state = userInitialState, action:any){
    switch(action.type) {
        case 'user-edit' : 
            console.log(action.payload)
            return {...state, user: action.payload}
        case 'email-edit' : 
            return {...state, user: action.payload}
        case 'mobile-edit' : 
            return {...state, user: action.payload}
        default :
            return state
    }
}