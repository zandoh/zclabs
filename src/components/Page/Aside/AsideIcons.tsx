import {
  BsLinkedin,
  BsTwitter,
  BsGithub,
  BsFillEnvelopeFill,
} from "react-icons/bs";

const AsideIcons = () => {
  return (
    <div className="align-center mt-8 flex justify-center">
      <a
        className="mr-2 flex h-8 w-8 items-center rounded-[20px] p-0 text-center text-lg leading-7 text-white opacity-90 hover:bg-[color:rgba(255,255,255,.2)] hover:opacity-100"
        href="https://www.linkedin.com/in/zrclark/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <BsLinkedin className="h-5 w-8 p-0 text-center leading-7 text-white" />
      </a>
      <a
        className="mr-2 flex h-8 w-8 items-center rounded-[20px] p-0 text-center text-lg leading-7 text-white opacity-90 hover:bg-[color:rgba(255,255,255,.2)] hover:opacity-100"
        href="https://twitter.com/zandoh_"
        rel="noopener noreferrer"
        target="_blank"
      >
        <BsTwitter className="h-5 w-8 p-0 text-center leading-7 text-white" />
      </a>
      <a
        className="mr-2 flex h-8 w-8 items-center rounded-[20px] p-0 text-center text-lg leading-7 text-white opacity-90 hover:bg-[color:rgba(255,255,255,.2)] hover:opacity-100"
        href="https://github.com/zandoh"
        rel="noopener noreferrer"
        target="_blank"
      >
        <BsGithub className="h-5 w-8 p-0 text-center leading-7 text-white" />
      </a>
      <a
        className="flex h-8 w-8 items-center rounded-[20px] p-0 text-center text-lg leading-7 text-white opacity-90 hover:bg-[color:rgba(255,255,255,.2)] hover:opacity-100"
        href="mailto:zclarkmail+zclabs@gmail.com"
      >
        <BsFillEnvelopeFill className="h-5 w-8 p-0 text-center leading-7 text-white" />
      </a>
    </div>
  );
};

export default AsideIcons;
