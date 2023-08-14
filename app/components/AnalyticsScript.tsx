import { getPublicEnv } from './PublicEnv';

export function AnalyticsScript() {
  if (process.env.NODE_ENV !== 'production') return null;
  return (
    <>
      <noscript>
        <iframe
          title="gtm"
          src={`https://www.googletagmanager.com/ns.html?id=${getPublicEnv(
            'GA_TRACKING_ID',
          )}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}></iframe>
      </noscript>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${getPublicEnv(
          'GA_TRACKING_ID',
        )}`}
      />
      <script
        async
        id="gtag-init"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer',"${getPublicEnv('GA_TRACKING_ID')}");`,
        }}
      />
    </>
  );
}
