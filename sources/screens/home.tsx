import React from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity } from 'react-native'

import { StackNavigationProp } from '@react-navigation/stack'

import NavigationType from '../global-types/navigation'

type PropsType = {
    navigation: StackNavigationProp<NavigationType, 'Home'>
}

export default (props: PropsType) => {
    const { navigation } = props

    const fruits = [
        {
            id: 0,
            name: 'Apple',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/199px-Red_Apple.jpg'
        },
        {
            id: 1,
            name: 'Banana',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/220px-Bananas_white_background_DS.jpg'
        },
        {
            id: 2,
            name: 'Blueberry',
            image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/PattsBlueberries.jpg'
        },
        {
            id: 3,
            name: 'Cherry',
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Cherry_Stella444.jpg'
        },
        {
            id: 4,
            name: 'Grape',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Grapes_in_the_Philippines_1.jpg/270px-Grapes_in_the_Philippines_1.jpg'
        },
        {
            id: 5,
            name: 'Mango',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Mango_4.jpg/220px-Mango_4.jpg'
        },
        {
            id: 6,
            name: 'Strawberry',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single.jpg/1200px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single.jpg'
        }
    ]

    return (
        <SafeAreaView
            style = {{
                flex: 1
            }}
        >
            <ScrollView>
                {
                    fruits.map(fruit => {
                        return (
                            <TouchableOpacity
                                key = {fruit.id}
                                onPress = {() => {
                                    navigation.navigate('Detail', {
                                        id: fruit.id,
                                        name: fruit.name,
                                        image: fruit.image
                                    })
                                }}
                                style = {{
                                    backgroundColor: 'rgb(250, 250, 250)',
                                    borderBottomWidth: 1,
                                    borderColor: 'lightgray',
                                    padding: 20
                                }}
                            >
                                <Text>
                                    {fruit.name}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView>
    )
}