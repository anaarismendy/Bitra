import { cn } from "@/lib/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide";
};

export default function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-6 md:px-8 lg:px-12",
        size === "default" && "max-w-[1200px]",
        size === "wide" && "max-w-screen-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}
