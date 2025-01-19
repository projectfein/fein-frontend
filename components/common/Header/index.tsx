import React from 'react';
import Image from 'next/image';
import { ButtonVariant } from '~/components/primitives/Button';
import Button from '~/components/primitives/Button';

export default function Header({ currentPage = '' }) {
  const handleConnectWallet = () => {};

  return (
    <header className="w-full flex items-start justify-between pt-[16px] px-[24px]">
      <div className="flex-1">
        <Button
          variant={ButtonVariant.WHITE}
          disabled
          fullWidth
          className="w-[212px] py-[10px] text-[14px] leading-[1.2] font-[600]"
        >
          <p>Create New Game</p>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[20px] h-[20px]"
          >
            <path
              d="M9.66797 14.168H11.3346V10.8346H14.668V9.16797H11.3346V5.83464H9.66797V9.16797H6.33464V10.8346H9.66797V14.168ZM10.5013 18.3346C9.34852 18.3346 8.26519 18.1159 7.2513 17.6784C6.23741 17.2409 5.35547 16.6471 4.60547 15.8971C3.85547 15.1471 3.26172 14.2652 2.82422 13.2513C2.38672 12.2374 2.16797 11.1541 2.16797 10.0013C2.16797 8.84852 2.38672 7.76519 2.82422 6.7513C3.26172 5.73741 3.85547 4.85547 4.60547 4.10547C5.35547 3.35547 6.23741 2.76172 7.2513 2.32422C8.26519 1.88672 9.34852 1.66797 10.5013 1.66797C11.6541 1.66797 12.7374 1.88672 13.7513 2.32422C14.7652 2.76172 15.6471 3.35547 16.3971 4.10547C17.1471 4.85547 17.7409 5.73741 18.1784 6.7513C18.6159 7.76519 18.8346 8.84852 18.8346 10.0013C18.8346 11.1541 18.6159 12.2374 18.1784 13.2513C17.7409 14.2652 17.1471 15.1471 16.3971 15.8971C15.6471 16.6471 14.7652 17.2409 13.7513 17.6784C12.7374 18.1159 11.6541 18.3346 10.5013 18.3346Z"
              fill="black"
            />
          </svg>
        </Button>
      </div>
      <Image src="/imgs/logo.png" alt="logo" width={211} height={148} className="w-[211px] h-auto object-contain" />
      <div className="flex-1 flex justify-end">
        <Button
          variant={ButtonVariant.WHITE}
          className="px-[16px] py-[10px] text-[14px] leading-[1.2] font-[600]"
          onClick={handleConnectWallet}
        >
          Connect Wallet
        </Button>
      </div>
    </header>
  );
}
