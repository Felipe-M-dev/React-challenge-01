import Alert from 'react-bootstrap/Alert';

const Footer = () => {
    return (
        <div>
            <Alert key={'success'} variant={'success'}>
                Desea conocer mas sobre el fútbol Argentino? Haga click en este {' '}
                <Alert.Link  href="https://www.ligaprofesional.ar/" target="_blank">enlace.</Alert.Link>
            </Alert>
            <div className='footer'>Todos los derechos reservados</div>
        </div>
    );
};

export default Footer;
