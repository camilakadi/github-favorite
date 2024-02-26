import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidFaHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Repository = () => {
  return (
    <div className="border border-border-line-color rounded-[4px] p-4 grid grid-cols-1 lg:grid-cols-3">
      <div className="col-span-2 order-2 lg:order-none">
        <h2 className="mb-[6px]">Nome do projeto</h2>

        <p className="text-placeholder-color mb-4">
          Aplicativo de visualização de Pokémon utilizando o PokeAPI.co -
          Construído em React Native (Expo)
        </p>

        <div className="grid lg:grid-cols-4 grid-rows-2 lg:grid-rows-none gap-3">
          <div className="flex items-center lg:col-span-1">
            <span className="w-4 h-4 rounded-full bg-[red] mr-2 block"></span>

            <p>Linguagem</p>
          </div>

          <p className="lg:col-span-3">última atualização</p>
        </div>
      </div>

      <div className="flex justify-end order-1 lg:order-none">
        <button className="border border-primary-color rounded-full w-10 h-10 flex items-center justify-center">
          <FontAwesomeIcon
            icon={solidFaHeart}
            className="text-[18px] text-primary-color"
          />
        </button>

        <button className="border border-white-background-matte-color bg-white-background-matte-color rounded-full w-10 h-10 flex items-center justify-center">
          <FontAwesomeIcon icon={faHeart} className="text-[18px]" />
        </button>
      </div>
    </div>
  );
};

export default Repository;
