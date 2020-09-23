import { connect } from 'react-redux'
import CanvasView from '../Components/CanvasView'
import {updateParticles, drawCanvas,addParticle} from '../actions'

const mapStateToProps = state =>{
    return{
        gravity: state.settingsReducer.gravity.current,
        particles : state.planetsReducer
    }
}

const mapDispatchToProps = dispatch =>{
    return{    
        addParticleCanvas: (e)=>{            
            dispatch(addParticle(2,e.clientX-23,e.clientY-90,"white"))
        },
        updateParticles: (gravity,min,max)=> {
            dispatch(updateParticles(gravity,min,max))
        },
        draw: (ctx,particle)=>{
            dispatch(drawCanvas(ctx,particle))
        }
    }
}
   
const Canvas = connect(mapStateToProps,mapDispatchToProps)(CanvasView)

export default Canvas