import React ,{ Component } from 'react'
import {View , TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import {ColorAction} from '../Redux/actions'

class RadioButton extends Component{

    changeColor(headphone_color){
        this.props.ColorAction(headphone_color)
    }
    render(){
        return(
            <View style = {{flexDirection:'row' }}>
{this.props.colorOptions.map(item => {
        return (
            <View key={item}>
                <TouchableOpacity style={{
                    height: 25, 
                    width: 25, 
                    borderRadius: 15, 
                    borderWidth: 1, 
                    borderColor: item, 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    margin:15
                }} 
                onPress={()=>{ this.changeColor(item) }}>
                { this.props.colorValue === item && (
                <View style={{width: 14, height: 14, borderRadius: 7, backgroundColor: item}} />
                ) }
                </TouchableOpacity>
            </View>
        );
    })}
    </View>
        )
}


}
const mapStateToProps = state => {
    return{
        colorValue : state.product.headphoneColor,
        colorOptions : state.product.colorOptions
    }
}
export default connect (mapStateToProps , {ColorAction}) (RadioButton)