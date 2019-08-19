import {HeadphoneColor , ProductQuantity} from '../actions/Types'

const INITIAL_STATE = {
    headphoneColor:'black',
    colorOptions:['black','lightgray','red'],
    productQuantity : 1
}
export default (state = INITIAL_STATE , action) => {
    switch (action.type){
        case HeadphoneColor :
        return { ...state , headphoneColor:action.payload }
        case ProductQuantity :
        return { ...state , productQuantity:action.payload}
        default : 
        return state
    }
}