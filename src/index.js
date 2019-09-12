import React from "react";
import { render } from "react-dom";

import TableSlide from './components/Slide';
import FieldContent from './components/FieldContent';
import Hooks from "./components/Hooks";

class App extends React.PureComponent {
  formRef = React.createRef();
  state = {
    dataTest: [
      {
        title: "Outubro - 2018",
        dataContent: [
          {
            data: "01/10/2018",
            hora: "08:00",
            origem: "Crédito mês anterior",
            quantidade: "+1.000",
            saldo: "11.00"
          },
          {
            data: "01/10/2018",
            hora: "08:00",
            origem: "Crédito mês anterior",
            quantidade: "+1.000",
            saldo: "11.00"
          },
          {
            data: "01/10/2018",
            hora: "08:00",
            origem: "Crédito mês anterior",
            quantidade: "+1.000",
            saldo: "11.00"
          },
          {
            data: "01/10/2018",
            hora: "08:00",
            origem: "Crédito mês anterior",
            quantidade: "+1.000",
            saldo: "11.00"
          },
          {
            data: "01/10/2018",
            hora: "08:00",
            origem: "Crédito mês anterior",
            quantidade: "+1.000",
            saldo: "11.00"
          },
          {
            data: "01/10/2018",
            hora: "08:00",
            origem: "Crédito mês anterior",
            quantidade: "+1.000",
            saldo: "11.00"
          },
          {
            data: "01/10/2018",
            hora: "08:00",
            origem: "Crédito mês anterior",
            quantidade: "+1.000",
            saldo: "11.00"
          },
          {
            data: "01/10/2018",
            hora: "08:00",
            origem: "Crédito mês anterior",
            quantidade: "+1.000",
            saldo: "11.00"
          },
          {
            data: "01/10/2018",
            hora: "08:00",
            origem: "Crédito mês anterior",
            quantidade: "+1.000",
            saldo: "11.00"
          }
        ]
      },
      {
        title: "Novembro - 2018",
        dataContent: [
          {
            data: "01/11/2018",
            hora: "08:00",
            origem: "Crédito mês anterior",
            quantidade: "+1.000",
            saldo: "11.00"
          },
          {
            data: "01/11/2018",
            hora: "08:00",
            origem: "Crédito mês anterior",
            quantidade: "+1.000",
            saldo: "11.00"
          },
          {
            data: "01/11/2018",
            hora: "08:00",
            origem: "Crédito mês anterior",
            quantidade: "+1.000",
            saldo: "11.00"
          },
          {
            data: "01/11/2018",
            hora: "08:00",
            origem: "Crédito mês anterior",
            quantidade: "+1.000",
            saldo: "11.00"
          },
          {
            data: "01/11/2018",
            hora: "08:00",
            origem: "Crédito mês anterior",
            quantidade: "+1.000",
            saldo: "11.00"
          },
          {
            data: "01/11/2018",
            hora: "08:00",
            origem: "Crédito mês anterior",
            quantidade: "+1.000",
            saldo: "11.00"
          },
          {
            data: "01/11/2018",
            hora: "08:00",
            origem: "Crédito mês anterior",
            quantidade: "+1.000",
            saldo: "11.00"
          },
          {
            data: "01/11/2018",
            hora: "08:00",
            origem: "Crédito mês anterior",
            quantidade: "+1.000",
            saldo: "11.00"
          },
          {
            data: "01/11/2018",
            hora: "08:00",
            origem: "Crédito mês anterior",
            quantidade: "+1.000",
            saldo: "11.00"
          }
        ]
      },
      {
        title: "Dezembro - 2018",
        dataContent: [
          {
            data: "01/12/2018",
            hora: "08:00",
            origem: "Crédito mês anterior",
            quantidade: "+1.000",
            saldo: "11.00"
          },
          {
            data: "01/12/2018",
            hora: "08:00",
            origem: "Crédito mês anterior",
            quantidade: "+1.000",
            saldo: "11.00"
          },
          {
            data: "01/12/2018",
            hora: "08:00",
            origem: "Crédito mês anterior",
            quantidade: "+1.000",
            saldo: "11.00"
          },
          {
            data: "01/12/2018",
            hora: "08:00",
            origem: "Crédito mês anterior",
            quantidade: "+1.000",
            saldo: "11.00"
          },
          {
            data: "01/12/2018",
            hora: "08:00",
            origem: "Crédito mês anterior",
            quantidade: "+1.000",
            saldo: "11.00"
          },
          {
            data: "01/12/2018",
            hora: "08:00",
            origem: "Crédito mês anterior",
            quantidade: "+1.000",
            saldo: "11.00"
          },
          {
            data: "01/12/2018",
            hora: "08:00",
            origem: "Crédito mês anterior",
            quantidade: "+1.000",
            saldo: "11.00"
          },
          {
            data: "01/12/2018",
            hora: "08:00",
            origem: "Crédito mês anterior",
            quantidade: "+1.000",
            saldo: "11.00"
          },
          {
            data: "01/12/2018",
            hora: "08:00",
            origem: "Crédito mês anterior",
            quantidade: "+1.000",
            saldo: "11.00"
          }
        ]
      }
    ],
    form: {}
  };

  pushForm = e => {
    console.log(e)
  }


  buildingArr = () => {
    let arr = [];
    for (let i = 0; i < 20; i++) {
      arr.push(`${i}`);
    }
    return arr;
  }

