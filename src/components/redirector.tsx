'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface Props {
  id: string;
  isElite?: boolean;
}

export const Redirector = ({ id, isElite }: Props) => {
  const router = useRouter();

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const route = isElite ? 'elite-fast-track' : 'jobs';
    timeout = setTimeout(() => {
      router.push(`${process.env.NEXT_PUBLIC_FE_URL}/${route}/${id}/details`);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [id, isElite, router]);

  return <div>Redirector</div>;
};
