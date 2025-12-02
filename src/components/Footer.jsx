const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <p>
        © {currentYear} <strong>Joselito Panimdim</strong>. All rights reserved. | 
        <span className="footer-divider">|</span>
        Crafted with <span className="heart">❤️</span> 
      </p>
      <p className="footer-subtitle">Full Stack Developer | Cordova Public College</p>
    </footer>
  );
};

export default Footer;
