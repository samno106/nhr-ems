import { HeroModel } from "@/types/hero-model";

export const AppHero = ({ heroModel }: Readonly<{ heroModel: HeroModel }>) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mt-2">{heroModel.title}</h2>
      <span className="text-sm text-gray-500 font-medium">
        {heroModel.sub_title}
      </span>
    </div>
  );
};
