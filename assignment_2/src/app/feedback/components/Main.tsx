import type { UseFormSetValue } from "react-hook-form";
import type { z } from "zod";
import type { Inputs, InputsOutput } from "../_schema";
import InputTypeCom from "./InputTypeCom";
export type InputType = "Star" | "YN" | "option";
function Main(props: {
  discription: string;
  heading: keyof InputsOutput;
  setValue: UseFormSetValue<z.output<Inputs>>;
  type: InputType;
  options?: string[];
}) {
  return (
    <div>
      <h2 className="text-3xl mb-1">{props.heading}</h2>
      <h3 className="text-xl mb-3">{props.discription}</h3>
      <InputTypeCom
        type={props.type}
        setValue={props.setValue}
        heading={props.heading}
        options={props.options}
      />
    </div>
  );
}

export default Main;
