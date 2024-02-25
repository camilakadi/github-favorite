import Image from "next/image";

const NotFindStatus = () => {
  return (
    <div>
      <div className="m-auto text-center mt-[168px]">
        <h1 className="text-primary-color">“MHshdahsudl”</h1>
        <h1>Nenhum usuário encontrado</h1>
        <h5>Verifique se a escrita está correta ou tente novamente</h5>
        <Image
          src="/pessoa-nao-encontrada.png"
          alt="Pesquisa de pessoa"
          width={399}
          height={438}
          className="mt-12 m-auto"
          priority
        />
      </div>
    </div>
  );
};

export default NotFindStatus;
