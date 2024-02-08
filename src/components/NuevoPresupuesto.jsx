import { useState } from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({
  presupuesto, 
  setPresupuesto, 
  setIsValidPresupuesto
}) => {

  const [mensaje, setMensaje] = useState(null)

  const handlePresupuesto = (e) => {
    e.preventDefault()
    if (!presupuesto || Number(presupuesto) < 0) {
      setMensaje('El presupuesto es incorrecto')
      return
    }
    setMensaje('')
    setIsValidPresupuesto(true)
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario">
        <div className="campo">
          <label>Definir presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Añade presupuesto"
            value={presupuesto}
            onChange={e => setPresupuesto(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Añadir"
          onClick={handlePresupuesto}
        />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>} 
      </form>
    </div>
  )
}

export default NuevoPresupuesto