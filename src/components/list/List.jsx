import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material';
import { useRef, useState } from 'react';
import ListItem from '../listItem/ListItem';
import './list.scss';

export default function List({ list, index }) {
  const listRef = useRef();

  return (
    <div className="list">
      <div className="wrapper">
        <div className="container" ref={listRef}>
          {list &&
            list.items.map((item, index) => {
              return <ListItem key={index} item={item} index={index} />;
            })}
        </div>
      </div>
    </div>
  );
}
