import { HeroModel } from "@/types/hero-model";

export const SubHero = ({ heroModel }: Readonly<{ heroModel: HeroModel }>) => {
  return (
    <div>
      <h2 className="text-lg font-bold mt-2">{heroModel.title}</h2>
      <span className="text-xs text-gray-500 font-medium">
        {heroModel.sub_title}
      </span>
    </div>
  );
};
