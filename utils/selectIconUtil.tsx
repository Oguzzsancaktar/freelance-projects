import { MessageIcon } from "@/components/icons";
import WorldIcon from "@/components/icons/default/WorldIcon";

export const selectIcon = (iconName: string, size?: string, color?: string) => {
  if (!size) size = '3rem';
  if (!color) color = 'currentColor';

  switch (iconName) {
    case 'message':
      return <MessageIcon />;
    case 'world':
      return <WorldIcon />;
    default:
      return undefined;
  }
};
