const AsideCopyright = () => {
  return (
    <div className="absolute bottom-0 left-0 w-[380px] px-[10px] pt-[5px] pb-[15px] text-center text-xs leading-3 text-[#bbb]">
      © {new Date().getFullYear()} zclabs.
    </div>
  );
};

export default AsideCopyright;
