export default function ProfileLayout({
  params,
  children,
}: {
  params: { id: string };
  children: React.ReactNode;
}) {
  const handle = params.id.slice(3);

  return (
    <>
      <html lang="en">
        <head>
          <title>{`@${handle}`}</title>
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`@${handle}`} />
          <meta
            property="og:image"
            content={`/api/profile?handle=@${handle}`}
          />
        </head>
        <body>{children}</body>
      </html>
    </>
  );
}
