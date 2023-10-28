/**
 * @author [Frederic Chien]
 * @email [contato@kyuubi.com.br]
 * @create date 28-10-2023 16:54:06
 * @modify date 28-10-2023 16:54:06
 * @desc [description]
 */
import React from 'react'
import {ImageBackground, StyleSheet,Image,  TextInput, View, Text, FlatList, ScrollView, SafeAreaView} from 'react-native';
import { Avatar } from '@rneui/themed';
const imageBackground = require('../../assets/img/montain.jpeg');
const slide1 = require('../../assets/img/slide-01.jpeg');
const slide2 = require('../../assets/img/slide-02.jpeg');

export default function Home() {
    type ItemData = {
        id: string;
        title: string;
        img: string;
      };
      
      const DATA: ItemData[] = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'Daily Calm',
          img: slide1
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Stay Happy',
          img: slide2
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Stay Strong',
          img: slide1
        },
      ];

      const Item = ({ title, image }: any) => (
        <View style={styles.slide}>
           <Image source={image} style={styles.slideImage}/>
          <Text style={styles.titleSlide}>{title}</Text>
        </View>
      );
      
      const renderItem = ({ item }: any) => (
        <Item title={item.title} image={item.img}/>
      );  


    return (
    <>
    <View style={styles.background}>
      <View style={styles.header}>
          <ImageBackground source={imageBackground} resizeMode="cover" style={styles.image}>
            <View style={styles.headerInfos}>
                <Avatar
                    size={42}
                    rounded
                    source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
                />
            </View>
            <View style={styles.headerContent}>
                <Text style={styles.titleHead}>Good Afternoon</Text>
                <Text style={styles.titleFooter}>Frederic</Text>
            </View>
          </ImageBackground>
      </View>
      <ScrollView>
      <View style={styles.container}>
      <TextInput
          textContentType='password'
              style={styles.input}
              placeholder='How are you felling?'
              placeholderTextColor={'#FFF'}
          />
      </View>
      <View style={styles.container}>
        <View style={styles.slider}>
            <Text style={styles.categories}>Recently Played</Text>
            <FlatList
                horizontal
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
      </View>
      <View style={styles.container}></View>
      <View style={styles.container}></View>
      </ScrollView>
    </View> 
      </>
    )
  }
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
      },
      background: {
        backgroundColor: '#00095e',
        flex: 1,
      },
      headerInfos: {
        display: 'flex',
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'flex-end',
      },
      categories:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
      },
      slider: {
        paddingHorizontal: 15,
      },
      slide:{
        marginTop: 10,
        width: 150,
        marginRight: 10,
        backgroundColor: '#FFF',
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10
      },
      titleSlide: {
        color: '#000',
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginTop: 5,
      },
      slideImage:{
        width: 100,
        height: 100
      },
      header:{
        height: 200,
      },
      titleHead: {
        color: '#f0f0f0',
      },
      titleFooter: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 45,
      },
      headerContent: {
        paddingHorizontal: 15,
      },
      image: {
        flex: 1,
        justifyContent: 'center',
      },
      label: {
          color: '#FFF',
          paddingLeft: 13,
          fontSize: 20,
          fontWeight: 'bold',
      },
      input: {
          height: 50,
          margin: 12,
          padding: 10,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: 15
        },
    });
  