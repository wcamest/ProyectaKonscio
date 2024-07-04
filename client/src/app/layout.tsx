import "./globals.css";

export async function generateMetadata() {
  return {
    openGraph: {
      images: [
        {
          url: `${process.env.MAIN_URL}/api/image/proyecta_konscio_og_logo.jpg`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
