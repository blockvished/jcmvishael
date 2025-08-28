export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex flex-col-reverse w-full items-start gap-x-10 gap-y-4 pt-10 pb-7 md:flex-row md:items-center">
      {children}
    </section>
  );
}
