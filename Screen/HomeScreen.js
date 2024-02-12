import { View, Text, Image, TextInput, TouchableOpacity, ScrollView , SafeAreaView} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Categories from '../components/Categories';

export default function HomeScreen() {
  const navigation = useNavigation();
  useLayoutEffect(()=> {
    navigation.setOptions({
      headerShown: false
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-10">
      <View className="flex-row items-center px-4">
        <Image source={{uri: 'https://png.pngtree.com/png-vector/20210310/ourmid/pngtree-elephant-png-image_3028611.jpg'}}
        className="h-8 w-8 rounded-full"/>
        <View className="ml-2 flex-1">
          <Text className="text-xs text-gray-500">Deliver Now!</Text>
          <View className="flex-row items-baseline">
            <Text className="text-base font-bold">Current Location</Text>
            <AntDesign name="down" size={13} color="lightskyblue" />
          </View>
        </View>
        <AntDesign name="user" size={24} color="lightskyblue" />
      </View>
        <View className="flex-row items-center gap-2 px-4 pt-2 pb-2">
          <View className="bg-gray-200 flex-row items-center p-1 pl-3 flex-1">
            <AntDesign name="search1" size={18} color="gray" />
            <TextInput
              placeholder='Restaurants and Cuisines'
              keyboardType="default"
              className="pl-2"
            />
          </View>
          <TouchableOpacity className="bg-gray-100 p-1 rounded-full">
            <AntDesign name="filter" size={26} color="lightskyblue" />
          </TouchableOpacity>
        </View>
        <ScrollView className="bg-gray-100" contentContainerStyle={{
          paddingBottom: 100,
        }}>
          {/* Categories */}
          <Categories/>
        </ScrollView>
    </SafeAreaView>
  )
}
