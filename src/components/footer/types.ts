export interface FooterLink {
  name: string;
  path: string;
}

export interface FooterLinks {
  [category: string]: FooterLink[];
}