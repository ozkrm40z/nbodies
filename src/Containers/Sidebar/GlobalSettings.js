import { connect } from 'react-redux'
import GlobalSettingsView from '../../Components/Sidebar/GlobalSettingsView'
import {updateGravity, updateTimeInterval,start} from '../../actions'

const mapStateToProps = state =>{
    return{
        gravity: state.settingsReducer.gravity,
        timeinterval: state.settingsReducer.timeinterval,
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        start: value=> {
            dispatch(start(value))
        },
        onchangegravity: (e,val)=> {
            dispatch(updateGravity(val))
        },
        onchangetimeinterval: (e,val)=>{
            dispatch(updateTimeInterval(val))
        }    
    }
}
   
const GlobalSettings = connect(mapStateToProps, mapDispatchToProps)(GlobalSettingsView)

export default GlobalSettings