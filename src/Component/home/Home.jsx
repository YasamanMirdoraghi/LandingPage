
import "./home.css"
import Pic from "../../Images/pic.png"
function Home(){
    return(
        <>
        <div className="content">
            <div className="box-one">
            <h1 className="animation">Make <br/>New Friends</h1>
            <p className="animation">Socially is a new social media platform to make new friends online in the word.
            Now let's explore all it's amazing features</p>
            <a className="animation" href="">Join Now</a>
            </div>
            <div className="box-two">
                <img className="animation" src={Pic} alt="#" />
            </div>
        </div>
        </>
    )
}

export default Home;