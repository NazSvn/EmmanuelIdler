const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="flex flex-col items-center justify-center">
          <hr className="h-[15px] w-[60%] border-none shadow-[0px_4px_8px_-7px_rgba(255,255,255,0.65)]" />
          <div className="mb-5 mt-2 min-w-[80%] pt-3 text-center text-xs">
            © 2024 Emmanuel Idler. All rights reserved.
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

// shadow-[inset_0px_10px_10px_-15px_rgba(255,255,255,0.4)]
