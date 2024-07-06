import {
  JOB_TAB_PARAMS_SET,
  JOB_TAB_PARAMS_VALUES,
  JobTabParamsText,
} from '~/core/constants';
import { PageProps } from '~/core/types';

const getSanitizedTab = (tab: JobTabParamsText) => {
  return JOB_TAB_PARAMS_SET.has(tab) ? tab : JOB_TAB_PARAMS_VALUES[0];
};

const FRAME_SERVER_URL = process.env.FRAME_SERVER_URL;
const FE_SERVER_URL = process.env.NEXT_PUBLIC_FE_URL;

const title = 'JobStash';
const description = 'The Ultimate Crypto Native Job Aggregator';

export const getMetadataFn =
  (isElite = false) =>
  async ({ params: { id, tab } }: PageProps) => {
    const sanitizedTab = getSanitizedTab(tab);

    const imageURL = new URL(`${FRAME_SERVER_URL}/api/jobs`);
    imageURL.searchParams.append('id', id);
    imageURL.searchParams.append('tab', sanitizedTab);

    const imageLink = imageURL.toString();
    const postURL = `${FRAME_SERVER_URL}/api/frame/jobs/${id}/${sanitizedTab}`;
    const route = isElite ? 'elite-fast-track' : 'jobs';
    const jobURL = `${FE_SERVER_URL}/${route}/${id}/details`;

    return {
      metadataBase: new URL(`${FRAME_SERVER_URL}/${id}/${sanitizedTab}`),
      title,
      description,
      openGraph: {
        title,
        description,
        images: [imageLink],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        creator: '@jobstash_xyz',
        images: [imageLink],
      },
      other: {
        'fc:frame': 'vNext',
        'fc:frame:button:1': 'Prev',
        'fc:frame:button:2': 'Apply to this Job',
        'fc:frame:button:2:action': 'link',
        'fc:frame:button:2:target': jobURL,
        'fc:frame:button:3': 'Next',
        'fc:frame:image': imageLink,
        'fc:frame:post_url': postURL,
      },
    };
  };
