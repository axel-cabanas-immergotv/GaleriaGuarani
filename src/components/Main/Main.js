import Networks from "../Networks/Networks";
import Hero from "./Hero/Hero";



export default function Main () {
    return (
        <main>
            <div className="main__container">
                <Hero/>
                <Networks/>
            </div>
        </main>
    )
}