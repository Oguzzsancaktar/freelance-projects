import { CaseIcon, CircleMinusIcon, CirclePlusIcon, CityIcon, CompanyIcon, CompanyLogo, FacebookIcon, LawIcon, LinkedinIcon, MessageIcon, PostboxIcon, TelephoneIcon, TwitterIcon, WhatsappIcon, WorldIcon, YoutubeIcon } from "@/components/icons";

type IconTypes = "case" | "circle-minus" | "circle-plus" | 'city' | 'company-icon' | 'facebook' | 'linkedin' | 'message' | 'postbox' | 'telephone' | "twitter" | 'world' | "youtube" | "logo" | "law" | "whatsapp";

export const selectIcon = (iconName: IconTypes, size?: string, color?: string) => {
  if (!size) size = '3rem';
  if (!color) color = 'currentColor';

  switch (iconName) {

    case 'case':
      return <CaseIcon />;
    case 'circle-minus':
      return <CircleMinusIcon />;
    case 'circle-plus':
      return <CirclePlusIcon />;
    case 'city':
      return <CityIcon />;
    case 'company-icon':
      return <CompanyIcon />;
    case 'facebook':
      return <FacebookIcon />;
    case 'linkedin':
      return <LinkedinIcon />;
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
    case 'twitter':
      return <TwitterIcon />;
    case 'whatsapp':
      return <WhatsappIcon />;
    case 'world':
      return <WorldIcon />;
    case 'youtube':
      return <YoutubeIcon />;
    default:
      return undefined;
  }
};
