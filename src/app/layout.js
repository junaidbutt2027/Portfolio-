import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Personal Portfolio",
  description: "Personal Portfolio converted to Next.js App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/assets/css/vendor/bootstrap.css" />
        <link rel="stylesheet" href="/assets/css/vendor/animation.css" />
        <link rel="stylesheet" href="/assets/css/plugins/fontawesome.css" />
        <link rel="stylesheet" href="/assets/css/plugins/lightbox.css" />
        <link rel="stylesheet" href="/assets/css/plugins/box-video.css" />
        <link rel="stylesheet" href="/assets/css/plugins/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/plugins/swiper.css" />
        <link rel="stylesheet" href="/assets/css/vendor/spacing.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body suppressHydrationWarning>
        {children}

        {/* Load legacy jQuery and Modernizr before interactive */}
        <Script src="/assets/js/vendor/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/plugins/modernizr.js" strategy="beforeInteractive" />

        {/* Load all other plugins and script dependencies */}
        <Script src="/assets/js/vendor/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/animation.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/counterup.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/gsap.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/scroll-trigger.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/text-type.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/magnifying-popup.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/hover-effect.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/lightbox.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/box-video.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/onepagenav.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/swiper.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/typed.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/waypoint.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/wow.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/contact.form.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/smooth-scroll.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/backtotop.js" strategy="afterInteractive" />
        
        {/* Load main.js after plugins */}
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
