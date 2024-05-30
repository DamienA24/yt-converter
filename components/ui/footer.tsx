export default function Footer() {
  return (
    <div className="py-5 bg-black text-white">
      <div className="footer-content grid grid-cols-2 justify-items-center mt-5 ">
        <ul className="footer-links">
          <li>
            <a href="/privacy">Politique de Confidentialité</a>
          </li>
          <li>
            <a href="/terms">Conditions d'Utilisation</a>
          </li>
          <li>
            <a href="/dmca">DMCA</a>
          </li>
        </ul>

        <ul className="footer-navigation">
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="http://localhost:3000/#faq">FAQ</a>
          </li>
          <li>
            <a href="http://localhost:3000/#about">À Propos</a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright ">
        <p className="text-center">
          &copy; 2024 VotreSite. Tous droits réservés.
        </p>
      </div>
    </div>
  );
}
