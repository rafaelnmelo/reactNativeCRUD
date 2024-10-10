import React, { useContext } from "react"
import { View, FlatList, Alert } from "react-native"
import { Avatar, ListItem } from '@rneui/themed'
import UsersContext from "../context/UsersContext"

export default props => {
    console.warn(Object.keys(props))

    //acessando os usuários pelo Context
    const { state, dispatch } = useContext(UsersContext)

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function goToUserForm(user) {
        props.navigation.navigate('UserForm', user)
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem
                bottomDivider
                onPress={() => goToUserForm(user)} >
                <Avatar
                    rounded
                    source={{ uri: user.avatarUrl }}
                />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron
                    onPress={() => goToUserForm(user)}
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
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}