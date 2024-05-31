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
      <h2 className="mb-1 text-3xl">{props.heading}</h2>
      <h3 className="mb-3 text-xl">{props.discription}</h3>
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
