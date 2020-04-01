// Source https://annacoding.com/article/10Sarw7UOPidixIhFDtnY5/How-to-generate-sitemap.xml-with-Next.js-build-in-server-and-Typescript?

import { SitemapStream, streamToPromise, EnumChangefreq } from 'sitemap';
import { createGzip } from 'zlib';

export default async (req, res) => {
  if (!res) return {};
  try {
    // Set response header
    res.setHeader('content-type', 'application/xml');
    res.setHeader('Content-Encoding', 'gzip');

    // A Transform for turning a Readable stream of either SitemapItemOptions or url strings into a Sitemap.
    // The readable stream it transforms must be in object mode.
    const smStream = new SitemapStream({
      hostname: 'https://www.gonzarascon.com',
    });

    const pipeline = smStream.pipe(createGzip());
    // Add any static entries here
    smStream.write({
      url: '/',
      lastmod: process.env.siteUpdatedAt,
      changefreq: EnumChangefreq.DAILY,
    });
    smStream.end();

    // cache the response
    // streamToPromise.then(sm => sitemap = sm)
    streamToPromise(pipeline);
    // stream the response
    pipeline.pipe(res).on('error', e => {
      throw e;
    });
  } catch (e) {
    res.status(500).end();
  }
};
