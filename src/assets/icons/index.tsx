import { Icons } from "@/types";
import ArrowDown from "./ArrowDownIcon.svg";
import ArrowRight from "./ArrowRightIcon.svg";
import ArrowTopRight from "./ArrowTopRightIcon.svg";
import Facebook from "./FacebookIcon.svg";
import Instagram from "./InstagramIcon.svg";
import Linkedin from "./LinkedinIcon.svg";
import Logo from "./LogoIcon.svg";
import Menu from "./MenuIcon.svg";
import Sort from "./SortIcon.svg";
import StrokeLong from "./StrokeLongIcon.svg";
import StrokeShort from "./StrokeShortIcon.svg";
import Trailing from "./TrailingIcon.svg";
import TrailingTopRight from "./TrailingTopRightIcon.svg";
import Twitter from "./TwitterIcon.svg";
import Youtube from "./YoutubeIcon.svg";

export const LogoIcon = (props: Icons) => <Logo {...props} />;

export const SortIcon = (props: Icons) => <Sort {...props} />;

export const ArrowTopRightIcon = (props: Icons) => <ArrowTopRight {...props} />;

export const ArrowRightIcon = (props: Icons) => <ArrowRight {...props} />;

export const ArrowDownIcon = (props: Icons) => <ArrowDown {...props} />;

export const MenuIcon = (props: Icons) => <Menu {...props} />;

export const StrokeLongIcon = (props: Icons) => <StrokeLong {...props} />;

export const StrokeShortIcon = (props: Icons) => <StrokeShort {...props} />;

export const TrailingIcon = (props: Icons) => <Trailing {...props} />;

export const TrailingTopRightIcon = (props: Icons) => (
  <TrailingTopRight {...props} />
);

export const FacebookIcon = (props: Icons) => <Facebook {...props} />;

export const InstagramIcon = (props: Icons) => <Instagram {...props} />;

export const LinkedinIcon = (props: Icons) => <Linkedin {...props} />;

export const TwitterIcon = (props: Icons) => <Twitter {...props} />;

export const YoutubeIcon = (props: Icons) => <Youtube {...props} />;
