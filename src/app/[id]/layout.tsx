export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head>
          <title></title>
        </head>
        <body>{children}</body>
      </html>
    </>
  );
}
