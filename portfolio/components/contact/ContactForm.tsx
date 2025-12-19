"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createContact } from "@/lib/actions";
import { Report } from "notiflix/build/notiflix-report-aio";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  company: z.string().optional(),
  message: z.string().min(10, {
    message: "Please provide more details about your backend needs",
  }),
  projectType: z
    .enum(["api", "automation", "maintenance", "consultation", "other"])
    .optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const projectTypeOptions = [
  { value: "api", label: "API Development" },
  { value: "automation", label: "Backend Automation" },
  { value: "maintenance", label: "API Maintenance" },
  { value: "consultation", label: "Technical Consultation" },
  { value: "other", label: "Other Backend Need" },
];

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      projectType: "consultation",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setFormStatus("loading");
    setErrorMessage(null);

    const result = await createContact(data);

    if (result.success) {
      setFormStatus("success");
      Report.success(
        "Message Sent",
        "I'll review your backend requirements and get back to you within 24 hours.",
        "Close",
        {
          width: "400px",
          svgSize: "100px",
          titleFontSize: "20px",
          messageFontSize: "16px",
        },
      );
      reset();
    } else {
      setFormStatus("error");
      setErrorMessage(
        result.error || "Failed to send message. Please try again.",
      );
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-slate-700"
            >
              Your Name *
            </label>
            <Input
              id="name"
              {...register("name")}
              placeholder="John Smith"
              className={errors.name ? "border-red-300" : ""}
            />
            {errors.name && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-700"
            >
              Email Address *
            </label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="john@company.com"
              className={errors.email ? "border-red-300" : ""}
            />
            {errors.email && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="company"
            className="text-sm font-medium text-slate-700"
          >
            Company (Optional)
          </label>
          <Input
            id="company"
            {...register("company")}
            placeholder="Your company name"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">
            What type of backend help do you need?
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {projectTypeOptions.map((option) => (
              <div key={option.value} className="flex items-center">
                <input
                  type="radio"
                  id={option.value}
                  value={option.value}
                  {...register("projectType")}
                  className="hidden peer"
                />
                <label
                  htmlFor={option.value}
                  className="w-full text-center py-2 px-3 text-sm border border-slate-300 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:border-slate-400 transition-colors"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-slate-700"
          >
            Tell me about your backend challenge *
          </label>
          <Textarea
            id="message"
            {...register("message")}
            placeholder="Describe your API needs, automation requirements, or backend issues..."
            rows={5}
            className={errors.message ? "border-red-300" : ""}
          />
          {errors.message && (
            <p className="text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.message.message}
            </p>
          )}
          <p className="text-sm text-slate-500">
            Be as specific as possible about performance issues, scalability
            needs, or automation goals.
          </p>
        </div>

        <div className="space-y-4">
          <Button
            type="submit"
            disabled={formStatus === "loading"}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold"
          >
            {formStatus === "loading" ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Sending Message...
              </>
            ) : (
              "Send Message & Get Backend Solutions"
            )}
          </Button>

          {formStatus === "success" && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-3 text-green-700">
                <CheckCircle className="w-5 h-5" />
                <div>
                  <p className="font-medium">Message sent successfully!</p>
                  <p className="text-sm mt-1">
                    I&apos;ll review your backend requirements and get back to
                    you within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          )}

          {formStatus === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center gap-3 text-red-700">
                <AlertCircle className="w-5 h-5" />
                <div>
                  <p className="font-medium">Failed to send message</p>
                  <p className="text-sm mt-1">{errorMessage}</p>
                  <p className="text-sm mt-2">
                    Please try again or email me directly at{" "}
                    <a
                      href="mailto:hello@mrarchibong.com"
                      className="underline hover:text-red-800"
                    >
                      hello@mrarchibong.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}

          <p className="text-center text-sm text-slate-500">
            By submitting this form, you agree to receive a response regarding
            your backend inquiry. Your information will be kept confidential.
          </p>
        </div>
      </form>
    </div>
  );
}
