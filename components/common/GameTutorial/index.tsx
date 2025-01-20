import React from 'react';
import Button from '~/components/primitives/Button';
import { ButtonVariant } from '~/components/primitives/Button';
import TransactionLog from './TransactionLog';

const GameTutorial = () => {
  return (
    <div className="max-w-[328px] flex-1 flex flex-col gap-[8px]">
      <div className="w-full border-[1px] border-solid border-[#ffffff]">
        <div className="w-full flex">
          <div className="text-[#ffffff] text-[14px] leading-none font-[700] p-[12px] cursor-pointer">
            How to <span className="underline">P</span>lay
          </div>
          <div className="text-[#ffffff] opacity-[0.48] text-[14px] leading-none font-[700] p-[12px] cursor-pointer">
            Game <span className="underline">M</span>achanism
          </div>
        </div>
        <div className="w-full flex flex-col gap-[16px] px-[15px] pt-[12px] pb-[15px]">
          <div className="w-full flex items-center justify-between">
            <p className="text-[#ffffff] text-[14px] leading-[1.2] font-[600]">1.</p>
            <Button variant={ButtonVariant.WHITE} className="h-[32px] text-[14px] leading-[1.2] font-[600] px-[11px]">
              Connect Wallet
            </Button>
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="text-[#ffffff] text-[14px] leading-[1.2] font-[600]">2.</p>
            <Button variant={ButtonVariant.WHITE} className="h-[32px] text-[14px] leading-[1.2] font-[600] px-[11px]">
              Bind your X
            </Button>
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="text-[#ffffff] text-[14px] leading-[1.2] font-[600]">3.</p>
            <Button variant={ButtonVariant.WHITE} className="h-[32px] text-[14px] leading-[1.2] font-[600] px-[11px]">
              Deposit
            </Button>
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="text-[#ffffff] text-[14px] leading-[1.2] font-[600]">4.</p>
            <div className="flex items-center gap-[16px]">
              <Button variant={ButtonVariant.WHITE} className="h-[32px] text-[14px] leading-[1.2] font-[600] px-[11px]">
                Beg
              </Button>
              <p className="text-[#ffffff] text-[14px] leading-[1.2] font-[600]">or</p>
              <Button variant={ButtonVariant.WHITE} className="h-[32px] text-[14px] leading-[1.2] font-[600] px-[11px]">
                Bless
              </Button>
            </div>
          </div>
          <p className="text-[#ffffff] text-[14px] leading-[1.3] font-[600]">
            Noted: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <TransactionLog />
    </div>
  );
};

export default GameTutorial;
