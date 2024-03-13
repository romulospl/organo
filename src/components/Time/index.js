import Colaborador from '../Colaborador'
import './Time.css'


const Time = ({ time, colaboradores, aoDeletar }) => {
    const css = {
        backgroundColor: time.corSecundaria
    }

    return (
        colaboradores.length > 0 && <section className='time' style={css}>
            <input value={time.corSecundaria} type='color' className='input-cor' />
            <h3 style={{ borderColor: time.corPrimaria }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => {
                    return <Colaborador
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        key={colaborador.nome}
                        imagem={colaborador.imagem}
                        corDeFundo={time.corPrimaria}
                        aoDeletar={aoDeletar}
                    />
                })}
            </div>
        </section>
    )
}

export default Time
