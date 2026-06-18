import { motion } from "framer-motion";
import { itemVariants, EASE_EXPO_OUT } from "../../util/transitionPage";

type BandMemberProps = {
  profilePic: string;
  name: string;
  desc: string;
  expanded: boolean;
  onToggle: () => void;
};

const BandMember = ({
  profilePic,
  name,
  desc,
  expanded,
  onToggle,
}: BandMemberProps) => {
  return (
    <motion.div
      variants={itemVariants}
      onClick={onToggle}
      whileHover={expanded ? {} : { scale: 1.05 }}
      whileTap={expanded ? {} : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={
        expanded
          ? "fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-black/70 backdrop-blur-lg cursor-pointer px-6"
          : "flex flex-col items-center gap-2 p-2 cursor-pointer group"
      }
    >
      <img
        src={profilePic}
        alt={name}
        className={
          expanded
            ? "h-[345px] md:h-[400px]"
            : "h-28 w-28 sm:h-36 sm:w-36 object-cover rounded-lg transition-all duration-200 opacity-90 group-hover:opacity-100 grayscale group-hover:grayscale-0"
        }
        loading="eager"
      />
      <p className="font-sans-grotesk tracking-[-0.01em] text-lg lg:text-xl">
        {name}
      </p>
      {expanded && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: EASE_EXPO_OUT }}
          className="text-lg text-center max-w-md text-white/80"
        >
          {desc}
        </motion.p>
      )}
    </motion.div>
  );
};

export default BandMember;
