import React, { useEffect, useState } from "react";

function Optoons(props: { options?: string[]; onChange: (x: string) => void }) {
  const [value, setvalue] = useState("");
  useEffect(() => {
    props.onChange(value);
  }, [value]);
  return (
    <div className="flex gap-2">
      {props.options?.map((item) => {
        return (
          <div
            className={
              "rounded-3xl p-2 hover:cursor-pointer hover:bg-green-300 " +
              (value === item ? "bg-green-400" : "")
            }
            key={"option" + item}
            onClick={() => setvalue(item)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default Optoons;
