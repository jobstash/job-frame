'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface Props {
  id: string;
}

export const Redirector = ({ id }: Props) => {
  const router = useRouter();

  // useEffect(() => {
  //   let timeout: NodeJS.Timeout;

  //   timeout = setTimeout(() => {
  //     router.push(`${process.env.NEXT_PUBLIC_FE_URL}/jobs/${id}/details`);
  //   }, 3000);

  //   return () => clearTimeout(timeout);
  // }, [id, router]);

  return <div>Redirector</div>;
};
