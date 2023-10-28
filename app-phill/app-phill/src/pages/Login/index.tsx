/**
 * @author [Frederic Chien]
 * @email [contato@kyuubi.com.br]
 * @create date 28-10-2023 14:41:51
 * @modify date 28-10-2023 14:41:51
 * @desc [description]
 */
import React from 'react'
import {ImageBackground, StyleSheet, TextInput, View, Text} from 'react-native';
import { Button } from '@rneui/themed';
import {useNavigation} from '@react-navigation/native'
const imageBackground = require('../../assets/img/montain.jpeg');

export default function Login() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <ImageBackground source={imageBackground} resizeMode="cover" style={styles.image}>
        <Text style={styles.label}>Login</Text>
        <TextInput
            style={styles.input}
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
        textContentType='password'
            style={styles.input}
        />
        <View style={styles.viewButton}>
            <Button
                title="Log in"
                loading={false}
                loadingProps={{ size: 'small', color: 'white' }}
                buttonStyle={{
                backgroundColor: '#00095e',
                borderRadius: 10,
                }}
                titleStyle={{fontSize: 18 }}
                containerStyle={{
                marginHorizontal: 13,
                height: 50,
                width: '50%',
                marginVertical: 10,
                }}
                onPress={() => navigation.navigate('Home')}
            />
        </View>
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewButton: {
        display: 'flex',
        alignItems: 'center'
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    label: {
        color: '#FFF',
        paddingLeft: 13,
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        height: 50,
        margin: 12,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 15
      },
  });
