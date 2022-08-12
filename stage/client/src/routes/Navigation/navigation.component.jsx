import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/Logo.svg'
import { Fragment } from "react"

import './navigation.styles.scss'

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className='logo-container' to='/'>
                    <Logo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/auth'>
                        S'IDENTIFIER
                    </Link>
                    <Link className='nav-link' to='/admin'>
                        Page Admin
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;