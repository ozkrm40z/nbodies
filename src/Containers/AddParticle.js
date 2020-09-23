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
            dispatch(addParticle(parseInt(form.mass),parseInt(form.posx),parseInt(form.posy),form.color))
        }
    }
}

const AddParticle = connect(mapStateToProps, mapDispatchToProps)(AddParticleView)

export default AddParticle