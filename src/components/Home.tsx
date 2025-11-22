import { useOutletContext } from "react-router"

const Home = () =>{
    const p = useOutletContext()
    return(
        <>
            <p>Home</p>
            <p>{JSON.stringify(p)}</p>
        </>
    )
}

export default Home