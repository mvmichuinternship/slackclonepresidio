import Image from "next/image";

type ChannelSpaceProps = {
  id: string;
  member: {
    name: string;
    profile: string;
  };
  timestamp: string;
  message: string;
};

const ChannelSpace = ({
  id,
  member,
  timestamp,
  message,
}: ChannelSpaceProps) => {
  return (
    <div className="flex w-full justify-center items-center space-x-3 space-y-4">
      <div className="w-[50px] h-[50px] rounded-full bg-transparent py-4 border">
        <Image src={member.profile} alt={""} width={20} height={20}></Image>
      </div>
      <div className="w-[90%] flex flex-col justify-center items-start ">
        <div className="flex items-center gap-x-2">
          <div className="flex items-center">
            <p className="font-semibold text-sm hover:underline cursor-pointer">
              {member.name}
            </p>
          </div>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            {timestamp}
          </span>
        </div>
        <div className="py-2 px-4">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ChannelSpace;
