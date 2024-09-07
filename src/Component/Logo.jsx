import logo from './../assets/logo.png'

function Logo() {
    return (
        <div className='logoContainer'>
            <img src={logo} alt="logo" className='logoImage' />
        </div>
    )
}

export default Logo
