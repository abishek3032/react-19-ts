import { ProductType } from "../types/ProductType";
const Products = (props: any) => {
    return (
        <>
            {props.products.map((product: ProductType) =>
                product.isActive && (
                    <div className="flex gap-2 border-2 m-3 p-3 rounded " key={product.id}>
                        <div>{product.id}</div>
                        <div>{product.name}</div>
                        <div>{product.price}</div>
                    </div>
                )
            )}
        </>
    );
}

export default Products;