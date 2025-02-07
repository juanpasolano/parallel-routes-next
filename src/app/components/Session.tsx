"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Session({
  sessionSlug,
  eventSlug,
}: {
  sessionSlug: string;
  eventSlug: string;
}) {
  const router = useRouter();
  return (
    <div className="">
      My session modal
      <p>Session: {sessionSlug}</p>
      <button onClick={() => router.push(`/event/${eventSlug}`)}>
        Back to event with push
      </button>
      <br />
      <Link href={`/event/${eventSlug}`}>Back to event</Link>
    </div>
  );
}
