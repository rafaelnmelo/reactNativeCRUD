import React from "react"
import { View, FlatList, Text } from "react-native"
import users from "../data/users"
import { ListItem } from '@rneui/themed'

export default props => {
    console.warn(Object.keys(props))

    function getUserItem({ item: user }) {
        return (
            <ListItem
                leftAvatar={{source: {uri: user.avatarUrl}}}
                key={user.id}
                title={user.name}
                subtitle={user.email}
                bottomDivider
            />
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}