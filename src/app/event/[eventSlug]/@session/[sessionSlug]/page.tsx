import Session from "@/app/components/Session";
import { FC } from "react";

interface SessionModalPageProps {
  params: Promise<{
    eventSlug: string;
    sessionSlug: string;
  }>;
}

const SessionModalPage: FC<SessionModalPageProps> = async ({ params }) => {
  const { sessionSlug, eventSlug } = await params;
  return (
    <div className="">
      {eventSlug}
      <Session sessionSlug={sessionSlug} eventSlug={eventSlug} />
    </div>
  );
};

export default SessionModalPage;
