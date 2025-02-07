import Link from "next/link";

interface EventPageProps {
  params: Promise<{
    eventSlug: string;
  }>;
}

export default async function EventPage({ params }: EventPageProps) {
  const { eventSlug } = await params;
  console.log("🚀 ~ EventPage ~ eventSlug:", eventSlug);
  return (
    <div>
      <h1>Event: {eventSlug}</h1>
      <Link href={`/event/${eventSlug}/456`}>Session 123</Link>
    </div>
  );
}
