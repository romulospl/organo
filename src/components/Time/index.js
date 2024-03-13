import Colaborador from '../Colaborador'
import './Time.css'


const Time = ({ colaboradores, corPrimaria, nome, corSecundaria, aoDeletar }) => {
    const css = {
        backgroundColor: corSecundaria
    }

    return (
        colaboradores.length > 0 && <section className='time' style={css}>
            <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => {
                    return <Colaborador
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        key={colaborador.nome}
                        imagem={colaborador.imagem}
                        corDeFundo={corPrimaria}
                        aoDeletar={aoDeletar}
                    />
                })}
            </div>
        </section>
    )
}

export default Time
