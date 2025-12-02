const Button = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/li2mee',
      icon: '📘'
    },
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: '🐙'
    },
    {
      name: 'Email',
      url: 'mailto:your-email@example.com',
      icon: '📧'
    }
  ];

  return (
    <div className="button-group">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="external-button"
          aria-label={`Visit my ${link.name}`}
        >
          <span className="button-icon">{link.icon}</span>
          <span className="button-text">{link.name}</span>
        </a>
      ))}
    </div>
  );
};

export default Button;
