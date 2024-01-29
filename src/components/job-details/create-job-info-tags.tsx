import { capitalize } from '~/utils/capitalize';
import { InfoTagProps, JobInfoTags } from '~/core/types';
import { createCommonInfoTagText } from '~/utils/create-common-info-tag-text';

import { createSeniorityText } from './create-seniority-text';
import { createSalaryText } from './create-salary-text';
import { createLocationText } from './create-location-text';

import { PaperBillIcon } from '../icons/paper-bill-icon';
import { SeniorityIcon } from '../icons/seniority-icon';
import { LocationTypeIcon } from '../icons/location-type-icon';
import { LocationIcon } from '../icons/location-icon';
import { SuitCaseIcon } from '../icons/suitcase-icon';
import { EthereumIcon } from '../icons/ethereum-icon';
import { TokenAllocationIcon } from '../icons/token-allocation-icon';
import { CategoryIcon } from '../icons/category-icon';

export const createJobInfoTags = (job: JobInfoTags) => {
  const tags: InfoTagProps[] = [];

  const seniorityText = createSeniorityText(job.seniority);
  if (seniorityText) {
    tags.push({
      text: seniorityText,
      icon: <SeniorityIcon />,
    });
  }

  const salaryText = createSalaryText(job);
  if (salaryText) {
    tags.push({
      text: `${salaryText}`,
      icon: <PaperBillIcon />,
    });
  }

  if (job.locationType) {
    tags.push({
      text: capitalize(job.locationType, true),
      icon: <LocationTypeIcon />,
    });
  }

  const location = createLocationText(job.location, job.locationType);
  if (location) {
    tags.push({
      text: capitalize(location),
      icon: <LocationIcon />,
    });
  }

  const commitment = createCommonInfoTagText(job.commitment);
  if (commitment) {
    tags.push({
      text: capitalize(commitment),
      icon: <SuitCaseIcon />,
    });
  }

  if (job.paysInCrypto) {
    tags.push({
      text: 'Pays in Crypto',
      icon: <EthereumIcon />,
    });
  }

  if (job.offersTokenAllocation) {
    tags.push({
      text: 'Offers Token Allocation',
      icon: <TokenAllocationIcon />,
    });
  }

  const classification = createCommonInfoTagText(job.classification);
  if (classification) {
    tags.push({
      text: classification,
      icon: <CategoryIcon />,
    });
  }

  return tags;
};
