import Image from 'next/image';

export const PageLoader = () => {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center">
      <div className="relative h-16 w-16">
        <div className="absolute left-0 top-0 animate-spin">
          <div className="h-16 w-16">
            <Image src="/Logo-01.svg" height={300} width={300} alt="" />
          </div>
        </div>

        <div className="absolute left-0 top-0 animate-reverse-spin">
          <div className="h-16 w-16">
            <Image src="/Logo-02.svg" height={300} width={300} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
