import React, { useState, useCallback } from "react";
import "./styles.css";

type ListItem = {
  id: string;
  order: number;
  title: string;
};

type OrderedListProps = {
  data: ListItem[];
};

const OrderedList: React.FC<OrderedListProps> = ({ data }) => {
  const [list, setList] = useState(data);

  const onDragStart = useCallback((event: React.DragEvent<HTMLLIElement>, index: number) => {
    event.dataTransfer.setData("index", index.toString());
    event.currentTarget.classList.add("hovering");
  }, []);

  const onDragEnd = useCallback((event: React.DragEvent<HTMLLIElement>) => {
    event.currentTarget.classList.remove("hovering");
  }, []);

  const onDragOver = useCallback((event: React.DragEvent<HTMLUListElement>) => {
    event.preventDefault();
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLLIElement>, dropIndex: number) => {
      const dragIndex = Number(event.dataTransfer.getData("index"));
      const newList = [...list];
      const [removed] = newList.splice(dragIndex, 1);
      newList.splice(dropIndex, 0, removed);
      setList(newList);
    },
    [list]
  );

  return (
    <ul onDragOver={onDragOver}>
      {list.map((item, index) => (
        <li
          className="item_container"
          key={item.id}
          draggable
          onDragStart={(event) => onDragStart(event, index)}
          onDragEnd={onDragEnd}
          onDrop={(event) => onDrop(event, index)}
          onDragOver={(event) => event.preventDefault()}
        >
          {item.order} {item.title}
        </li>
      ))}
    </ul>
  );
};

export default OrderedList;
