import { RECEIVE_USERS } from '../actions/users'
import { USER_ADD_QUESTION, USER_ANSWER_QUESTION } from '../actions/questions'

export default function users (state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS : 
            return {
                ...state,
                ...action.users
            }
        case USER_ADD_QUESTION : 
        const qid  = action.id
        const authedUser = action.authedUser
        return {
            ...state,
            [authedUser] : {
                ...state[authedUser],
                questions : [...state[authedUser].questions, qid]
            }
        }
        case USER_ANSWER_QUESTION : 
        const { answer } = action
        return {
            ...state,
            [authedUser] : {
                ...state[authedUser],
                answers : {
                    ...users[authedUser].answers,
                    [qid]: answer
                }
            }
        }
        default : 
            return state
    }
}