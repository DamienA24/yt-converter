export default function Footer() {
  return (
    <div className="py-5 bg-black text-white">
      <div className="footer-content grid grid-cols-2 justify-items-center mt-5 ">
        <ul className="footer-links">
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms">Terms of Use</a>
          </li>
          <li>
            <a href="/dmca">DMCA</a>
          </li>
        </ul>

        <ul className="footer-navigation">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="http://localhost:3000/#faq">FAQ</a>
          </li>
          <li>
            <a href="http://localhost:3000/#about">About</a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright ">
        <p className="text-center">
          &copy; 2024 VotreSite. All right reserved.
        </p>
      </div>
    </div>
  );
}
