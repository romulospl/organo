import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Rodape from './components/Rodape';

function App() {

  const [times, setTimes] = useState(
    [
      {
        nome: 'Programação',
        cor: '#57C278',
      },
      {
        nome: 'Front-End',
        cor: '#82CFFA',
      },
      {
        nome: 'Data Sciense',
        cor: '#A6D157',
      },
      {
        nome: 'Devops',
        cor: '#E06B69',
      },
      {
        nome: 'UX e Design',
        cor: '#D86EBF',
      },
      {
        nome: 'Mobile',
        cor: '#FEBA05',
      },
      {
        nome: 'Inovação e Gestão',
        cor: '#FF8A29',
      }
    ]
  )

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador() {
    console.log('deletando colaborador')
  }

  function mudarCorDoTime(cor, nome) {
    setTimes(times.map(time => {
      if (time.nome === nome) {
        time.cor = cor
      }
      return time
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={aoNovoColaboradorAdicionado} />
      {times.map((time, indice) =>
        <Time
          mudarCor={mudarCorDoTime}
          key={indice}
          time={time}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
        />
      )}
      <Rodape />
    </div>
  );
}

export default App;
