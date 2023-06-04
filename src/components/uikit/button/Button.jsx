import { cva } from "class-variance-authority";
//
const button = cva(["rounded-xl", "py-2", "px-4", "text-center", "font-semibold"], {
  variants: {
    variant: {
      primary: ["bg-primary", "text-white"],
      secondary: [],
    },
    size: {
      sm: [],
      md: ["text-sm"],
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

function Button({ children, variant, ...props }) {
  return (
    <button className={button({ variant })} {...props}>
      {children}
    </button>
  );
}

export default Button;
