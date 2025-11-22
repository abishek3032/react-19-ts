import { Link, Outlet } from "react-router"
const Layout = () => {
    const products = [
        { id: 1, n: "Apple" },
        { id: 2, n: "Orange" },
        { id: 3, n: "Banana" }
    ]
    return (
        <>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="product">product</Link></li>
                <li><Link to="about">about</Link></li>
            </ul>
            <Outlet context={products} />
        </>
    )
}
export default Layout