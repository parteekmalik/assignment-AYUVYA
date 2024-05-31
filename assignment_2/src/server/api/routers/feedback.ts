
import { FormSchema } from "~/app/_schema";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

let feedback = {
  id: 1,
  name: {},
};

export const feedbackRouter = createTRPCRouter({
  create: publicProcedure.input(FormSchema).mutation(async ({ input }) => {
    feedback = { id: feedback.id + 1, name: input };
    console.log(input);
    return feedback;
  }),

  getLatest: publicProcedure.query(() => {
    return feedback;
  }),
});
