import React, { useState } from "react";
import Calendar from "react-calendar";

export function Calender(props) {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <Calendar onChange={onChange} value={value} />
    </>
  );
}
