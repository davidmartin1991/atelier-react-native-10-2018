import React from 'react'
import {StyleSheet, View, ScrollView, Keyboard} from 'react-native'
import Entete from './src/Entete'
import Saisie from './src/Saisie'
import BoutonCreer from './src/BoutonCreer'
import ListeActions from './src/action/ListeActions'
import Menu from './src/menu/Menu'

/**
 * Composant d'entrée de l'application.
 */
export default class App extends React.Component {

    // état global de l'application
    // il y aura probalement d'autres informations à stocker
    state = {
        texteSaisie: '',
        actions: [],
        typeAffiche: 1
    }

    /**
     * Méthode invoquée lorsque que la saisie change.
     *
     * @param nouvelleSaisie la valeur saisie
     */
    quandLaSaisieChange(nouvelleSaisie) {
        console.log(nouvelleSaisie);
        this.setState({texteSaisie : nouvelleSaisie})
    }

    /**
     * Méthode invoquée lors du clic sur le bouton `Valider`.
     */
    validerNouvelleAction() {
        const action = {
            title: this.state.texteSaisie,
            done: false
        }
        this.setState(prev => ({actions: [...prev.actions, action], texteSaisie: ''}))
        Keyboard.dismiss();
        console.log('Vous avez cliqué sur Valider !')
    }

    terminerAction = indexCourant => {
        this.setState(prev => ({actions: prev.actions.map((action,index) => index===indexCourant ? {...action, done: !action.done} : action)}))
    }

    supprimerAction = indexCourant => {
        this.setState(prev => ({actions: prev.actions.filter((action,index) => index !== indexCourant)}))
    }

    modifierType = aType => {
        console.log(aType);
        this.setState({typeAffiche: aType});
    }
    render() {
        const {texteSaisie} = this.state

        return (
            <View style={styles.conteneur}>
                <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
                    <Entete/>
                    <Saisie texteSaisie={texteSaisie} evtTexteModifie={(titre) => this.quandLaSaisieChange(titre)}/>
                    <ListeActions actions={this.state.actions} onTerminer={this.terminerAction} onSupprimer={this.supprimerAction} typeAffiche={this.state.typeAffiche}/>
                    <BoutonCreer onValider={() => this.validerNouvelleAction()}/>
                </ScrollView>
                <Menu modifierType={this.modifierType}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conteneur: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        flex: 1,
        paddingTop: 60,
    },
})