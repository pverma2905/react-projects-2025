import { z } from 'zod';

/**
 * ✅ Zod schema for form validation
 */
export const searchSchema = z.object({
  keyword: z.string().optional(),
  category: z.string().optional(),
});

/**
 * ✅ Type from Zod schema for use in forms
 */
export type SearchFormData = z.infer<typeof searchSchema>;

/**
 * ✅ Shape of one search result item
 * Returned from: POST /api/search
 */
export type SearchResultItem = {
  id: string;
  title: string;
  category?: string;
};

/**
 * ✅ Full detail type
 * Returned from: GET /api/details/:id
 */
export type ItemDetails = {
  id: string;
  title: string;
  category?: string;
  description: string;
  createdAt?: string;
};
