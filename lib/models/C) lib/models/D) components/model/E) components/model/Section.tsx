export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} style={{ padding: "48px 16px", maxWidth: 1100, margin: "0 auto" }}>
      <h2 style={{ fontSize: 26, marginBottom: 16 }}>{title}</h2>
      <div style={{ lineHeight: 1.6 }}>{children}</div>
      <hr style={{ border: 0, borderTop: "1px solid #e6e6e6", marginTop: 40 }} />
    </section>
  );
}
