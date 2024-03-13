import Colaborador from '../Colaborador'
import './Time.css'


const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
    const css = {
        backgroundColor: time.corSecundaria
    }

    return (
        colaboradores.length > 0 && <section className='time' style={css}>
            <input onChange={evento => mudarCor(evento.target.value, time.nome)} value={time.corSecundaria} type='color' className='input-cor' />
            <h3 style={{ borderColor: time.corPrimaria }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => {
                    return <Colaborador
                        colaborador={colaborador}
                        key={colaborador.nome}
                        corDeFundo={time.corPrimaria}
                        aoDeletar={aoDeletar}
                    />
                })}
            </div>
        </section>
    )
}

export default Time
