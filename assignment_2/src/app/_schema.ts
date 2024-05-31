import { z } from "zod";

export const FormSchema = z.object({
  Safety: z.number().min(1).max(5),
  Communication: z.number().min(1).max(5),
  "Would you recommend it?": z.enum(["yes", "no",""]),
  Pralse: z.string().min(1),
});
export type Inputs = typeof FormSchema;
export type InputsOutput = z.output<Inputs>;
