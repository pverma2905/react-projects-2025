import { z } from 'zod';

// 🧾 Zod schema for search form
export const searchSchema = z.object({
  keyword: z.string().optional(),
  category: z.string().optional(),
});

// 🧠 Type for search form data (used in React Hook Form)
export type SearchFormData = z.infer<typeof searchSchema>;

// 📋 Type for each search result item
export type SearchResultItem = {
  id: string;
  title: string;
};

// 📄 Type for item details (on DetailsPage)
export type ItemDetails = {
  id: string;
  title: string;
  description: string;
  // Add more fields if needed
};

