import "./globals.css";

export const metadata = {
  title: "Yvon Demol — Choreographer",
  description: "Portfolio of choreographer Yvon Demol.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
