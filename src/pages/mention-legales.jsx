function MentionsLegales() {
  // Fonction pour retourner à la page précédente
  const handleReturn = () => {
    window.history.back();
  };

  return (
    <div className="p-10">
      <button
        className="bg-[#1B1834] hover:bg-blue-950 text-white font-bold py-2 px-4 rounded cursor-pointer"
        onClick={handleReturn}
      >
        Retour
      </button>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mt-10">
        Mentions légales
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          {" "}
          - Dernière mise à jour le 01/01/2021
        </span>
      </h1>

      <div className="p-4 lg:flex gap-10 mx-auto">
        <div className="border-l-2 p-4 max-w-screen-sm h-fit">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            SOMMAIRE
          </h2>
          <ul>
            <li className="mt-4 text-gray-700 dark:text-gray-300">
              Introduction
            </li>
            <li className="mt-4 text-gray-700 dark:text-gray-300">
              Nos valeurs
            </li>
            <li className="mt-4 text-gray-700 dark:text-gray-300">
              Pourquoi traitons-nous vos informations
            </li>
            <li className="mt-4 text-gray-700 dark:text-gray-300">
              Vos droits sur vos informations
            </li>
            <li className="mt-4 text-gray-700 dark:text-gray-300">
              Où envoyons-nous vos informations
            </li>
            <li className="mt-4 text-gray-700 dark:text-gray-300">
              Combien de temps conservons-nous vos informations
            </li>
            <li className="mt-4 text-gray-700 dark:text-gray-300">
              Comment protégeons-nous vos informations
            </li>
            <li className="mt-4 text-gray-700 dark:text-gray-300">
              Comment pouvez-vous nous contacter ?
            </li>
          </ul>
        </div>
        <div className="max-w-screen-md mx-auto">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Introduction
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Ce site Web est exploité par Celest PULV. Il a été conçu dans le but
            de fournir permettre aux étudiants de revendre ou d'acheter des
            places pour les évenements concernant le BDE CELEST au Pôle Léonard
            de Vinci.
          </p>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-4">
            Nos valeurs
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Les informations personnelles collectées sur ce site, telles que le
            nom, le prénom, l'adresse e-mail et le nom d'utilisateur Instagram,
            sont stockées de manière sécurisée dans notre base de données. Ces
            informations sont collectées dans le but de pouvoir de mettre en
            contact l'acheteur et le vendeur automatiquement'.
          </p>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-4">
            Pourquoi traitons-nous vos informations
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Nous nous engageons à protéger la confidentialité de vos
            informations personnelles et à ne pas les utiliser à des fins autres
            que celles décrites dans la présente politique de confidentialité.
          </p>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-4">
            Vos droits sur vos informations
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Si vous avez des questions concernant notre politique de
            confidentialité ou la manière dont nous traitons vos données
            personnelles, veuillez nous contacter à sur notre compte instagram
            @celest_plv.
          </p>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-4">
            Où envoyons-nous vos informations
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            LE BDE CELEST se réserve le droit de modifier cette politique de
            confidentialité à tout moment. Toutes les modifications seront
            publiées sur cette page.
          </p>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-4">
            Combien de temps conservons-nous vos informations
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Les informations personnelles collectées sur ce site sont stockées
            de manière sécurisée dans notre base de données. Ces informations
            sont collectées dans le but de pouvoir de mettre en contact
            l'acheteur et le vendeur automatiquement.
          </p>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-4">
            Comment protégeons-nous vos informations
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Nous nous engageons à protéger la confidentialité de vos
            informations personnelles et à ne pas les utiliser à des fins autres
            que celles décrites dans la présente politique de confidentialité.
          </p>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-4">
            Comment pouvez-vous nous contacter ?
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Si vous avez des questions concernant notre politique de
            confidentialité ou la manière dont nous traitons vos données
            personnelles, veuillez nous contacter à sur notre compte instagram
            @celest_plv.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MentionsLegales;
