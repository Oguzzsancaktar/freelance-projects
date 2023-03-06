import { CircleMinusIcon, CirclePlusIcon, CityIcon, MessageIcon, PostboxIcon, TelephoneIcon, YoutubeIcon } from "@/components/icons";
import WorldIcon from "@/components/icons/WorldIcon";

type IconTypes = "circle-minus" | "circle-plus" | 'city' | 'message' | 'postbox' | 'telephone' | 'world' | "youtube";

export const selectIcon = (iconName: IconTypes, size?: string, color?: string) => {
  if (!size) size = '3rem';
  if (!color) color = 'currentColor';

  switch (iconName) {
    case 'circle-minus':
      return <CircleMinusIcon />;
    case 'circle-plus':
      return <CirclePlusIcon />;
    case 'city':
      return <CityIcon />;
    case 'message':
      return <MessageIcon />;
    case 'telephone':
      return <TelephoneIcon />;
    case 'postbox':
      return <PostboxIcon />;
    case 'world':
      return <WorldIcon />;
    case 'youtube':
      return <YoutubeIcon />;
    default:
      return undefined;
  }
};
