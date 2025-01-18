import React from 'react';
import { ButtonVariant } from '~/components/primitives/Button';
import Image from 'next/image';
import Button from '~/components/primitives/Button';

export default function Footer() {
  const contractAddress = '0x1234567890';

  return (
    <footer className="w-full max-w-[684px] flex-col items-end md:flex hidden mt-auto">
      <Image
        src="/imgs/cat-decor.svg"
        alt="decor"
        width={172}
        height={34}
        className="w-[172px] h-auto object-contain"
      />
      {/* <div className="w-full flex items-center justify-between gap-[4px] bg-[#000000] border-[1px] border-solid border-[#FFFFFF] pl-[12px] pr-[6px] py-[6px]">
        <p className="text-[#ffffff] text-[18px] leading-none font-[600] truncate">{`CA: ${contractAddress}`}</p>
        <Button onClick={copyText} variant={ButtonVariant.WHITE} className="h-[40px] gap-[8px] px-[8px]">
          {isCopied ? (
            <p className="text-[14px] leading-none font-[600]">Copied</p>
          ) : (
            <>
              <p className="text-[14px] leading-none font-[600]">Copy</p>
              <CopyIcon className="w-[24px] h-auto cursor-pointer" />
            </>
          )}
        </Button>
      </div> */}
    </footer>
  );
}
