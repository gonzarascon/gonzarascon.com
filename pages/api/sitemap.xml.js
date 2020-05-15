// Source https://annacoding.com/article/10Sarw7UOPidixIhFDtnY5/How-to-generate-sitemap.xml-with-Next.js-build-in-server-and-Typescript?

import { SitemapStream, streamToPromise, EnumChangefreq } from 'sitemap';
import { createGzip } from 'zlib';

export default async (req, res) => {
  let sitemap = null;
  if (!res) return {};
  try {
    // Set response header
    res.setHeader('content-type', 'application/xml');
    res.setHeader('Content-Encoding', 'gzip');

    if (sitemap) {
      res.write(sitemap);
      res.end();
      return {
        props: {},
      };
    }

    // A Transform for turning a Readable stream of either SitemapItemOptions or url strings into a Sitemap.
    // The readable stream it transforms must be in object mode.
    const smStream = new SitemapStream({
      hostname: 'https://www.gonzarascon.com',
    });

    const pipeline = smStream.pipe(createGzip());
    // Add any static entries here
    smStream.write({
      url: '/',
      changefreq: EnumChangefreq.DAILY,
    });
    smStream.end();

    // cache the response
    // streamToPromise.then(sm => sitemap = sm)
    const resp = await streamToPromise(pipeline);
    // stream the response

    res.write(resp);
    res.end();
  } catch (e) {
    res.status(500).end();
  }
};
