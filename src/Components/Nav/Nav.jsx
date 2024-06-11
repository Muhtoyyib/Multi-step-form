import Button from '../Button/Button'

import Logo from '../../assets/Logo.png'

export default function Nav(){
    return(
        <>
            <nav className="nav">
                <div className="nav-brand">
                    <img className='nav-brand__img' src={Logo} alt="logo" />
                    <h1 className='company-Name'>
                     msme
                    </h1>
                </div>

                <Button type='b' className="btn btn--nav">
                 Dark Mode
                </Button>
            </nav>
        </>
    )
}