import Repository from "../Repository/Repository";

const FindStatus = () => {
  return (
    <div className="grid lg:grid-cols-3 p-6 gap-12">
      <section className="lg:col-span-1 col-span-2 border border-border-line-color rounded-[4px] py-10 px-6 text-center xs:w-full">
        <div className="w-[200px] h-[200px] bg-black rounded-full m-auto mb-6"></div>
        <div>
          <h1>Nome da pessoa</h1>
          <p>@banana</p>

          <p className="mt-6">
            Trabalha com segurança cibernética, experiencia em empresas
            multinacionais.
          </p>
        </div>
      </section>

      <section className="col-span-2">
        <h2 className="text-primary-color mb-4 text-[21px]">Repositórios</h2>

        <Repository />
      </section>
    </div>
  );
};

export default FindStatus;
