function ProductCard({nombre, precio, stock}){
    return(
        <div className="card">
            <h3 className="card-name">{nombre}</h3>
            <p className="card-price">Precio: ${precio}</p>
            <p className="card-stock">Stock: {stock}</p>
            {stock < 10 && stock >= 1 &&<span className="badge">Stock bajo</span>}
            {stock === 0 && <span className="sin-stock">Sin stock</span>}
        </div>
    )
}
    export default ProductCard