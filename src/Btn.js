import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Btn({ bgColor, btnLabel,textColor,btnwidth,btnHeight,txtmargin,Press,btnMarginleft,btnMarginRight,BtnMgTop,btnMarginBtm}) {
    return (
        <TouchableOpacity 
        onPress={Press}
        style={{ backgroundColor: bgColor, borderRadius: 10, alignItems: 'center',width:btnwidth,height:btnHeight,marginTop:BtnMgTop,marginHorizontal:5,marginLeft:btnMarginleft,marginRight:btnMarginRight,marginBottom:btnMarginBtm}}>
            <Text style={{ color: textColor, fontSize: 22, marginTop:txtmargin}}>{btnLabel}</Text>
        </TouchableOpacity>
    )
}