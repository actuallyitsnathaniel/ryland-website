import SEO from "../../components/seo";
import { sectionTitle } from "../../util/util";

const Drinks = () => {
  return (
    <div className="mx-auto flex max-w-prose flex-col items-center gap-4 px-2 text-center text-xl leading-normal text-white sm:px-8">
      <SEO
        title="Drinks - Ryland"
        description="Ryland drinks. Nothing on the menu right now."
        url="https://www.weareryland.com/drinks"
      />
      <h1 className={sectionTitle}>Drinks</h1>
      <p className="text-white/60">Nothing on the menu right now.</p>
    </div>
  );
};

export default Drinks;
