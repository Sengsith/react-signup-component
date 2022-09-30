const HeaderSub = (props) => {
  const { header, header_regular } = props;
  return (
    <div className="HeaderSub">
      <h1>{header}<span>{header_regular}</span></h1>
    </div>
  );
}

export default HeaderSub;