import * as z from 'zod';
import { pick } from './utils/common';

const environmentSchema = z.object({
  SUBSTACK_URL: z.string(),
  GITHUB_URL: z.string(),
  GA_TRACKING_ID: z.string(),
  SITE_URL: z.string(),
});

const environment = () => environmentSchema.parse(process.env);

export const getPublicEnvs = () => ({
  ENV: pick(environment(), ['SUBSTACK_URL', 'GITHUB_URL', 'GA_TRACKING_ID']),
});

export { environment };
