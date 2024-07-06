import { PageLoader } from '~/components/page-loader';
import { Redirector } from '~/components/redirector';
import { PageProps } from '~/core/types';
import { getMetadataFn } from '~/utils/generate-metadata';

export const generateMetadata = getMetadataFn(true);

const EliteJobMetadataPage = async ({ params: { id } }: PageProps) => {
  return (
    <>
      <PageLoader />
      <Redirector isElite id={id} />
    </>
  );
};

export default EliteJobMetadataPage;
