import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'

import { RouteProp } from '@react-navigation/native'

import NavigationType from '../global-types/navigation'

type PropsType = {
    route: RouteProp<NavigationType, 'Detail'>
}

export default (props: PropsType) => {
    const { route } = props

    return (
        <SafeAreaView
            style = {{
                alignItems: 'center',
                flex: 1,
                justifyContent: 'center'
            }}
        >
            <Image
                resizeMode = 'contain'
                source = {{uri: route.params.image}}
                style = {{
                    height: 200,
                    width: 200
                }}
            />

            <Text
                style = {{
                    fontSize: 20,
                    marginTop: 20
                }}
            >
                {route.params.name}
            </Text>
        </SafeAreaView>
    )
}