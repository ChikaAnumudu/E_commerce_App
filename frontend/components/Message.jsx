import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Utils'

const Message = ({ variant = "error", children }) => {
    const varianStyles = {
        success: {
            backgroundColor: Colors.successLight,
            color: Colors.success,
            borderColor:Colors.successBorder,
        },
        error: {
            backgroundColor: Colors.error,
            color: Colors.errorLight,
        },
        info: {
            backgroundColor: Colors.infoLight,
            color: Colors.info,
            borderColor: Colors.infoBorder,
        },
    };
    const selectedStyle = varianStyles[variant] || varianStyles.error;
  return (
    <View style={[styles.container, {
        backgroundColor: selectedStyle.backgroundColor,
        borderLeftColor: selectedStyle.borderColor,
    }]}>
      <Text style={[styles.text, {color:selectedStyle.colo}]}>{children}</Text>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({
    container: {
        padding: 12,
        borderLeftWidth: 4,
        borderRadius: 4,
        marginVertical: 8,
        width: "100%",
        alignItems: "center"
    },
    text: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: "500"
    },
});