import z from 'zod';

export const userFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")  
        .regex(/\d/, "Password must contain at least one number"),
    confirmPassword: z.string(),
    age: z.number().int().min(0, "Age must be a positive integer"),
    phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
    gender: z.enum(['male', 'female', 'other'], {
        errorMap: () => ({ message: "please select valid gender" })
    })
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
});

export type UserFormData = z.infer<typeof userFormSchema>;

export type FormErrors = Partial<Record<keyof UserFormData, string>>;