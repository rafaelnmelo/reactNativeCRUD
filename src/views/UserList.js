import React from "react"
import { View, FlatList } from "react-native"
import users from "../data/users"
import { Avatar, ListItem } from '@rneui/themed'

export default props => {
    console.warn(Object.keys(props))

    function getUserItem({ item: user }) {
        return (
            <ListItem botto>
                <Avatar
                    rounded
                    source={{ uri: user.avatarUrl }}
                />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
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