import { RECEIVE_QUESTIONS, ADD_QUESTION,  ANSWER_QUESTION} from '../actions/questions'

export default function questions (state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS : 
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION : 
            const { questions } = action
            return {
                ...state,
                [questions.id] : questions
            }
        case ANSWER_QUESTION :
            const { authedUser, qid , answer } = action
            const cuurentQuestion = state[qid][answer]
            return {
                ...state,
                [qid] : {
                    ...state[qid],
                    [answer] : {
                        ...cuurentQuestion,
                        votes: [...cuurentQuestion.votes, authedUser]
                    }
                }
            }

        default : 
            return state
    }
}