  render() {
    const { dataTest } = this.state;
    return (
      <div style={{ padding: '20px' }}>
        {/* <Hooks /> */}
        <TableSlide
          data={dataTest}
          subDataName={'dataContent'}
          titleNames={['Data', 'Hora', 'Origem crédito', 'Quantidade crédito', 'Saldo']}
          objNames={['data', 'hora', 'origem', 'quantidade', 'saldo']}
        >
          <TableSlide.Controls />
          <TableSlide.Table>
            <p>
              Saldo atual: <strong>14.000</strong>
            </p>
          </TableSlide.Table>
        </TableSlide>
        <h1>Exemplo Select</h1>
        <FieldContent stateCallBack={(e) => console.log(e)}>
          <FieldContent.Label type="Block" name="select" text="Selecione sua cidade" />
          <FieldContent.Field
            el="select"
            type="text"
            name="cidade"
            placeholder="só vai"
            optionConfig={[{ key: "itu", value: "Itu", text: 'Itu' }, { key: "fortaleza", value: "Fortaleza", text: 'Fortaleza' }]}
          />
        </FieldContent>
        <br />
        <h1>Exemplo mult select</h1>
        <FieldContent stateCallBack={(e) => console.log(e)}>
          <FieldContent.Label type="Block" name="select" text="Selecione sua cidade" />
          <FieldContent.Field
            el="select"
            type="text"
            name="estado"
            placeholder="só vai"
            optionConfig={[{ key: "sp", value: "SP", text: 'SP' }, { key: "FT", value: "FT", text: 'FT' }]}
          />
          <FieldContent.Label type="Block" name="select" text="Selecione seu bairro" />
          <FieldContent.Field
            el="select"
            type="text"
            name="bairro"
            placeholder="só vai"
            optionConfig={[{ key: "parque america", value: "parque america", text: 'Parque ámerica' }, { key: "centro", value: "centro", text: 'Centro' }]}
          />
          <FieldContent.Label type="Block" name="select" text="Selecione seu sexo" />
          <FieldContent.Field
            el="select"
            type="text"
            name="sexo"
            placeholder="só vai"
            optionConfig={[{ key: "m", value: "m", text: 'M' }, { key: "f", value: "f", text: 'f' }]}
          />
        </FieldContent>
        <br />
        <h1>Callback separada</h1>
        <div className="ui grid">
          <div className="four wide column">
            <FieldContent stateCallBack={(e) => console.log(e)} >
              <FieldContent.Label type="Block" name="name" text="Nome" />
              <FieldContent.Field el="input" type="text" name="name" />
            </FieldContent>
          </div>
          <div className="four wide column">
            <FieldContent stateCallBack={(e) => console.log(e)}>
              <FieldContent.Label type="Block" name="name" text="Sobrenome" />
              <FieldContent.Field el="input" type="text" name="lastname" />
            </FieldContent>
          </div>
          <div className="four wide column">
            <FieldContent stateCallBack={(e) => console.log(e)}>
              <FieldContent.Label type="Block" name="name" text="Nome da mãe" />
              <FieldContent.Field el="input" type="text" name="mae" />
            </FieldContent>
          </div>
          <div className="four wide column">
            <FieldContent stateCallBack={(e) => console.log(e)}>
              <FieldContent.Label type="Block" name="name" text="Nome do pai" />
              <FieldContent.Field el="input" type="text" name="pai" />
            </FieldContent>
          </div>
        </div>
        <br />
        <h1>Callback junta</h1>
        <div className="ui grid">
          <FieldContent
            stateCallBack={this.pushForm}
          >
            <div className="four wide column">
              <FieldContent.Label type="Block" name="name" text="Nome" />
              <FieldContent.Field el="input" type="text" name="name" />
            </div>
            <div className="four wide column">
              <FieldContent.Label type="Block" name="name" text="Sobrenome" />
              <FieldContent.Field el="input" type="text" name="lastname" />
            </div>
            <div className="four wide column">
              <FieldContent.Label type="Block" name="name" text="Nome da mãe" />
              <FieldContent.Field el="input" type="text" name="mae" />
            </div>
            <div className="four wide column">
              <FieldContent.Label type="Block" name="name" text="Nome do pai" />
              <FieldContent.Field el="input" type="text" name="pai" />
            </div>
          </FieldContent>
        </div>
        <br />
        <h1>Callback junta autopreenchimento</h1>
        <div className="ui grid">
          <FieldContent
            ref={this.formRef}
            stateCallBack={this.pushForm}
            filedFields={{ lastname: 'Alencar', mae: 'Abreu, Se você não sabe', pai: 'Nem eu' }}
          >
            <div className="four wide column">
              <FieldContent.Label type="Block" name="name" text="Nome" required />
              <FieldContent.Field el="input" type="text" name="name" required />
            </div>
            <div className="four wide column">
              <FieldContent.Label type="Block" name="name" text="Sobrenome" />
              <FieldContent.Field el="input" type="text" name="lastname" />
            </div>
            <div className="four wide column">
              <FieldContent.Label type="Block" name="name" text="Nome da mãe" />
              <FieldContent.Field el="input" type="text" name="mae" />
            </div>
            <div className="four wide column">
              <FieldContent.Label type="Block" name="name" text="Nome do pai" />
              <FieldContent.Field el="input" type="text" name="pai" />
            </div>
          </FieldContent>
        </div>
        <br />
        <h1>Callback junta com teste de estresse de dados</h1>
        <div className="ui grid">
          <FieldContent
            stateCallBack={this.pushForm}
          >
            {this.buildingArr().map(item => (
              <div className="four wide column" key={item}>
                <FieldContent.Label type="Block" name={item} text={item} />
                <FieldContent.Field el="input" type="text" name={item} />
              </div>
            ))}
          </FieldContent>
        </div>

        <FieldContent
          stateCallBack={this.pushForm}
        >
          <FieldContent.Label type="Block" name="name" text="Selecione" />
          <FieldContent.Field el="checkbox" type="checkbox" name="sim" />
          <FieldContent.Field el="checkbox" type="checkbox" name="nao" />
        </FieldContent>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
