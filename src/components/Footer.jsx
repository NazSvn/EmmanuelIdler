const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <div className="flex flex-col items-center justify-center">
          <hr className="h-[15px] w-[60%] border-none shadow-[0px_4px_8px_-7px_rgba(255,255,255,0.65)]" />
          <div className="mb-5 mt-2 w-full max-w-[80%] pt-3 text-center text-xs">
            <span aria-label="Copyright">
              © {currentYear} Emmanuel Idler. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
