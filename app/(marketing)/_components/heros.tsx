import Image from "next/image";

export const Heros = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image
            src={"/documents.svg"}
            fill
            className="object-contain dark:hidden"
            alt="document"
          />
          <Image
            src={"/documents-dark.svg"}
            fill
            className="object-contain hidden dark:block"
            alt="document"
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image
            src={"/reading.svg"}
            fill
            className="object-contain dark:hidden"
            alt="reading"
          />

          <Image
            src={"/reading-dark.svg"}
            fill
            className="object-contain hidden dark:block"
            alt="reading"
          />
        </div>
      </div>
    </div>
  );
};
