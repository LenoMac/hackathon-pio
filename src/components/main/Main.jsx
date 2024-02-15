import React from "react";
import "./main.scss";
import Customblock from "../customblock/Customblock";
import { CiSearch } from "react-icons/ci";
import PrimaryButton from "../../../ui/button/button";
import { useNavigate } from "react-router-dom";
export default function Main() {
  const navigate = useNavigate();

  const blockList = [
    {
      title: "Hello",
      id: Math.random().toString(),
      name: "con",
    },
    {
      title: "Hello",
      id: Math.random().toString(),
      name: "gis",
    },
    {
      title: "Hello",
      id: Math.random().toString(),
    },
    {
      title: "Hello",
      id: Math.random().toString(),
    },
    {
      title: "Hello",
      id: Math.random().toString(),
    },
    {
      title: "Hello",
      id: Math.random().toString(),
    },
    {
      title: "Hello",
      id: Math.random().toString(),
    },
    {
      title: "Hello",
      id: Math.random().toString(),
    },
  ];

  const onClick = (name) => {
    navigate("/" + name);
  };

  return (
    <div className="main">
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, odio.
      </h1>
      <div className="input">
        <input placeholder="Поиск" autoComplete="off" type="text" />
        <PrimaryButton title="Поиск" />
      </div>
      <div className="block_list">
        {blockList.map((item) => {
          return (
            <Customblock
              onClick={() => onClick(item.name)}
              key={item.id}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
}
