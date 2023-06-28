import { createAction, createReducer, on } from "@ngrx/store";

export const userReducer =createReducer({showUsers:true},
    
    on(createAction('[users] Toggle Users Code'), state=>{
        console.log('original state: '+ JSON.stringify(state))
        return{
            ...state,
            showUsers:!state.showUsers
        }
    })
    
    )
  