import React from "react";
import { Checkbox } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
export interface NOTELIST_ITEM {
  text: string;
  done: boolean;
  id: number;
}
export interface NOTELIST_PROPS {
  list: NOTELIST_ITEM[];
  onClick: (item: NOTELIST_ITEM) => void;
  onDelete: (item: NOTELIST_ITEM) => void;
}

export const NoteList: React.FC<NOTELIST_PROPS> = (props) => {
  const { list, onClick, onDelete } = props;
  return (
    <div className="list">
      {list.map((item, index) => {
        return (
          <div key={index} className="list-item-wrapper">
            <Checkbox onChange={() => onClick(item)}></Checkbox>
            <div className="list-item" onClick={() => onClick(item)}>
              {item.text}
            </div>
            <CloseCircleOutlined
              onClick={() => {
                onDelete(item);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
