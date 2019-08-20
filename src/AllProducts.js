import React, { Component } from 'react'
import { View, FlatList, Image, Text, StatusBar, Dimensions ,ScrollView} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import NavigationService from './navigation/NavigationService'
import { TouchableOpacity } from 'react-native-gesture-handler';

let deviceHeight = Dimensions.get('window').height
let deviceWidth = Dimensions.get('window').width
export default class AllProducts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            dataSource: []
        }
    }
    /*  componentDidMount() {
          fetch( 'http://penta-test.com/knowledge_base/pentalibrary/public/api/cms', {
              method: 'POST',
              body: JSON.stringify({
                  "module_id" : 41,
                  "lang_id" : 2
              }),
              headers: {
                  'Content-Type': 'application/json'
              }
          }).then(res => res.json())
              .then(response => {
                  this.setState({
                      isLoading:false,
                      dataSource:response
                  });
                  console.log(this.state.dataSource)
              })
      }*/
    render() {
        return (
            <ScrollView style={{ flex: 1 ,backgroundColor:'ghostwhite' }}>
                <StatusBar backgroundColor='blue' />
                <View style={{ height: deviceHeight / 3, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 26, marginBottom: 8 }}>Integral mall</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'white', fontSize: 36, fontWeight: 'bold' }}>226.88</Text>
                        <Text style={{ color: 'white', marginTop: 16 }}>Integral</Text>
                    </View>
                    <View style={{ flexDirection: 'row', margin: 8 }}>
                        <Text style={{ backgroundColor: 'white', opacity: .3, fontSize: 20, color: 'white', fontWeight: 'bold', borderRadius: 8, padding: 8, marginRight: 40 }}>Record</Text>
                        <Text style={{ backgroundColor: 'white', opacity: .3, fontSize: 20, color: 'white', fontWeight: 'bold', borderRadius: 8, padding: 8 }}>Earn</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' ,backgroundColor:'white' , borderTopLeftRadius:20 ,borderTopRightRadius:20 ,position:'absolute',marginTop:deviceHeight/3.5 ,alignSelf:'center'}}>
                    <View style={{ margin: 16 ,alignItems:'center'}}>
                        <View style={{ height: 40, width: 40, borderRadius: 8, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
                            <AntDesign name='gift' size={20} color='white' />
                        </View>
                        <Text style={{marginTop:8}}>Draw</Text>
                    </View>
                    <View style={{ margin: 16 ,alignItems:'center'}}>
                        <View style={{ height: 40, width: 40, borderRadius: 8, backgroundColor: 'lightblue', alignItems: 'center', justifyContent: 'center' }}>
                            <FontAwesome5 name='fire-alt' size={20} color='white' />
                        </View>
                        <Text style={{marginTop:8}}>Quiz</Text>
                    </View>
                    <View style={{ margin: 16 ,alignItems:'center'}}>
                        <View style={{ height: 40, width: 40, borderRadius: 8, backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center' }}>
                            <FontAwesome5 name='lock' size={20} color='white' />
                        </View>
                        <Text style={{marginTop:8}}>Trade</Text>
                    </View>
                    <View style={{ margin: 16 ,alignItems:'center' }}>
                        <View style={{ height: 40, width: 40, borderRadius: 8, backgroundColor: 'darkorchid', alignItems: 'center', justifyContent: 'center' }}>
                            <FontAwesome5 name='user-plus' size={20} color='white' />
                        </View>
                        <Text style={{marginTop:8}}>Invite</Text>
                    </View>
                    <View style={{ margin: 16 ,alignItems:'center' }}>
                        <View style={{ height: 40, width: 40, borderRadius: 8, backgroundColor: 'mediumvioletred', alignItems: 'center', justifyContent: 'center' }}>
                            <AntDesign name='appstore1' size={20} color='white' />
                        </View>
                        <Text style={{marginTop:8}}>All</Text>
                    </View>
                </View>
                <View style={{marginTop:deviceHeight*0.12 ,marginHorizontal:20 , paddingVertical:10,flexDirection:'row' ,justifyContent:'space-around',backgroundColor:'white'}}>
                <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center' }}>
                            <FontAwesome5 name='fire-alt' size={20} color='white' />
                        </View>
                        <Text style={{fontSize:20}}>38 Points for successful...</Text>
                        <View style={{ height: 40, width: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <AntDesign name='arrowright' size={25} color='gray'/>
                        </View>
                </View >
                <View style={{marginTop:deviceHeight*0.06 ,flexDirection:'row' ,justifyContent:'space-between' ,marginHorizontal:20}}>
                <Text style={{fontSize:30 ,fontWeight:'bold'}}>Hot for</Text>
                <Text style={{color:'gray'}}>View all</Text>
                </View>
                <FlatList
                style={{marginTop:deviceHeight*0.03}}
                    data={[
                        {
                            image: require('./Images/mouse.png'),
                            name: 'Mouse',
                            id: 12
                        },
                        {
                            image: require('./Images/charger.png'),
                            name: 'Charger',
                            id: 8
                        },
                        {
                            image: require('./Images/laptop.png'),
                            name: 'Laptop',
                            id: 95
                        },
                        {
                            image: require('./Images/headphones.png'),
                            name: 'HeadPhones',
                            id: 15
                        },
                        {
                            image: require('./Images/mobile.png'),
                            name: 'Mobile',
                            id: 84
                        },
                        {
                            image: require('./Images/flash.png'),
                            name: 'Flash',
                            id: 70
                        },
                        {
                            image: require('./Images/mouse.png'),
                            name: 'Mouse',
                            id: 12
                        },
                        {
                            image: require('./Images/charger.png'),
                            name: 'Charger',
                            id: 8
                        },
                        {
                            image: require('./Images/laptop.png'),
                            name: 'Laptop',
                            id: 95
                        },
                        {
                            image: require('./Images/headphones.png'),
                            name: 'HeadPhones',
                            id: 15
                        },
                        {
                            image: require('./Images/mobile.png'),
                            name: 'Mobile',
                            id: 84
                        },
                        {
                            image: require('./Images/flash.png'),
                            name: 'Flash',
                            id: 70
                        },
                        {
                            image: require('./Images/mouse.png'),
                            name: 'Mouse',
                            id: 12
                        },
                        {
                            image: require('./Images/charger.png'),
                            name: 'Charger',
                            id: 8
                        },
                        {
                            image: require('./Images/laptop.png'),
                            name: 'Laptop',
                            id: 95
                        },
                        {
                            image: require('./Images/headphones.png'),
                            name: 'HeadPhones',
                            id: 15
                        },
                        {
                            image: require('./Images/mobile.png'),
                            name: 'Mobile',
                            id: 84
                        },
                        {
                            image: require('./Images/flash.png'),
                            name: 'Flash',
                            id: 70
                        }
                    ]}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ flex: 1, flexDirection: 'column', margin: 1, borderWidth: 1, borderRadius: 10, margin: 8,backgroundColor:'white',borderColor:'white' }}>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                                    <Text style={{ color: 'darkred' ,backgroundColor:'red',opacity:0.2 ,fontSize:16,fontWeight:'bold' }}>New</Text>
                                    <AntDesign name='heart' size={16} color='blue'/>
                                </View>
                                <TouchableOpacity onPress={() => NavigationService.navigate("SingleProduct", {
                                ProductImage: item.image,
                                ProductName: item.name,
                                ProductId: item.id
                            })} style={{justifyContent:'center' , alignItems:'center'}}>
                                <Image source={item.image} style={{ justifyContent: 'center', alignItems: 'center', height: 100, resizeMode: 'center' }} />
                                </TouchableOpacity>
                                <View style={{flexDirection:'row' ,justifyContent:'space-between' ,margin:10}}>
                                    <Text>{item.name}</Text>
                                    <View style={{flexDirection:'row'}}>
                                    <FontAwesome5 name='lightbulb' size={20} color='blue'/>
                                    <Text style={{marginLeft:10 ,fontSize:22 , fontWeight:'bold'}}>{item.id}</Text>
                                    </View>
                                </View>

                            </View>
                        )
                    }}
                    numColumns={2}
                />
            </ScrollView>
        )
    }

}