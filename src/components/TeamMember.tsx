
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


interface TeamMemberProps {
  name: string;
  designation: string;
  institute: string;
  photo: string;
  bio?: string;
  email?: string;
}

export const TeamMember = ({ name, designation, institute, photo, bio, email }: TeamMemberProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <div className="bg-card rounded-xl shadow-card overflow-hidden transition-all hover:shadow-hover cursor-pointer border border-border/50">
        <div className="aspect-square overflow-hidden relative">
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover transition-transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="p-5">
          <h3 className="font-bold text-foreground text-lg mb-2">{name}</h3>
          <p className="text-sm text-muted-foreground font-medium">
            {designation} | {institute}
          </p>
        </div>
      </div>

      <AnimatePresence>
        {showDetails && (bio || email) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light text-primary-foreground rounded-xl shadow-hover p-6 flex flex-col justify-center z-10"
          >
            <h3 className="font-bold text-xl mb-2">{name}</h3>
            <p className="text-sm mb-3 opacity-95 font-medium">{designation}</p>
            {bio && <p className="text-sm mb-3 leading-relaxed">{bio}</p>}
            {email && (
              <a
                href={`mailto:${email}`}
                className="text-sm underline hover:opacity-80 font-medium"
              >
                {email}
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
