import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

interface DownloadButtonProps {
  bookId: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ bookId }) => {
  const router = useRouter();

  return (
    <a
      href={bookId}
      className="
        bg-white 
        rounded-md 
        py-1 md:py-2 
        px-2 md:px-4
        w-auto 
        text-xs lg:text-lg 
        font-semibold
        flex
        flex-row
        items-center
        hover:bg-neutral-300
        transition
        "
      download
      title="Download"
    >
      <PlayIcon className="w-4 md:w-7 text-black mr-1" />
      Download
    </a>
  );
};

export default DownloadButton;
