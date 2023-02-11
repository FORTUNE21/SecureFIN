import { icons } from "./icons";

const Icon = (props: { icon: string; color?: string; className?: string }) => {
  const { icon, color, className } = props;
  return (
    <i
      className={`${icons[icon as keyof typeof icons]} || ${className}`}
      aria-hidden="true"
      style={{ color }}
    />
  );
};

export default Icon;
