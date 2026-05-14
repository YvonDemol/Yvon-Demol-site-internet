import './globals.css';

export const metadata = {
  title: 'Yvon Demol — Chorégraphe',
  description: 'Portfolio chorégraphique de Yvon Demol : Supercorps, Ultra, Main Character, Minuit.',
  openGraph: {
    title: 'Yvon Demol — Chorégraphe',
    description: 'Portfolio chorégraphique de Yvon Demol.',
    type: 'website',
    images: ['/images/supercorps/01.jpeg']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
