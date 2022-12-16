import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import Picture from './Picture';
import './dragDrop.css';

const pictureList = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=150&q=60',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=150&q=60',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=150&h=100&q=60',
  },
];
const DragDrop = () => {
  const [board, setBoard] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const picture_list = pictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, picture_list[0]]);
  };
  return (
    <>
      <div className="pictures">
        {pictureList.map((picture, key) => {
          return <Picture key={key} src={picture.url} id={picture.id} />;
        })}
      </div>

      <div className="board" ref={drop}>
        {board.map((picture, key) => {
          return <Picture key={key} src={picture.url} id={picture.id} />;
        })}
      </div>
    </>
  );
};

export default DragDrop;
