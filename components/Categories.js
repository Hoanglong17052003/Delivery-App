import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView 
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
      {/* Categories Card */}
      <CategoryCard imgUrl='https://png.pngtree.com/png-vector/20210310/ourmid/pngtree-elephant-png-image_3028611.jpg' title='Long 1'/>
      <CategoryCard imgUrl='https://png.pngtree.com/png-vector/20210310/ourmid/pngtree-elephant-png-image_3028611.jpg' title='Long 2'/>
      <CategoryCard imgUrl='https://png.pngtree.com/png-vector/20210310/ourmid/pngtree-elephant-png-image_3028611.jpg' title='Long 3'/>
    </ScrollView>
  )
}

export default Categories