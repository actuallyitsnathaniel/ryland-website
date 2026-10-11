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
        className={`group flex cursor-pointer flex-col items-center gap-1 border-0 bg-transparent px-1 py-0 text-white transition-transform duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 sm:gap-2 ${
          focused ? "scale-[1.15]" : "scale-100"
        }`}
      >
        <img
          src={profilePic}
          alt=""
          className="aspect-square h-36 w-36 max-w-none shrink-0 rounded-full object-cover shadow-lg shadow-black/40 ring-1 ring-white/10 transition duration-200 group-hover:brightness-110 group-hover:ring-white/30"
          loading="eager"
        />
        <span
          className={`text-xl tracking-[-0.02em] ${
            focused ? "underline underline-offset-4" : ""
          }`}
        >
          {name}
        </span>
      </button>
    </motion.div>
  );
};

export default BandMember;
