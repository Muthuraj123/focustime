import React,{useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import {RoundedButton} from './../../components/RoundedButton'
import {fontSizes,spacing} from './../../utils/sizes';
import {colors} from './../../utils/colors';

export const Focus = ({addSubject}) => {
  const [subject,setSubject]=useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput onSubmitEditing={({nativeEvent})=>{
            setSubject(nativeEvent.text)
          }} style={{flex:1,marginRight:spacing.md}} />
          <RoundedButton size={50} title="+" onClick={()=>{addSubject(subject)}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: spacing.md,
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
  },
  inputContainer:{
    paddingTop:spacing.md,
    flexDirection:"row",
    display:'flex',
    alignItems:'center',
  }
});
