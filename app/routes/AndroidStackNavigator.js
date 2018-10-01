import {createStackNavigator} from 'react-navigation'
import IntermediateAccountScreen from '../screens/IntermediateAccountScreen'
import PersonalInformationScreen from '../screens/PersonalInformationScreen'
import ChangePasswordScreen from '../screens/ChangePasswordScreen'

/**
 * ANDROID ONLY
 */
const AndroidStackNavigator = new createStackNavigator({
    Account      : {
        screen: IntermediateAccountScreen
    },
    PersonalInformation: {
        screen: PersonalInformationScreen
    },
    ChangePassword: {
        screen: ChangePasswordScreen
    },
}, {
    initialRouteName: 'Account',
    headerMode      : 'none'
})

AndroidStackNavigator.navigationOptions = ({navigation}) => {
    let drawerLockMode = 'unlocked'
    let tabBarVisible  = true
    if (navigation.state.index > 0) {
        drawerLockMode = 'locked-closed'
        tabBarVisible  = false
    }

    return {
        drawerLockMode,
        tabBarVisible
    }
}

export default AndroidStackNavigator
