import React from "react"
import { View, FlatList, Alert } from "react-native"
import users from "../data/users"
import { Avatar, ListItem } from '@rneui/themed'

export default props => {
    console.warn(Object.keys(props))

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    console.warn("Fake delete user " + user.id)
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem bottomDivider >
                <Avatar
                    rounded
                    source={{ uri: user.avatarUrl }}
                />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    iconProps={{ name: "edit" }}
                    iconStyle={{ fontSize: 25, color: "orange" }}
                />
                <ListItem.Chevron
                    onPress={() => confirmUserDeletion(user)}
                    iconProps={{ name: 'delete' }}
                    iconStyle={{ fontSize: 25, color: "red" }}
                />
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