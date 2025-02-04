import ShowLink from "../../components/show-link";
import pageTransition, { itemVariants } from "../../util/transitionPage";
import { motion } from "framer-motion";

import showFeb18 from "../../assets/images/thumbnails/pianos-show.png";

const Shows = () => {
  return (
    <main className="flex flex-col min-h-full md:mt-16 text-center p-3 text-white justify-center text-3xl">
      <div className="mt-16" />
      <motion.div variants={itemVariants}>
        <div className="md:p-3">
          <ShowLink
            thumbnail={showFeb18}
            link="https://link.dice.fm/R1fdd3071bc7?dice_id=R1fdd3071bc7"
            venue="158 Ludlow St, New York, NY 10002, USA"
            artists={"Sockeye | Ryland | Marou"}
            date={"Tue, Feb 18, 7:00 PM EST"}
            alt={"show-feb-18th"}
          />
        </div>
      </motion.div>
    </main>
  );
};

export default pageTransition(Shows);
