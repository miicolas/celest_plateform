function Header() {
  return (
    <header className="flex justify-between h-fit p-5">
      <div className="flex gap-10 items-center ">
        <img src="/img/Logo_Bleu_Marine.png" className="w-24 h-auto"></img>
        <h1 className="font-bold text-2xl ">DashBoard</h1>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <p>
          Compte de : <span className="font-bold">Nom Prénom</span>
        </p>
        <button className="bg-[#1B1834] text-white text-sm font-medium rounded-lg  p-2.5">
          Deconnexion
        </button>
      </div>
    </header>
  );
}

export default Header;
