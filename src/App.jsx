import { products } from './data/products'
import ProductCard from './components/ProductoCard'
import './App.css'



function App() {

  return (
    <div className='container'>
      <h1>Inventario</h1>
      <div className='card-list'>
        {products.map((product) =>(
          <ProductCard 
            key={product.id}
            nombre={product.name}
            precio={product.price}
            stock={product.stock}
          />
        ))}
      </div>
    </div>
  )
}

export default App