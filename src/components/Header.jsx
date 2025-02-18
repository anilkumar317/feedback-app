function Header({ title, style }) {
  return (
    <header style={style}>
      <div className="container">
        <h2> {title} </h2>
      </div>
    </header>
  );
}

export default Header;
