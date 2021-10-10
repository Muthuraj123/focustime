import React from 'react';
import { TouchableOpacity , Text, StyleSheet } from 'react-native';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity onPress={props.onClick} style={[styles(size).radius, style]}>
      <Text style={[styles(size).text,textStyle]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      borderColor:'#fff',
      borderWidth:2,
      display:'flex',
      justifyContent:"center"
    },
    text: {
      color: '#fff',
      fontSize: size/3,
    },
  });
