"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Session } from "@/lib/session";
import { useRouter } from "next/navigation";

export default function SessionDiealog({
  eventUrl,
  session,
}: {
  eventUrl: string;
  session: Session;
}) {
  const router = useRouter();
  const onOpenChange = (open: boolean) => {
    if (!open) {
      router.push(eventUrl);
    }
  };
  return (
    <Dialog open onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{session.name}</DialogTitle>
          <DialogDescription>{session.description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
