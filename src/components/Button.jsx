const Button = () => {
  return (
    <button
      className="external-button"
      onClick={() => window.open('https://www.facebook.com/li2mee')}
    >
      Visit Facebook
    </button>
  );
};

export default Button;
