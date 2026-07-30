
import ProductCard from './components/ProductoCard'
import './App.css'


function App() {

  return (
    <div className='container'>
      <h1>Inventario</h1>
      <div className='card-list'>
        <ProductCard nombre="Lapiz negro" precio={500} stock={40}/>
        <ProductCard nombre="Resma A4" precio={12000} stock={8}/>
        <ProductCard nombre="Fotocopia" precio={100} stock={999}/>
      </div>
    </div>
  )
}

export default App