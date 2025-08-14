import { Fonts } from "@/config/fonts";
import { metadata } from "@/config/metadata";
import "./globals.css";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Fonts.geistSans.className} ${Fonts.geistMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
