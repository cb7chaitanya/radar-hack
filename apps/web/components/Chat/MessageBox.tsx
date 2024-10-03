import React, { FC } from "react";
import { TextGenerateEffect } from "@repo/ui/components/ui/text-generate-effect";
import { Bot } from "lucide-react";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;
interface Props {
  message: string;
}
const MessageBox: FC<Props> = ({ message }) => {
  return (
    <div className="">
    <div className="ml-20">
      <Bot className="w-5 h-5 text-white" />
      </div>
      <div className="items-center flex flex-col w-full">
      <div className="max-w-[80%] bg-gradient-to-br from-purple-600 to-pink-600 px-4 w-fit pb-3 rounded-[4px]">
        <TextGenerateEffect words={message} duration={0.5} className="" />
      </div>
      </div>
      </div>
  );
};

export default MessageBox;
