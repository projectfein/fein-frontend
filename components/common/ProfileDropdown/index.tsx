import { useWallet } from '@solana/wallet-adapter-react';
import React, { FC } from 'react';
import Button, { ButtonVariant } from '~/components/primitives/Button';

interface ProfileDropdownProps {
  closeDropdown?: () => void;
}

const ProfileDropdown: FC<ProfileDropdownProps> = ({ closeDropdown = () => {} }) => {
  const { disconnect } = useWallet();

  return (
    <div className="absolute z-[999] bottom-[-8px] right-0 translate-y-full w-[162px] h-max border-[1px] border-solid border-[#ffffff] bg-[#000000]">
      <div className="w-full flex flex-col items-center gap-[12px] px-[24px] py-[12px]">
        <div className="w-[40px] aspect-square rounded-full bg-[#ffffff]" />
        <p className="font-ibm-plex-mono text-[#ffffff] text-[12px] leading-none font-[500]">empty</p>
        <Button variant={ButtonVariant.WHITE} fullWidth className="py-[6px]">
          Bind your X
        </Button>
      </div>
      <div
        onClick={async () => {
          await disconnect();
          closeDropdown();
        }}
        className="group w-full text-center py-[12px] border-t-[1px] border-solid border-[#ffffff] hover:bg-[#F6465D] cursor-pointer"
      >
        <p className="font-ibm-plex-mono text-[#F6465D] text-[12px] leading-none font-[500] group-hover:text-[#ffffff]">
          Disconnect
        </p>
      </div>
    </div>
  );
};

export default ProfileDropdown;
