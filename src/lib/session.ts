import { z } from "zod";

const fetchJson = async (path: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}${path}`);
  const json = await response.json();
  const data = sessionSchema.parse(json);
  return data;
};

const sessionSchema = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    description: z.string(),
  })
);

export type Session = z.infer<typeof sessionSchema>[number];

export const getSessions = async () => {
  const sessions = await fetchJson("/data/sessions.json");
  return sessions;
};

export const getSession = async (sessionSlug: string) => {
  const sessions = await getSessions();
  return sessions.find((session) => session.slug === sessionSlug);
};
