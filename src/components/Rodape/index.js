import './Rodape.css'
import RedesSociais from './components/RedesSociais'

const Rodape = () => {

    return (
        <footer className='rodape'>
            <div>
                <RedesSociais />
                <div>
                    <img src="/imagens/logo.png" alt="FaceBook" />
                </div>
                <div className='credito'>
                    <span>Desenvolvido por Alura</span>
                </div>
            </div>
        </footer>
    )
}

export default Rodape