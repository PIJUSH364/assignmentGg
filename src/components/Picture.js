import React from 'react';
import './dragDrop.css';
import { useDrag } from 'react-dnd';

const Picture = ({ id, src }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <img
      className="unique_pic"
      ref={drag}
      src={src}
      alt={id}
      style={{
        borderRadius: isDragging ? '15px' : '0px',
      }}
    />
  );
};

export default Picture;
