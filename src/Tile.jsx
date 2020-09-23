import React from "react";
import { useEffect, useRef } from "react";
import styled from "styled-components";

export default ({ type }) => {
  const canvas = useRef();
  let ctx = undefined;
  useEffect(() => {
    let x = 2;
    let y = 2;
    ctx = canvas.current.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(40 * x, 20 * y);
    ctx.lineTo(60 * x, 20 * y);
    ctx.lineTo(80 * x, 40 * y);
    ctx.lineTo(80 * x, 60 * y);
    ctx.lineTo(60 * x, 80 * y);
    ctx.lineTo(40 * x, 80 * y);
    ctx.lineTo(20 * x, 60 * y);
    ctx.lineTo(20 * x, 40 * y);
    ctx.closePath();
    ctx.strokeStyle = "green";
    ctx.stroke();
    ctx.font = "20px serif";
    console.log(ctx);
    ctx.fillText(type, 40 * x, 52 * x);
  }, []);

  // draw rectangle
  const drawRect = (info, style = {}) => {
    const { x, y, w, h } = info;
    const { borderColor = "black", borderWidth = 1 } = style;

    ctx.beginPath();
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = borderWidth;
    ctx.rect(x, y, w, h);
    ctx.stroke();
  };

  // draw rectangle with background
  const drawFillRect = (info, style = {}) => {
    const { x, y, w, h } = info;
    const { backgroundColor = "black" } = style;

    ctx.beginPath();
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(x, y, w, h);
  };

  return (
    <>
      <Text id="hexagon">This is a {type} Tile</Text>
      <canvas ref={canvas} height="200"></canvas>
    </>
  );
};
const Text = styled.div`
  border: 1px solid black;
  margin: 5px 0 5px 0;
`;
