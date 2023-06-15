import React from "react";
import { TextInput, StyleSheet} from "react-native";
 
const styles = StyleSheet.create({
textInput:{
    borderRadius:5,
    borderWidth:1,
    borderColor:"#999",
    paddingHorizontal:20,
    paddingVertical:10,
    marginBottom:10
}
})


const StyledTextInput = ({style={}, ...props}) =>{
    const inputStyles={
        ...styles.textInput,
        ...style
    }
    return (
        <TextInput style={inputStyles} { ...props} />
    )
} 
export default StyledTextInput