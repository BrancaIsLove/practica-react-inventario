function ProductCard({nombre, precio, stock}){
    return(
        <div className="card">
            <h3 className="card-name">{nombre}</h3>
            <p className="card-price">Precio: ${precio}</p>
            <p className=""card-stock>Stock: {stock}</p>
        </div>
    )
}
    export default ProductCard