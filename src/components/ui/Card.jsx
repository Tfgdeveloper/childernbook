import { ArrowUpRight } from "lucide-react";

const Card = ({
  title,
  description,
  icon,
  children,
  action,
  className = "",
}) => {
  return (
    <div
      className={`group rounded-2xl  p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl  ${className}`}
    >
      {icon && (
        <div className="mb-6 flex w-15 items-center justify-center md:justify-start ">
          {icon}
        </div>
      )}

      {title && (
        <h3 className="font-heading text-2xl font-semibold">
          {title}
        </h3>
      )}

      {description && (
        <p className="mt-3 font-body text-sm leading-6 text-neutral-600">
          {description}
        </p>
      )}

      {children}

      {action && (
        <button className="mt-6 flex items-center gap-2 font-body text-sm font-semibold">
          {action}
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </button>
      )}
    </div>
  );
};

export default Card;