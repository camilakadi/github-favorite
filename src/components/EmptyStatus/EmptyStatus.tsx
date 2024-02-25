import Image from "next/image";

const EmptyStatus = () => {
  return (
    <div>
      <div className="m-auto text-center mt-[168px]">
        <h1>Procure pelo Nome ou Nome de Usuário</h1>
        <h5>
          Encontre os repositórios de algum usuário digitando no campo acima
        </h5>
        <Image
          src="/pesquisa-pessoa.png"
          alt="Pesquisa de pessoa"
          width={230}
          height={257}
          className="mt-12 m-auto"
          priority
        />
      </div>
    </div>
  );
};

export default EmptyStatus;
