"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import Main from "./_components/Main";
import type { Inputs } from "./_schema";
import type { late, z } from "zod";
import { api } from "~/trpc/react";
const defaultValues: z.output<Inputs> = {
  Safety: 1,
  Communication: 1,
  "Would you recommend it?": "",
  Pralse: "",
};
function Page() {
  const [isSubmitted, setisSubmitted] = useState(false);
  const FormAPI = api.feedback.create.useMutation({
    onSettled: (data) => {
      setisSubmitted(true);
    },
  });
  const formState = useForm<z.output<Inputs>>({
    defaultValues,
  });
  useEffect(() => {
    ErrorDisplay(formState.watch());
  }, [formState.watch()]);

  const ErrorDisplay = (data: z.output<Inputs>) => {
    let isError = false;
    if (data.Pralse.length === 0) {
      formState.setError("Pralse", {
        type: "manual",
        message: "Pralse Should Be selected!",
      });
      isError = true;
    } else formState.clearErrors("Pralse");
    if (data["Would you recommend it?"] === "") {
      formState.setError("Would you recommend it?", {
        type: "manual",
        message: "Would you recommend it? Should Be selected!",
      });
      isError = true;
    } else formState.clearErrors("Would you recommend it?");
    return false;
  };
  const onSubmit: SubmitHandler<z.output<Inputs>> = (data) => {
    console.log(data);
    if (!ErrorDisplay(data)) {
      FormAPI.mutate(data);
    }
  };

  return (
    <div className=" flex h-full w-full items-center justify-center  ">
      <div className="m-4 rounded-xl border-2 p-10 shadow-lg ">
        {isSubmitted ? (
          <>
            <div>submitted</div>
            <button
              className="text-xxl rounded-xl bg-blue-600 px-4 py-2 text-white"
              onClick={() => {
                formState.reset(defaultValues);
                setisSubmitted(false);
              }}
            >
              Submi again
            </button>
          </>
        ) : (
          <>
            <form
              onSubmit={formState.handleSubmit(onSubmit)}
              className="flex flex-col gap-6"
            >
              <h1 className="text-4xl">Leave a Review</h1>
              <Main
                setValue={formState.setValue}
                heading="Safety"
                discription="some discription"
                type="Star"
              />
              <Main
                setValue={formState.setValue}
                heading="Communication"
                discription="some discription"
                type="Star"
              />
              <Main
                setValue={formState.setValue}
                heading="Would you recommend it?"
                discription="some discription"
                type="YN"
              />
              <Main
                setValue={formState.setValue}
                heading="Pralse"
                discription="some discription"
                type="option"
                options={["sdfasd", "sdasdasd", "asfsgahgf"]}
              />
              {formState.formState.errors.Pralse && (
                <p className="text-xl text-red-800 ">
                  {formState.formState.errors.Pralse.message}
                </p>
              )}
              {formState.formState.errors["Would you recommend it?"] && (
                <p className="text-xl text-red-800 ">
                  {
                    formState.formState.errors["Would you recommend it?"]
                      .message
                  }
                </p>
              )}
              <input
                type="submit"
                className="rounded-lg bg-blue-600 px-3 py-1 text-xl text-white hover:cursor-pointer"
              />
            </form>
            {JSON.stringify(formState.watch())}
          </>
        )}
      </div>
    </div>
  );
}

export default Page;
