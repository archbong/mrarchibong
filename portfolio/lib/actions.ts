"use client";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/client";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  projectType: z
    .enum(["api", "automation", "maintenance", "consultation", "other"])
    .optional(),
});

export async function createContact(data: {
  name: string;
  email: string;
  company?: string;
  message: string;
  projectType?: "api" | "automation" | "maintenance" | "consultation" | "other";
}) {
  try {
    const validatedData = contactSchema.parse(data);

    const supabase = createClient();
    const { error } = await supabase.from("contact").insert([
      {
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company || null,
        message: validatedData.message,
        project_type: validatedData.projectType || "consultation",
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error("Error submitting form:", error.message);
      return {
        success: false,
        error:
          "Failed to save your message. Please try again or email me directly.",
      };
    }

    // Send notification email (you can implement this later)
    console.log("Backend inquiry received:", {
      name: validatedData.name,
      email: validatedData.email,
      company: validatedData.company,
      projectType: validatedData.projectType,
      messagePreview: validatedData.message.substring(0, 100) + "...",
    });

    return { success: true };
  } catch (error: any) {
    console.error("Validation error:", error);

    if (error instanceof z.ZodError) {
      const firstError = error.errors[0];
      return {
        success: false,
        error: `Validation error: ${firstError.message}`,
      };
    }

    return {
      success: false,
      error: error.message || "An unknown error occurred. Please try again.",
    };
  }
}

export async function login(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
