import React, { Component } from 'react';
// Animation
import Fade from 'react-reveal/Fade';
// Style
import classes from './style.module.scss';
// Sub Components
import DynamicTable from './DynamicTable';
import SlideControls from './Controls';

/* 
  See the example below how to use

  <TableSlide
    data={dataTest}
    subDataName={'dataContent'}
    titleNames={['Data', 'Hora', 'Origem crédito', 'Quantidade crédito', 'Saldo']}
    objNames={['data', 'hora', 'origem', 'quantidade', 'saldo']}
  >
    <TableSlide.Controls /> You can call controls
    <TableSlide.Table> You can pass any children JSX element to show in footer of table
  </TableSlide>

  Properties allowed:

  startAt: you can pass this property for control where interaction will start
  data: must format data to have [ { title, dataMap: []} ]
  startAt: you can pass or not if you dont pass I'll start at 0
  subDataName: must be the name from your data ( dataMap )
  titleNames: is the name of title in table
  objNames: properties name who you want show in table

  You can pass how much objNames and titleNames you want
*/

const { Provider, Consumer } = React.createContext();

const SlideConsumer = ({ children }) => (
  <Consumer>
    {context => {
      if (!context) {
        throw new Error('You can\'t pass elements outside context <TableSlide />');
      }
      return children(context);
    }}
  </Consumer>
);

export default class TableSlide extends Component {

  static Controls = () => (
    <SlideConsumer>
      {({ titleSlide, slideHandle }) => (
        <div className={classes.ContentControl}>
          <SlideControls
            titleSlide={titleSlide}
            slideHandle={slideHandle}
          />
        </div>
      )}
    </SlideConsumer>
  );

  static Table = ({ children }) => (
    <SlideConsumer>
      {({ data, titleNames, subDataName, objNames, activeSlide }) => (
        <>
          {data.map((slide, index) => (
            <div
              className={[
                classes.Slide,
                activeSlide === index ? classes.ActiveSlide : ''
              ].join(' ')}
              key={`${slide.title}-${index}`}
            >
              <Fade className="table">
                <DynamicTable
                  dataTitles={titleNames}
                  dataBody={slide[subDataName]}
                  objNames={objNames}
                >
                  {children}
                </DynamicTable>
              </Fade>
            </div>
          ))}
        </>
      )}
    </SlideConsumer>
  );

  slideHandle = symbol => {
    const { activeSlide, maxSlide } = this.state;
    const { data } = this.props;
    let current;

    if (symbol === '+') {
      if (activeSlide === maxSlide) return;
      current = activeSlide + 1;

    } else {
      if (activeSlide === 0) return;
      current = activeSlide - 1;
    }

    this.setState({ activeSlide: current, titleSlide: data[current].title });
  };

  state = {
    startAt: 0,
    titleSlide: '',
    activeSlide: 0,
    maxSlide: 0,
    slideHandle: this.slideHandle
  };

  componentDidMount() {
    const { data, startAt: startAtFromProps } = this.props;
    const startAt = startAtFromProps ? startAtFromProps : this.state.startAt;
    const titleName = data[startAt].title;
    const maxSlide = data.length - 1;
    this.setState({ titleSlide: titleName, maxSlide, startAt, activeSlide: startAt });
  }

  render() {
    return (
      <Provider value={{
        ...this.props,
        ...this.state
      }}>
        <Fade bottom className={classes.SlideContent}>
          {this.props.children}
        </Fade>
      </Provider>
    )
  }
}