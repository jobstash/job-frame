const numFormatter = Intl.NumberFormat('en', { notation: 'compact' });

export const formatNumber = (num: number) => numFormatter.format(num);
