import { connect } from 'react-redux'
import AddParticleView from '../Components/AddParticleView'
import {addParticle} from '../actions'


const mapStateToProps = state =>{
    return{
        colors: state.settingsReducer.availableColors
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        onSubmit: (form)=> {
            dispatch(addParticle(form.mass,form.posx,form.posy,form.color))
        }
    }
}

const AddParticle = connect(mapStateToProps, mapDispatchToProps)(AddParticleView)

export default AddParticle