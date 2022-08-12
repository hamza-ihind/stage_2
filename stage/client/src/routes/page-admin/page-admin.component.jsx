import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './page-admin.styles.scss'

const PageAdmin = () => {
    return (
        <div className='buttons-container'>

            <h1 className='title'> Bienvenue Page Admin </h1>

            <div className="links-container">
                <Link className="link" to="/profs" >
                    <Button variant='primary' size='lg'>
                        Ajouter un prof
                    </Button>
                </Link>

                <Link className="link" to="/filieres" >
                    <Button variant='primary' size='lg'>
                        Ajouter des filieres
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default PageAdmin;