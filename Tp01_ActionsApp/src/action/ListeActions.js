import React from 'react'
import {View, Text} from 'react-native'
import UneAction from './UneAction'


const ListeActions = ({actions, onTerminer, onSupprimer, typeAffiche}) => {
    return (
        <View>
            {actions.filter(action => typeAffiche===1 ? true : (typeAffiche===2 ? !action.done : action.done)).map((action, index) => <UneAction key={index} action={action} onTerminer={() => onTerminer(index)} onSupprimer={() => onSupprimer(index) }/>)}
        </View>
    )
}

export default ListeActions