import React, { Component, createContext } from 'react';
import { Input, Select, Checkbox } from 'semantic-ui-react';
import classes from './style.module.scss';

const { Provider, Consumer } = createContext();

const FieldConsumer = ({ children }) => (
  <Consumer>
    {context => {
      if (!context) throw new Error('You can\'t pass elements outside <FieldContent />')
      return children(context)
    }}
  </Consumer>
);

export default class FieldContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      renderElement: this.renderElement
    }
  }

  static Field = ({ el, name, ...rest }) => (
    <FieldConsumer>
      {({ renderElement, ...state }) => renderElement(el, state, name, rest)}
    </FieldConsumer>
  );

  static Label = ({ type, text, name, ...rest }) => (
    <FieldConsumer>
      {() => (
        <label
          className={[classes.Label, classes[type]].join(' ')}
          htmlFor={name}
          {...rest}
        >
          {text} {rest.required && <span className="required">*</span>}
        </label>
      )}
    </FieldConsumer>
  );

  makeText = () => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 20; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  findFieldElement = (children, filedFields) => {
    children.forEach(child => {
      if (child.props.el) {
        this.setState(({ form, requiredFields, errorFields }) => ({
          form: {
            ...form,
            [child.props.name]: filedFields ? filedFields[child.props.name] : '',
          },
          requiredFields: {
            ...requiredFields,
            [child.props.name]: child.props.required ? true : false
          },
          errorFields: {
            ...errorFields,
            [child.props.name]: false
          }
        }));
      }
      if (Array.isArray(child.props.children)) this.findFieldElement(child.props.children, filedFields);
    })
  }

  componentWillMount = () => {
    const { children, filedFields } = this.props;
    this.findFieldElement(children, filedFields);
  }

  fillField = (e, { name, value, type, checked }) => {
    this.setState(({ form }) => ({
      form: { ...form, [name]: type === 'checkbox' ? checked : value }
    }), this.formIsValid);
  }

  fillSelectHandle = (a, { name, value, options }) => {
    this.setState(({ form }) => ({
      form: {
        ...form,
        [name]: value,
        selectedOption: {
          ...this.state.selectedOption,
          [name]: options.find(option => option.value === value)
        }
      }
    }), this.formIsValid);
  }

  fieldHasError = (name, bol) => this.setState(({ errorFields }) => ({ errorFields: { ...errorFields, [name]: bol } }));

  formIsValid = () => {
    let isValid = true;
    const { requiredFields, form: { ...fields }, errorFields } = this.state;

    for (let key in fields) {
      if (!fields[key] || requiredFields[key] && fields[key].trim() === '') {
        this.fieldHasError(key, true);
        isValid = false;
      } else {
        this.fieldHasError(key, false);
      }
    }

    return { isValid, errorFields: { ...errorFields } };
  }

  stateCallBack = () => {
    const { stateCallBack } = this.props;
    const { form } = this.state;

    const isFormValid = this.formIsValid();

    if (isFormValid.isValid) {
      stateCallBack({ form });
    } else {
      stateCallBack({ ...isFormValid.errorFields })
    }
  }

  renderElement = (el, state, name, { optionConfig, ...rest }) => {
    let element = (
      <Input
        name={name}
        value={state.form[name]} {...rest}
        onChange={this.fillField} onBlur={this.stateCallBack}
      />
    );

    switch (el) {
      case 'input':
        return element = (
          <Input
            name={name}
            value={state.form[name]} {...rest}
            onChange={this.fillField} onBlur={this.stateCallBack}
            error={state.errorFields[name]}
          />
        );
      case 'select':
        return element = (
          <Select
            name={name}
            className={classes.Select} value={state.form[name]} {...rest}
            onChange={this.fillSelectHandle} onBlur={this.stateCallBack}
            options={optionConfig}
          />
        );
      case 'checkbox':
        return element = (
          <Checkbox
            name={name}
            value={state.form[name]} {...rest}
            onChange={this.fillField} onBlur={this.stateCallBack}
          />
        );
      default:
        return element;
    }
  }

  render() {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    );
  }
}
