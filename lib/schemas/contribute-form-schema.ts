import { z } from "zod";

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone number validation regex (supports various international formats)
const PHONE_REGEX =
  /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;

// Step 0: Institution, Country, Address, Chapter Name, Mapping Percentage
export const Step0Schema = z.object({
  institution: z
    .string()
    .min(1, "Institution name is required")
    .min(2, "Institution name must be at least 2 characters"),
  country: z.string().min(1, "Country is required"),
  address: z
    .string()
    .min(1, "Address is required")
    .min(3, "Address must be at least 3 characters"),
  chapterName: z
    .string()
    .min(1, "Chapter name is required")
    .min(2, "Chapter name must be at least 2 characters"),
  mappingPercentage: z
    .number()
    .min(1, "Please indicate campus mapping percentage")
    .max(100, "Mapping percentage cannot exceed 100"),
});

export type Step0FormData = z.infer<typeof Step0Schema>;

// Step 1: Contributor Details
export const Step1Schema = z.object({
  contributorName: z
    .string()
    .min(1, "Full name is required")
    .min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .regex(EMAIL_REGEX, "Please enter a valid email address"),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .regex(PHONE_REGEX, "Please enter a valid phone number"),
  roleInChapter: z
    .string()
    .min(1, "Role in chapter is required")
    .min(2, "Role must be at least 2 characters"),
});

export type Step1FormData = z.infer<typeof Step1Schema>;

// Step 2: File Uploads
export const Step2Schema = z.object({
  campusBoundary: z
    .instanceof(File, { message: "Campus boundary file is required" })
    .nullable()
    .refine((file) => file !== null, {
      message: "Campus boundary file is required",
    }),
  campusPicture: z
    .instanceof(File, { message: "Campus picture is required" })
    .nullable()
    .refine((file) => file !== null, { message: "Campus picture is required" }),
});

export type Step2FormData = z.infer<typeof Step2Schema>;

// Full form schema combining all steps
export const ContributeFormSchema = z.object({
  // Step 0
  institution: z
    .string()
    .min(1, "Institution name is required")
    .min(2, "Institution name must be at least 2 characters"),
  country: z.string().min(1, "Country is required"),
  address: z
    .string()
    .min(1, "Address is required")
    .min(3, "Address must be at least 3 characters"),
  chapterName: z
    .string()
    .min(1, "Chapter name is required")
    .min(2, "Chapter name must be at least 2 characters"),
  mappingPercentage: z
    .number()
    .min(1, "Please indicate campus mapping percentage")
    .max(100, "Mapping percentage cannot exceed 100"),
  // Step 1
  contributorName: z
    .string()
    .min(1, "Full name is required")
    .min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .regex(EMAIL_REGEX, "Please enter a valid email address"),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .regex(PHONE_REGEX, "Please enter a valid phone number"),
  roleInChapter: z
    .string()
    .min(1, "Role in chapter is required")
    .min(2, "Role must be at least 2 characters"),
  // Step 2
  campusBoundary: z
    .instanceof(File, { message: "Campus boundary file is required" })
    .nullable(),
  campusPicture: z
    .instanceof(File, { message: "Campus picture is required" })
    .nullable(),
});

export type ContributeFormType = z.infer<typeof ContributeFormSchema>;
