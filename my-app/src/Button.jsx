const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 }
]

function Button() {
    return (
        <div>
            {products.map((product) => (
                <button key={product.id}>{product.title}</button>
            ))}
        </div>
    )
}

export default Button
