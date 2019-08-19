import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
const CircleButton = ({ onPress, children }) => {
    return (
        <TouchableOpacity style={{
            height: 25, 
            width: 25, 
            borderRadius: 15, 
            borderWidth: 1, 
            alignItems: 'center', 
            justifyContent: 'center',
            margin:15
        }} 
        onPress={onPress }>
        <Text style={{
            alignSelf: 'center',
            color: '#000',
            fontSize: 18,
            fontWeight:'bold'
            }}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}
export default CircleButton;