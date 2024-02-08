import { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlPresupuesto = ({presupuesto, gastos}) => {

  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)
  const [porcentaje, setPorcentaje] = useState(0)

  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => total + gasto.cantidad, 0)
    const totalDisponible = presupuesto - totalGastado;
    const nuevoPorcentaje = (totalGastado / presupuesto) * 100
    
    setGastado(totalGastado)
    setDisponible(totalDisponible)
    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje)
    }, 500)
  }, [gastos])

  const formatearPresupuesto = (presupuesto) => {
    return new Intl.NumberFormat('es-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(presupuesto)
  }

  const formatearPorcentaje = (porcentaje) => {
    return new Intl.NumberFormat('es-US', {
      style: 'percent',
      minimumFractionDigits: 1
    }).format(porcentaje / 100)
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
     <div>
      <CircularProgressbar  
        value={porcentaje}
        text={`${formatearPorcentaje(porcentaje)} Gastado`}
        styles={buildStyles({
          pathColor: '#3B82F6',
          trailColor: '#F5F5F5',
          textColor: '#3B82F6'
        })}
      />
     </div>
     
     <div className='contenido-presupuesto'>
      <p>
        <span>Presupuesto: </span>{formatearPresupuesto(presupuesto)}
      </p>
      <p>
        <span>Disponible: </span>{formatearPresupuesto(disponible)}
      </p>
      <p>
        <span>Gastado: </span>{formatearPresupuesto(gastado)}
      </p>
     </div>
    </div>
  )
}

export default ControlPresupuesto