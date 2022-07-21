import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import AppButton from '../common/AppButton'
import { Colors, Dimensions, Fonts } from '../../theme'

const SelectionRow = ({ selected, setSelected }) => {

    const [buttonList, setButtons] = useState([
        {
            id: 0,
            name: 'Recommend'
        },
        {
            id: 1,
            name: 'Popular'
        },
        {
            id: 2,
            name: 'Trending'
        }
    ])

    return (
        <View style={styles.container} >
            {buttonList.map(item => (
                <Pressable key={item.id} onPress={() => setSelected(item.id)} >
                    <View >
                        <Text style={[styles.text,
                        {
                            color: item.id == selected ? Colors.dark : Colors.grey,
                            fontFamily: item.id == selected ? Fonts.BOLD : Fonts.MEDIUM
                        }]} >
                            {item.name}
                        </Text>
                        {item.id == selected && <View style={styles.circle} />}
                    </View>
                </Pressable>
            ))}
        </View>
    )
}

export default SelectionRow

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: Dimensions.DEVICE_WIDTH * .85,
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: 50
    },
    text: {
        fontFamily: Fonts.MEDIUM,
        fontSize: 16


    },
    circle: {
        width: 7,
        height: 7,
        borderRadius: 7,
        backgroundColor: Colors.primary,
        alignSelf: 'center',
        marginTop: 7

    }
})