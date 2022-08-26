import React, { useState } from "react";
import { Button, Input } from "antd";

interface HEADER_PROPS {
  title: string;
  setInputText: (str: string) => void;
}
export const HeaderComponent: React.FC<HEADER_PROPS> = ({
  title,
  setInputText,
}) => {
  const [text, setText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    setText(inputValue);
  };
  return (
    <>
      <h1>{title}</h1>
      <div className="headerinput">
        <Input
          style={{
            width: "200px",
          }}
          onChange={handleChange}
        />
        <Button
          style={{ marginLeft: "10px" }}
          type="primary"
          onClick={() => {
            setInputText(text);
          }}
        >
          点我添加
        </Button>
      </div>
    </>
  );
};
