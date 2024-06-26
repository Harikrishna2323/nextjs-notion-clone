import { Footer } from "./_components/Footer";
import { Heading } from "./_components/heading";
import { Heros } from "./_components/heros";

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justidy-start text-center gap-y-8 flex-1 px-6 pb-10 dark:bg-[#1f1f1f]">
        <Heading />
        <Heros />
        <Footer />
      </div>
    </div>
  );
};

export default MarketingPage;
