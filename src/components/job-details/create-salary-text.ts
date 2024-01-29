import { formatNumber } from '~/utils/format-number';

interface SalaryInfo {
  minimumSalary: number | null;
  maximumSalary: number | null;
  salaryCurrency: string | null;
}

export const createSalaryText = ({
  minimumSalary,
  maximumSalary,
  salaryCurrency,
}: SalaryInfo) => {
  if (minimumSalary && maximumSalary) {
    const min = formatNumber(minimumSalary);
    const max = formatNumber(maximumSalary);
    const currencyText = salaryCurrency ?? 'USD';

    return `${currencyText} ${min} - ${max}`;
  }

  return null;
};
