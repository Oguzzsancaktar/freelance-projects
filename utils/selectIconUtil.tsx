import { CircleMinusIcon, CirclePlusIcon, CityIcon, CompanyLogo, LawIcon, MessageIcon, PostboxIcon, TelephoneIcon, WorldIcon, YoutubeIcon } from "@/components/icons";


type IconTypes = "circle-minus" | "circle-plus" | 'city' | 'message' | 'postbox' | 'telephone' | 'world' | "youtube" | "logo" | "law";

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
    case 'law':
      return <LawIcon />;
    case 'logo':
      return <CompanyLogo />;
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
