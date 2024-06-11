import Logo from "../../assets/Logo.png"

export default function Welcome(){
    return(
        <>
            <div className="welcome">
                <img src={Logo} alt="lgog" />
            </div>
        </>
    )
}