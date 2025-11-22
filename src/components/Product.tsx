import { Link, Outlet, useOutletContext } from "react-router"

const Product = () => {
    const p = useOutletContext()
    return (
        <>
            <p>Product</p>
            <Link to={'/product/apple'} state={p}>Apple</Link>
            <Link to={'/product/orange'}>Orange</Link>
            <Link to={'/product/banana'}>Banana</Link>
            <Outlet/>
        </>
    )
}
export default Product