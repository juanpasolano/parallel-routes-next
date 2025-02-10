import Link from "next/link";
import { getSessions } from "@/lib/session";

interface EventPageProps {
  params: Promise<{
    eventSlug: string;
  }>;
}

export default async function EventPage({ params }: EventPageProps) {
  const { eventSlug } = await params;
  const sessions = await getSessions();
  return (
    <div>
      <h1>Event: {eventSlug}</h1>
      <div className="flex gap-4">
        {sessions.map((session) => (
          <Link
            className="hover:bg-foreground/10 w-52 flex aspect-square flex-col items-center justify-center border rounded-md"
            href={`/event/${eventSlug}/${session.slug}`}
            key={session.id}
          >
            <h2 className="text-lg font-bold">{session.name}</h2>
            <p className="text-sm text-muted-foreground">
              {session.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
