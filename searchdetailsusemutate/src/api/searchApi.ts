import { z } from "zod";

export const searchSchema = z.object({
  keyword: z.string().optional(),
});

export type SearchPayload = z.infer<typeof searchSchema>;

export const postSearchApi = async (payload: SearchPayload): Promise<any[]> => {
  console.log("API called with payload:", payload);
  await new Promise((r) => setTimeout(r, 500));
  return [
    { id: "1", name: "John Doe", age: 30 },
    { id: "2", name: "Jane Smith", age: 25 },
  ];
};

