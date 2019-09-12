import React from 'react';

const List = ({ list, removeTodoHandle }) => (
  <ul>
    {list.map(item => <li key={item.id} onClick={() => removeTodoHandle(item.id)}>{item.text}</li>)}
  </ul>
);

export default List;