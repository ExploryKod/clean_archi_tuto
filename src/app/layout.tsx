import { Roboto, Inter, Roboto_Mono, Oswald } from "next/font/google";
// Import de notre monde à nous - et plus précisément celui de react - dans la logique de Next.js
import { Layout } from "@taotask/modules/app/react/Layout";
import { AppWrapper } from "@taotask/modules/app/react/AppWrapper";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

// Ajout de la police Inter
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Ajout de la police Roboto Mono
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
})

export const metadata = {
  title: "Ratatouille",
  description: "Réservation de tables de restaurant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${roboto_mono.variable} ${oswald.variable}`}>
      <body className={roboto.className}>
        <AppWrapper>
          <Layout>{children}</Layout>
        </AppWrapper>
      </body>
    </html>
  );
}
