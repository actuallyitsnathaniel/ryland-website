import SEO from "../../components/seo";
import { sectionTitle } from "../../util/util";

const Merch = () => {
  return (
    <div className="mx-auto flex max-w-prose flex-col items-center gap-4 px-2 text-center text-xl leading-normal text-white sm:px-8">
      <SEO
        title="Merch - Ryland"
        description="Ryland merch. Nothing in the shop right now."
        url="https://www.weareryland.com/merch"
      />
      <h1 className={sectionTitle}>Merch</h1>
      <p className="text-white/60">Nothing in the shop right now.</p>
    </div>
  );
};

export default Merch;
