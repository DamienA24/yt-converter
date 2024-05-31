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
          <li>
            <a href="/sitemap.xml">Sitemap</a>
          </li>
        </ul>

        <ul className="footer-navigation">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/youtube-to-mp4">Youtube to mp4</a>
          </li>
          <li>
            <a href="/youtube-to-mp3">Youtube to mp3</a>
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
