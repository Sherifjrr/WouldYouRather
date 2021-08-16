import { getData } from '../utils/api' 
import { receiveUsers } from './users' 
import { receiveQuestions } from './questions'

export function handleData() {
    return (dispatch) => {
        return  getData()
        .then(({ users, questions }) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
        })
    }
}