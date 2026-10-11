import { motion } from "framer-motion";
import { itemVariants } from "../../util/transitionPage";

type BandMemberProps = {
  profilePic: string;
  name: string;
  focused: boolean;
  onSelect: () => void;
};

const BandMember = ({
  profilePic,
  name,
  focused,
  onSelect,
}: BandMemberProps) => {
  return (
    <motion.div
      variants={itemVariants}
      className="flex w-[calc((100%-1rem)/2)] shrink-0 flex-col items-center sm:w-[calc((100%-2rem)/3)]"
    >
      <button
        type="button"
        onClick={onSelect}
        aria-pressed={focused}
        className="group flex cursor-pointer flex-col items-center gap-2 border-0 bg-transparent p-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
      >
        <span
          className={`inline-flex transition-transform duration-300 ease-out ${
            focused ? "scale-110" : "scale-100"
          }`}
        >
          <img
            src={profilePic}
            alt=""
            className="aspect-square h-28 w-28 rounded-full object-cover shadow-lg shadow-black/40 ring-1 ring-white/10 transition duration-200 group-hover:brightness-110 group-hover:ring-white/30 sm:h-36 sm:w-36"
            loading="eager"
          />
        </span>
        <span className="text-xl tracking-[-0.02em]">{name}</span>
      </button>
    </motion.div>
  );
};

export default BandMember;
