import Logo from '../../assets/Logo.png'

export default function Nav(){
    return(
        <>
            <nav className="nav">
                <div className="nav-brand">
                    <img className='nav-brand__img' src={Logo} alt="logo" />
                    <h1 className='nav-brand__h1'>
                     msme
                    </h1>
                </div>

                <button className="nav-toggle">
                   Dark Mode
                </button>
            </nav>
        </>
    )
}