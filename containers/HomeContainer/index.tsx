import React from 'react';

function HomeContainer() {
  return (
    <div className="w-full flex items-start justify-center gap-[8px] mt-[22px] mb-[16px]">
      {/* Tweet Section */}
      <div className="box w-[448px]">
        <div className="w-full h-[22px] flex gap-[16px]">
          <div className="flex-1 h-full flex gap-[4px]">
            <div className="w-[20px] flex flex-col justify-between">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="w-full h-[1px] bg-[#000000]" />
              ))}
            </div>
            <div className="h-full aspect-square border-[1px] border-solid border-[#0000000]" />
            <div className="flex-1 h-full flex flex-col justify-between">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="w-full h-[1px] bg-[#000000]" />
              ))}
            </div>
          </div>
          <p className="text-[18px] leading-none font-[600]">Tweet on X</p>
          <div className="flex-1 h-full flex flex-col justify-between">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="w-full h-[1px] bg-[#000000]" />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col gap-[8px] px-[9px] pt-[8px] pb-[9px]">
          <div className="w-full flex items-center justify-between border-[1px] border-solid border-[#000000] pl-[52px] pr-[16px] py-[8px]">
            <div className="flex flex-col text-[14px] leading-[1.2] font-[600]">
              <p className="text-[#000000]">Prize Pool</p>
              <p className="text-[#00000052]">3d:24h:52p:28s</p>
            </div>
            <p className="text-[#000000] text-[18px] leading-none font-[700]">14.890 $FEIN</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContainer;
