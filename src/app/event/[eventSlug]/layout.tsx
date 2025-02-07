export default function EventLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: React.ReactNode;
}) {
  return (
    <div>
      {children}
      ----
      {session}
    </div>
  );
}
