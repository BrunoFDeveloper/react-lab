import React from 'react';
import style from './style.module.scss';
import { Button } from 'semantic-ui-react';

const SlideControls = ({ titleSlide, slideHandle }) => (
  <div className={style.Controls}>
    <Button icon="chevron left" onClick={() => slideHandle('-')} />

    <span className={style.TitleControl}>{titleSlide}</span>

    <Button icon="chevron right" onClick={() => slideHandle('+')} />
  </div>
);

export default SlideControls;