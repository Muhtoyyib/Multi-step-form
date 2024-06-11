import Button from "../Button/Button"
import Logo from "../../assets/Logo.png"

export default function Welcome(){
    return(
        <>
            <div className="welcome">
                 <img src={Logo} alt="logo" />

                <h2>Welcome to <span className="welcome__company-Name">msme</span> Employment Scheme</h2>
                <p>Our aim is to provide jobs for <span className="target">10,000</span> youths all over Nigeria</p>

                <Button type='a' className="btn btn--welcome" to={`#`}>
                  Get Employment
                </Button>
            </div>
        </>
    )
}