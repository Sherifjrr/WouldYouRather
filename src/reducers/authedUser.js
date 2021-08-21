import { AUTHED_USER , REMOVE_AUTHED_USER} from '../actions/authedUser' 

export default function authedUser (state = null, action) {
    switch(action.type){
        case AUTHED_USER : {
            return action.id 
        }
        case REMOVE_AUTHED_USER : {
            return null
        }
        default : return state
    }
}