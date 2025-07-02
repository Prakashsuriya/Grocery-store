import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "full" | "icon";
}

export default function Logo({
  className,
  size = "md",
  variant = "full",
}: LogoProps) {
  const sizeClasses = {
    sm: variant === "full" ? "text-lg" : "w-6 h-6",
    md: variant === "full" ? "text-2xl" : "w-8 h-8",
    lg: variant === "full" ? "text-4xl" : "w-12 h-12",
    xl: variant === "full" ? "text-6xl" : "w-16 h-16",
  };

  const iconSizes = {
    sm: "w-6 h-6 text-xs",
    md: "w-8 h-8 text-sm",
    lg: "w-12 h-12 text-lg",
    xl: "w-16 h-16 text-2xl",
  };

  if (variant === "icon") {
    return (
      <div
        className={cn(
          "bg-gradient-to-br from-fresh-400 via-fresh-500 to-fresh-600 rounded-full flex items-center justify-center shadow-lg",
          iconSizes[size],
          className,
        )}
      >
        <span className="text-white font-bold">B</span>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center space-x-3", className)}>
      <div
        className={cn(
          "bg-gradient-to-br from-fresh-400 via-fresh-500 to-fresh-600 rounded-full flex items-center justify-center shadow-lg",
          iconSizes[size],
        )}
      >
        <span className="text-white font-bold">B</span>
      </div>
      <div className="flex flex-col">
        <span
          className={cn(
            "font-bold bg-gradient-to-r from-fresh-600 to-fresh-700 bg-clip-text text-transparent leading-tight",
            sizeClasses[size],
          )}
        >
          Banyan
        </span>
        <span
          className={cn(
            "font-medium text-fresh-600/80 leading-tight",
            size === "sm"
              ? "text-xs"
              : size === "md"
                ? "text-sm"
                : size === "lg"
                  ? "text-lg"
                  : "text-xl",
          )}
        >
          Grocers
        </span>
      </div>
    </div>
  );
}
