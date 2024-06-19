// analytics.js

export const initGA = () => {
    if (process.env.NODE_ENV === 'production') {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=G-LL4JR6BV16`;
      document.head.appendChild(script);
  
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
  
      gtag('config', 'G-LL4JR6BV16');
    }
  };
  