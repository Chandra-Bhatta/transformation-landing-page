const Footer = () => {
  return (
    <footer className="bg-primary py-6 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary-foreground/80 text-sm">
          © {new Date().getFullYear()} All Rights Reserved | 
          <a href="#" className="hover:text-primary-foreground ml-2 underline">
            Privacy Policy
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-primary-foreground underline">
            Terms of Service
          </a>
        </p>
        <p className="text-primary-foreground/60 text-xs mt-2">
          Results may vary. Consult your physician before starting any weight loss program.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
