import { Link } from 'react-router-dom';

export const Home: React.FC = () => {

    return (
        <section className="home page">
            {/* <h1>Welcome to Saar Soccer Training</h1> */}
            <img src="src\assets\logo\argus_logo-removebg.png" alt="" />
            <Link to='/train'>
                <button className="enter-train button">Enter</button>
            </Link>
        </section>
    )

}