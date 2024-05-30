import { Meteors } from "@/components/ui/meteors";

const data = [
  {
    question: "Combien de temps prend la conversion ?",
    response:
      " La conversion est généralement rapide et dépend de la taille de la vidéo et de votre connexion internet.",
  },
  {
    question: "Est-ce gratuit ?",
    response: "Oui, notre service est entièrement gratuit et sans inscription.",
  },
  {
    question: "Quels formats sont supportés ?",
    response:
      "Nous supportons principalement les formats MP3 pour l'audio et MP4 pour la vidéo.",
  },
  {
    question: "Y a-t-il des limites de taille ou de durée ?",
    response:
      " Nous ne recommandons pas de convertir des vidéos trop longues ou volumineuses pour assurer une conversion rapide et efficace.",
  },
  {
    question:
      " Comment puis-je signaler un problème ou une vidéo non convertissable ?",
    response:
      " Utilisez notre formulaire de contact dans la section Contact pour signaler tout problème ou pour obtenir de l'aide.",
  },
  {
    question: "Puis-je utiliser ce convertisseur sur des appareils mobiles ?",
    response:
      "Oui, notre site est entièrement optimisé pour les appareils mobiles. Vous pouvez convertir et télécharger des vidéos directement depuis votre smartphone ou tablette, avec la même facilité que sur un ordinateur de bureau.",
  },
];
export default function Faq() {
  return (
    <div className="mt-10 flex flex-col" id="faq">
      <h1 className="text-xl font-bold text-center">
        Un convertisseur Tiktok, YouTube, Twitter, et bien d'autres!
      </h1>
      <div className="grid grid-cols-3 grid-rows-2 gap-y-4 justify-items-center mt-10">
        {data.map((value, index) => {
          return (
            <div className=" w-full relative max-w-md" key={index}>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                  {value.question}
                </h1>

                <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                  {value.response}
                </p>

                <Meteors number={20} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
