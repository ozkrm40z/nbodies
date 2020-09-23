import React from 'react';
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';

const CanvasView = ({updateParticles,draw,addParticleCanvas}) => {

  const isStarted = useSelector(state=>state.settingsReducer.isStarted)
  const timeinterval = useSelector(state=>state.settingsReducer.timeinterval.current)
  const gravity = useSelector(state=>state.settingsReducer.gravity.current)
  const minMagnitude = useSelector(state=>state.settingsReducer.magnitude.min)
  const maxMagnitude = useSelector(state=>state.settingsReducer.magnitude.max)
  const canvasRef = React.useRef(null)

  React.useEffect(() => {


      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')


      if (!isStarted){
        draw(ctx)
        return () => clearInterval(interval);
      }

      var interval = setInterval(()=>{      
        updateParticles(gravity,minMagnitude,maxMagnitude)        
        draw(ctx)
      },timeinterval)
  
      return () => clearInterval(interval);
    })

  return(
    <canvas ref={canvasRef} width={1000} height={600} onClick={addParticleCanvas} />
  );
}

 CanvasView.propTypes = {
  updateParticles: PropTypes.func.isRequired,
  addParticleCanvas: PropTypes.func.isRequired,
  draw: PropTypes.func.isRequired,
 }

export default CanvasView;