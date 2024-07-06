import { PageLoader } from '~/components/page-loader';
import { Redirector } from '~/components/redirector';
import { PageProps } from '~/core/types';
import { getMetadataFn } from '~/utils/generate-metadata';

export const generateMetadata = getMetadataFn();

const JobMetadataPage = async ({ params: { id } }: PageProps) => {
  return (
    <>
      <PageLoader />
      <Redirector id={id} />
    </>
  );
};

export default JobMetadataPage;
