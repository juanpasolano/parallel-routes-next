import SessionDialog from "@/components/SessionDialog";
import { getSession } from "@/lib/session";
import { FC } from "react";
interface SessionModalPageProps {
  params: Promise<{
    eventSlug: string;
    sessionSlug: string;
  }>;
}

const SessionModalPage: FC<SessionModalPageProps> = async ({ params }) => {
  const { sessionSlug, eventSlug } = await params;
  const session = await getSession(sessionSlug);
  const eventUrl = `/event/${eventSlug}`;

  if (!session) {
    return <div>Session not found</div>;
  }

  return (
    <div className="">
      <SessionDialog eventUrl={eventUrl} session={session} />
    </div>
  );
};

export default SessionModalPage;
