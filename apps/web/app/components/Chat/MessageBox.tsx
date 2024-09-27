import React, { FC } from "react";
import { TextGenerateEffect } from "@repo/ui/components/ui/text-generate-effect";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;
interface Props {
  message: string;
}
const MessageBox: FC<Props> = ({ message }) => {
  return (
    <div className="flex flex-col w-full items-start">
      <div className="max-w-[80%] bg-[#a855f7] px-4 pb-4 rounded-[16px]">
        <TextGenerateEffect words={message} duration={0.5} className="" />
      </div>
    </div>
  );
};

export default MessageBox;
