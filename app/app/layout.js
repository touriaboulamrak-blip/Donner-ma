export const metadata = {
  title: "Donner.ma",
  description: "Plateforme marocaine de dons gratuits entre particuliers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
