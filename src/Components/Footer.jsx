const Footer = () => {
  return (
    <div className="container w-11/12 mx-auto">
      <div className="p-20">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Gadget Heaven</h3>
          <p className="text-[#09080F99]">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <div className="border-t-2 border-[#09080F1A] mt-10">
          <footer className="footer p-10">
            <nav>
              <h6 className="font-semibold text-[#09080F] text-base">
                Services
              </h6>
              <a className="link link-hover text-[#09080F99] text-sm">
                Product Support
              </a>
              <a className="link link-hover text-[#09080F99] text-sm">
                Order Tracking
              </a>
              <a className="link link-hover text-[#09080F99] text-sm">
                Shipping & Delivery
              </a>
              <a className="link link-hover text-[#09080F99] text-sm">
                Returns
              </a>
            </nav>
            <nav className="place-self-center">
              <h6 className="font-semibold text-[#09080F] text-base">
                Company
              </h6>
              <a className="link link-hover text-[#09080F99] text-sm">
                About us
              </a>
              <a className="link link-hover text-[#09080F99] text-sm">
                Careers
              </a>
              <a className="link link-hover text-[#09080F99] text-sm">
                Contact
              </a>
            </nav>
            <nav className="place-self-end">
              <h6 className="font-semibold text-[#09080F] text-base">Legal</h6>
              <a className="link link-hover text-[#09080F99] text-sm">
                Terms of use
              </a>
              <a className="link link-hover text-[#09080F99] text-sm">
                Privacy policy
              </a>
              <a className="link link-hover text-[#09080F99] text-sm">
                Cookie policy
              </a>
            </nav>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
