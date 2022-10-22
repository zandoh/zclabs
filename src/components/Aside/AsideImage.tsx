const AsideImage = () => {
  return (
    <div className="after:bg-radial-[center center]-[#fff]-[#fff 1px]-[transparent 0px]-[transparent 100%] relative z-[1] mx-[auto] mt-0 mb-[30px] w-48 after:absolute after:top-[7%] after:left-[7%] after:-z-[1] after:h-full after:w-full after:rounded-[300px] after:bg-[length:6px_6px] after:opacity-30 after:content-['']">
      <img
        className="rounded-[50%] border border-solid border-white bg-[color:var(--zc-color-base)]"
        src="/avatar.svg"
      />
    </div>
  );
};

export default AsideImage;
