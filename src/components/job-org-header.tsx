/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { FundingRound, InfoTagProps, JobDetails } from '~/core/types';
import { formatNumber } from '~/utils/format-number';
import { getLogoUrl } from '~/utils/get-logo-url';
import { shortTimestamp } from '~/utils/short-timestamp';

import { BodyTitle } from './body-title';
import { PaperBillIcon } from './icons/paper-bill-icon';
import { BankIcon } from './icons/bank-icon';
import { UsersThreeIcon } from './icons/users-three-icon';
import { InfoTag } from './info-tag';

const bodyContainerStyle: React.CSSProperties = {
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
};

const infoTagContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  flexWrap: 'wrap',
  paddingLeft: '1rem',
};

const imgStyle: React.CSSProperties = {
  borderRadius: '50%',
};

interface Props {
  job: JobDetails;
  withTags?: boolean;
}

export const JobOrgHeader = ({ job, withTags = true }: Props) => {
  const logoUrl = getLogoUrl(
    job.organization.website,
    job.organization.logoUrl,
  );

  const tags = createJobCardOrgInfoTags(job.organization);

  return (
    <div style={bodyContainerStyle}>
      <img src={logoUrl} width={64} height={64} style={imgStyle} />
      <BodyTitle text={job.organization.name} />

      {withTags && (
        <div style={infoTagContainerStyle}>
          {tags.map((tag) => (
            <InfoTag key={tag.text} tag={tag} />
          ))}
        </div>
      )}
    </div>
  );
};

export const createFundingRoundsText = (fundingRounds: FundingRound[]) => {
  let fundingDate = 0;
  let fundingAmount: null | number = 0;

  if (fundingRounds.length > 0) {
    for (const round of fundingRounds) {
      if (round.date > fundingDate) {
        fundingDate = round.date;
        fundingAmount = round.raisedAmount;
      }
    }
  }

  return { fundingDate, fundingAmount };
};

export const createJobCardOrgInfoTags = (org: JobDetails['organization']) => {
  const { fundingRounds, headcountEstimate } = org;
  const { fundingAmount, fundingDate } = createFundingRoundsText(fundingRounds);

  const tags: InfoTagProps[] = [];

  if (fundingAmount) {
    tags.push({
      text: `Last Funding: $${formatNumber(fundingAmount * 1_000_000)}`,
      icon: <PaperBillIcon />,
    });
  }

  if (fundingDate) {
    tags.push({
      text: `Funding Date: ${shortTimestamp(fundingDate)}`,
      icon: <BankIcon />,
    });
  }

  if (headcountEstimate) {
    tags.push({
      text: `Employees: ${headcountEstimate}`,
      icon: <UsersThreeIcon />,
    });
  }

  return tags;
};
