const Products = () => {
    type ProductType = {
        name: string;
        id: string;
        price: string;
    }
    const products: ProductType[] = [
        {
            name: "Apple",
            id: "0001",
            price: "$12"
        },
        {
            name: "Orange",
            id: "0002",
            price: "$10"
        }
    ]
    return (
        <>
            {products.map((product) => (
                <div className="flex gap-2" key={product.id}>
                    <div>{product.id}</div>
                    <div>{product.name}</div>
                    <div>{product.price}</div>
                </div>
            ))}
        </>
    );
}

export default Products;