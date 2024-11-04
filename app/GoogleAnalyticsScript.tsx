import Script from "next/script";

//I use my web site from News-HomePage https://news-hompage-kappa.vercel.app
// not in this project becase I don't deploy yet. I'm just tesing.

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-42CY1D4P5S"
      ></Script>
      <Script id="google_analytics">
        {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-42CY1D4P5S');`}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScript;
