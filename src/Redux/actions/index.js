import {HeadphoneColor ,  ProductQuantity} from './Types'

export const ColorAction = (headphoneColor) => {
    return{
        type: HeadphoneColor,
        payload: headphoneColor
    }
}

export const QuantityAction = (productQuantity) =>{
    return {
        type : ProductQuantity,
        payload : productQuantity
    }
}
