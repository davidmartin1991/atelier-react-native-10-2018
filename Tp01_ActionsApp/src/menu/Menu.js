import React from 'react'
import { View, StyleSheet } from 'react-native'
import OptionMenu from './OptionMenu'

/**
 * Composant Menu.
 */
const Menu = ({modifierType}) => (
    <View style={styles.menu}>
        <OptionMenu name='Toutes'  modifierType={() => modifierType(1)}/>
        <OptionMenu name='Actives' modifierType={() => modifierType(2)}/>
        <OptionMenu name='Terminés' modifierType={() => modifierType(3)}/>
    </View>
)

const styles = StyleSheet.create({
    menu: {
        height: 70,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dddddd'
    }
})
export default Menu