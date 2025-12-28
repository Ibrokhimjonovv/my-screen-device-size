import { Montserrat } from 'next/font/google';
import "../styles/globals.scss";
import { ContextProvider } from '@/context/context';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

const montserrat = Montserrat({
  subsets: ['latin'], // Required: specify which subsets to preload
  display: 'swap', // Optional: controls font display behavior
  variable: '--font-montserrat', // Optional: defines a CSS variable name
  // If not using the variable font, specify weights:
  // weight: ['400', '700'], 
});

export const metadata = {
  title: "My Device Size ",
};

export default function RootLayout({ children }) {
  return (
    <ContextProvider>
      <html lang="en" className={`${montserrat.variable}`}>
        <head>
          <script
            type="module"
            src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
          ></script>
          <script
            nomodule
            src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
          ></script>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
          />
        </head>
        <body id='__next'>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ContextProvider>
  );
}
