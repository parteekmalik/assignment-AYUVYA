import { Rating } from "@mui/material";
import type { InputType } from "zlib";
import YN from "./YN";
import type { UseFormSetValue } from "react-hook-form";
import type { Inputs, InputsOutput } from "../_schema";
import type { z } from "zod";
import Optoons from "./Optoons";

function InputTypeCom({
  type,
  setValue,
  heading,
  options,
}: {
  type: InputType;
  heading: keyof InputsOutput;
  setValue: UseFormSetValue<z.output<Inputs>>;
  options?: string[];
}) {
  switch (type) {
    case "Star":
      return (
        <Rating
          defaultValue={1}
          size="large"
          onChange={(e) => {
            if ("value" in e.target && typeof e.target.value === "string")
              setValue(heading, Number(e.target.value));
          }}
        />
      );
    case "YN":
      return <YN onChange={(x: "yes" | "no") => setValue(heading, x)} />;
    case "option":
      return (
        <Optoons
          options={options}
          onChange={(x: string) => setValue(heading, x)}
        />
      );
    default:
      <div>unknown</div>;
  }
}

export default InputTypeCom;
