export default function ProfileLayout({
  params,
  children,
}: {
  params: { id: string };
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head>
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content={`/api/publication?id=${params.id}`}
          />
        </head>
        <body>{children}</body>
      </html>
    </>
  );
}
