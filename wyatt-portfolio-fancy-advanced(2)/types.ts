export interface NavItem {
  label: string;
  href: string;
  index: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export enum Theme {
  Black = 'black',
  White = 'white',
  Blue = 'blue',
  OffBlack = 'off-black',
}
