import { useLocation, useParams } from "react-router"
const ProductDetails = () => {
    const p = useParams()
    const location = useLocation()
return(
    <>
        <p>{JSON.stringify(location)}</p>
    </>
)
}

export default ProductDetails