"use client";

import React, { useActionState, useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { formSchema } from "@/lib/validation";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { createPitch } from "@/lib/actions";

const StartupForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState("");
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (
    previousState: Record<string, string>,
    formData: FormData
  ) => {
    try {
      const formValues = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        category: formData.get("category") as string,
        link: formData.get("link") as string,
        pitch,
      };
      console.log(formValues);
      await formSchema.parseAsync(formValues);

      console.log(formValues);

      const result = await createPitch(previousState, formData, pitch);

      if (result.status === "SUCCESS") {
        toast({
          title: "Success",
          description: "Startup created successfully",
          variant: "default",
        });

        router.push(`/startup/${result._id}`);
      }

      return result;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fielErrors = error.flatten().fieldErrors;
        setErrors(fielErrors as unknown as Record<string, string>);

        toast({
          title: "Error",
          description: "Please check your inputs and try again",
          variant: "destructive",
        });

        return {
          ...previousState,
          error: "Validation failed",
          status: "ERROR",
        };
      }
      toast({
        title: "Error",
        description: "Something went wrong, please try again",
        variant: "destructive",
      });
      return {
        ...previousState,
        error: "Something went wrong",
        status: "ERROR",
      };
    } finally {
    }
  };
  const [state, formAction, isPending] = useActionState(handleSubmit, {
    error: "",
    status: "INITIAL",
  });

  return (
    <form
      action={formAction}
      className="startup-form"
    >
      <div>
        <label
          htmlFor="title"
          className="startup-form_label"
        >
          Title
        </label>
        <Input
          id="title"
          name="title"
          className="startup-form_input"
          placeholder="Startup Title"
        />
        {errors.title && <p className="startup-form_error">{errors.title}</p>}
      </div>
      <div>
        <label
          htmlFor="description"
          className="startup-form_label"
        >
          Description
        </label>
        <Textarea
          id="description"
          name="description"
          className="startup-form_textarea"
          placeholder="Startup Description"
        />
        {errors.description && (
          <p className="startup-form_error">{errors.description}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="category"
          className="startup-form_label"
        >
          Category
        </label>
        <Input
          id="category"
          name="category"
          className="startup-form_input"
          placeholder="Startup Category (Tech, Health, Education, etc.)"
        />
        {errors.category && (
          <p className="startup-form_error">{errors.category}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="link"
          className="startup-form_label"
        >
          Link
        </label>
        <Input
          id="link"
          name="link"
          className="startup-form_input"
          placeholder="Startup Image url"
        />
        {errors.link && <p className="startup-form_error">{errors.link}</p>}
      </div>
      <div data-color-mode="light">
        <label
          htmlFor="pitch"
          className="startup-form_label"
        >
          Link
        </label>
        <MDEditor
          value={pitch}
          onChange={(value) => setPitch(value as string)}
          id="pitch"
          height={300}
          style={{ borderRadius: 20, overflow: "hidden" }}
          textareaProps={{
            placeholder:
              "Briefly describe your idea and what problem it solves",
          }}
          previewOptions={{ disallowedElements: ["style"] }}
        />
        {errors.link && <p className="startup-form_error">{errors.link}</p>}
      </div>
      <Button
        className="startup-form_btn"
        disabled={isPending}
      >
        {isPending ? "Submitting..." : "Submit Your Pitch"}
        <Send className="size-6 ml-2" />
      </Button>
    </form>
  );
};

export default StartupForm;
