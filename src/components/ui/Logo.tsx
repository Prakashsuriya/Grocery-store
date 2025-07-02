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
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2F8f78a356a05540998176ea24bafbe59e%2Fc93154d951494f618adbb017db30f7ce?format=webp&width=800"
        alt="Banyan Grocers Logo"
        className={cn(
          "rounded-full object-cover shadow-lg",
          iconSizes[size],
          className,
        )}
      />
    );
  }

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2F8f78a356a05540998176ea24bafbe59e%2F1663f0e58d6a461a8d196d170a0497c3?format=webp&width=800"
        alt="Banyan Grocers - An Urban Tradition"
        className={cn(
          "object-contain shadow-lg",
          size === "sm"
            ? "h-16"
            : size === "md"
              ? "h-24"
              : size === "lg"
                ? "h-32"
                : "h-48",
        )}
      />
    </div>
  );
}
