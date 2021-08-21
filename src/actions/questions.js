import {saveQuestion, saveQuestionAnswer} from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const USER_ANSWER_QUESTION = 'USER_ANSWER_QUESTION'
export const USER_ADD_QUESTION = 'USER_ADD_QUESTION'

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function addQuestion (questions) {
    return {
        type: ADD_QUESTION,
        questions,
    }
}

export function answerQuestion ({authedUser, qid, answer}) {
    return {
        type: ANSWER_QUESTION,
        authedUser, 
        qid, 
        answer
    }
}

export function userAddQuestion ({authedUser, qid}) {
    return {
        type: USER_ADD_QUESTION,
        authedUser, 
        qid, 
    }
}

export function userAnswerQuestion ({authedUser, qid, answer}) {
    return {
        type: USER_ANSWER_QUESTION,
        authedUser, 
        qid, 
        answer
    }
}

export function handleAddQuestion ({optionOneText, optionTwoText, author}) {
    return (dispatch) => {
        return saveQuestion({optionOneText, optionTwoText, author}).then((question) => {
                dispatch(userAddQuestion({ authedUser : author , qid : question.qid }))
                dispatch(addQuestion(question))
            }
        )
    }
}

export function handleAnswerQuestion ({authedUser, qid, answer}) {
    return (dispatch) => {
        return saveQuestionAnswer({authedUser, qid, answer}).then(() => {
            dispatch(answerQuestion({authedUser, qid, answer}))
            dispatch(userAddQuestion({authedUser, qid, answer}))
        })
        
    }
}


