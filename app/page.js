export default function HomePage() {
  return (
    <main style={{ fontFamily: "Arial", textAlign: "center", padding: "50px" }}>
      <h1>Welcome to Roseman Software</h1>
      <p>Your trusted partner in web solutions and computer services.</p>

      <nav style={{ marginTop: "40px" }}>
        <a href="/about" style={{ margin: "0 20px" }}>About</a>
        <a href="/contact" style={{ margin: "0 20px" }}>Contact</a>
      </nav>
    </main>
  );
}
