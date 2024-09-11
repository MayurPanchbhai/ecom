import { Link } from "react-router-dom"

export const Home = () =>{
    return(
        <>
            <h1>This is home</h1>
            <Link to="/about">About page visit here</Link>
        </>
    )
}