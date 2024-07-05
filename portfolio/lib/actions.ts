"use client";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/client";

const contactSchema = z.object({
  name: z.string(),
  email: z.string().email("Invalid email address"),
  message: z.string(),
});

export async function createContact(data: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    const validatedData = contactSchema.parse(data);

    const { error } = await createClient()
      .from("contact")
      .insert([
        {
          name: validatedData.name,
          email: validatedData.email,
          message: validatedData.message,
        },
      ]);

      if (error) {
        console.error('Error submitting form:', error.message);
      } else {
        console.log('Form submitted successfully:');
      }
    return { success: true };
  } catch (error: any) {
    return {
      success: false,
      error: error.message || "An unknown error occurred",
    };
  }
}

export async function login(formData: FormData) {
    const supabase = createClient()
  
    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }
  
    const { error } = await supabase.auth.signInWithPassword(data)
  
    if (error) {
      redirect('/error')
    }
  
    revalidatePath('/', 'layout')
    redirect('/')
  }
  
  export async function signup(formData: FormData) {
    const supabase = createClient()
  
    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }
  
    const { error } = await supabase.auth.signUp(data)
  
    if (error) {
      redirect('/error')
    }
  
    revalidatePath('/', 'layout')
    redirect('/')
  }