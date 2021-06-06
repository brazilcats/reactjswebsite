import React from 'react';

const ItemChild = ({person}) => {

  return (
    <div>
    <h1>aqui { person.id + ' - ' + person.name }</h1>
    </div>
  )

}

export default ItemChild;