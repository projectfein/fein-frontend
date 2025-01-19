import React, { useState } from 'react';
import { ButtonVariant } from '~/components/primitives/Button';
import Image from 'next/image';
import Button from '~/components/primitives/Button';
import CopyIcon from '../icons/CopyIcon';
import { cn } from '~/utils/base';

const LIST_LINK_BUTTON = [
  {
    label: 'twitter/x',
    type: 'twitter',
  },
  {
    label: 'dexsceener',
    type: 'dexsceener',
  },
  {
    label: 'raydium',
    type: 'raydium',
  },
  {
    label: 'jupiter',
    type: 'jupiter',
  },
];

export default function Footer() {
  const contractAddress = '0x1234567890';

  const [isCopied, setIsCopied] = useState(false);

  const copyText = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    });
  };

  const handleOpenLink = (type: string) => {
    if (type === 'twitter') {
      window.open('https://x.com/', '_blank');
    } else if (type === 'dexsceener') {
      window.open(`https://dexscreener.com/solana/${contractAddress}`, '_blank');
    } else if (type === 'raydium') {
      window.open(`https://raydium.io/swap/?inputMint=sol&outputMint=${contractAddress}`, '_blank');
    } else if (type === 'jupiter') {
      window.open(`https://jup.ag/swap/SOL-${contractAddress}`, '_blank');
    }
  };

  return (
    <footer className="w-full max-w-[650px] flex-col items-end flex mt-auto mx-auto pb-[24px]">
      <Image
        src="/imgs/cat-decor.svg"
        alt="decor"
        width={172}
        height={34}
        className="w-[172px] h-auto object-contain"
      />
      <div className="w-full flex items-center justify-between gap-[4px] bg-[#000000] border-[1px] border-solid border-[#FFFFFF] pl-[12px] pr-[6px] py-[6px]">
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
      </div>
      <div className="w-full flex items-center justify-center gap-[16px] mt-[24px] text-[#ffffff] text-[18px] leading-none font-[600]">
        {LIST_LINK_BUTTON.map((item, index) => (
          <div key={item.type} className="flex items-center gap-[16px]">
            <div
              onClick={() => handleOpenLink(item.type)}
              className="underline cursor-pointer select-none hover:text-[#a7a7a7]"
            >
              {item.label}
            </div>
            <Image
              src="/imgs/icons-spec/plus-icon.svg"
              alt="plus"
              width={6}
              height={6}
              className={cn('w-[6px] h-auto object-contain', { hidden: index !== LIST_LINK_BUTTON.length - 1 })}
            />
          </div>
        ))}
      </div>
    </footer>
  );
}
