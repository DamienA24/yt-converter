import { Link2 } from "lucide-react";

export default function ResumeExplain() {
  return (
    <div className="mt-10 flex flex-col w-screen  bg-[#fef5fc] items-center">
      <h1 className="text-xl font-bold mt-10">
        Un convertisseur MP3 gratuit et multi-plateforme
      </h1>
      <p className="font-bold ">
        Simple, rapide et anonyme, notre application convertit les vidéos
        YouTube en MP3 ou MP4.
      </p>
      <div>
        <div className="mt-10">
          <p>Télécharger des vidéos YouTube n'a jamais été aussi simple :</p>
          <ul className="list-disc mt-5 ml-5">
            <li>
              Saisissez des mots-clés ou collez l'URL de votre vidéo YouTube.{" "}
            </li>
            <li>Choisissez le format (MP3 ou MP4) </li>
            <li>
              Téléchargez votre vidéo, playlist ou short au format choisi.
            </li>
          </ul>
        </div>

        <div className="mt-10 mb-10">
          <p>Puissance et simplicité :</p>
          <ul className="list-disc mt-5 ml-5">
            <li>
              Compatible avec tous les appareils (smartphones, tablettes,
              ordinateurs).
            </li>
            <li>
              Utilise les dernières technologies pour des conversions rapides.{" "}
            </li>
            <li>Pas d'inscription, sans publicité, et anonyme.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
