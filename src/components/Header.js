const Header = (props) => {
  const { header, content } = props;
  return (
    <div className="Header GridCol">
      <h1>{header}</h1>
      <p>{content}</p>
    </div>
  );
}

export default Header;