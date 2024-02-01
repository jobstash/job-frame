import { FundingRound } from '~/core/types';
import { shortTimestamp } from '~/utils/short-timestamp';
import { formatNumber } from '~/utils/format-number';

import { InfoTag } from '../info-tag';
import { BankIcon } from '../icons/bank-icon';
import { MoneyIcon } from '../icons/money-icon';

interface Props {
  fundingRounds: FundingRound[];
}

export const JobOrgFundingRounds = ({ fundingRounds }: Props) => (
  <div style={containerStyle}>
    {fundingRounds.map(({ id, date, raisedAmount, roundName }, i) => (
      <div key={id} style={innerContainerStyle}>
        <div style={wrapperStyle}>
          {roundName && (
            <InfoTag
              tag={{
                text: `Funding Round: ${roundName}`,
                icon: <BankIcon />,
              }}
            />
          )}

          <InfoTag
            tag={{
              text: `Funding Date: ${shortTimestamp(date)}`,
              icon: <BankIcon />,
            }}
          />

          {raisedAmount && (
            <InfoTag
              tag={{
                text: `Last Amount: $${formatNumber(raisedAmount)}M`,
                icon: <MoneyIcon />,
              }}
            />
          )}

          {i !== fundingRounds.length - 1 && (
            <div style={lineContainerStyle}>
              <hr style={lineStyle} />
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
);

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '1rem',
  paddingLeft: '0.25rem',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  // background: 'green',
};

const innerContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.625rem',
  // background: 'blue',
};

const wrapperStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  columnGap: '1rem',
};

const lineContainerStyle: React.CSSProperties = {
  display: 'flex',
  height: '1rem',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '1rem',
  // background: 'red',
};

const lineStyle: React.CSSProperties = {
  borderStyle: 'dashed',
  width: '100%',
  borderTopWidth: '1px',
  borderColor: '#ffffff19',
};
