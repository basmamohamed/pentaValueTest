import React, { Component } from 'react'
import { View, Text, Animated, Dimensions, TouchableOpacity ,StatusBar } from 'react-native'
import RadioButton from './common/RadioButton';
import { connect } from 'react-redux';
import { QuantityAction } from './Redux/actions'
import CircleButton from './common/CircleButton'

let deviceHeight = Dimensions.get('window').height
let deviceWidth = Dimensions.get('window').width

class SingleProduct extends Component {
    constructor() {
        super()
        this.state = {
            SlideInLeft: new Animated.Value(0),
            ImageAnimation: new Animated.Value(0),
        }
    }

    componentDidMount() {
        Animated.parallel([
            Animated.timing(this.state.SlideInLeft, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }),
            Animated.timing(this.state.ImageAnimation, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }),
        ]).start()
    };

    Quantity(product_quantity) {
        this.props.QuantityAction(product_quantity)
    }

    render() {
        return (
            <View style={{ flex: 1,backgroundColor:'ghostwhite' }}>
            <StatusBar backgroundColor='ghostwhite'/>
                <Animated.Image
                    source={this.props.navigation.getParam('ProductImage')}
                    style={{
                        resizeMode:'cover',
                        flex: 3,
                        width: deviceWidth,
                        height: deviceHeight / 3,
                        transform: [
                            {
                                translateX: this.state.ImageAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-deviceWidth, 0]
                                })
                            },
                            {
                                translateY: this.state.ImageAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [deviceHeight, 0]
                                })
                            },
                        ]
                    }}
                />

                <Animated.View
                    style={{
                        transform: [
                            {
                                translateY: this.state.SlideInLeft.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [deviceHeight, 0]
                                })
                            }
                        ],
                        flex: 4,
                        borderRadius: 20,
                        marginTop:16,
                        backgroundColor:'white'
                    }}
                >
                    <View style={{ flex: 3, margin: 8 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 28, color: '#000', marginVertical: 10 }}>{this.props.navigation.getParam('ProductName')}</Text>
                        <Text style={{ color: '#BCB9B9', fontSize: 18, marginVertical: 10 }}>jlkdcnkdncjknlkjenwcjeckjncjsebcjebcdshcbdjbcskcmsncslcslmcdslcbdjcb djucbjb</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignContent: 'space-between', flex: 2, margin: 10 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#000' }}>Colors</Text>
                            <RadioButton />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#000', marginLeft: 10 }}>Quantity</Text>
                            <View style={{ flexDirection: 'row', marginLeft: 8 }}>
                                <CircleButton onPress={() => this.Quantity(this.props.productQuantity - 1)}>
                                    -
            </CircleButton>
                                <Text style={{ color: '#000', fontSize: 20, margin: 10, fontWeight: 'bold' }}>{this.props.productQuantity}</Text>
                                <CircleButton onPress={() => this.Quantity(this.props.productQuantity + 1)}>
                                    +
            </CircleButton>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'blue', borderTopLeftRadius: 50, borderTopRightRadius: 50,justifyContent:'center',alignItems:'space-around' }}>
                    
                        <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 40, marginRight: 20, width: 130, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: 'blue', fontSize: 20, fontWeight: 'bold' }}>Convert</Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </View>

        )
    }

}
const mapStateToProps = state => {
    return {
        productQuantity: state.product.productQuantity,
        productColor:state.product.headphoneColor
    }
}
export default connect(mapStateToProps, {  QuantityAction })(SingleProduct)