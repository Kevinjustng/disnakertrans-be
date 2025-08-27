import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksContact extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    email: Schema.Attribute.Email;
    map: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    number: Schema.Attribute.String;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    CtaButtons: Schema.Attribute.Component<'elements.cta-buttons', true>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subheading: Schema.Attribute.String;
  };
}

export interface BlocksPimpinanOpd extends Struct.ComponentSchema {
  collectionName: 'components_blocks_pimpinan_opds';
  info: {
    displayName: 'Pimpinan OPD';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    jabatan: Schema.Attribute.String;
    namalengkap: Schema.Attribute.String;
    pangkat: Schema.Attribute.String;
  };
}

export interface ElementsCtaButtons extends Struct.ComponentSchema {
  collectionName: 'components_elements_cta_buttons';
  info: {
    displayName: 'CtaButtons';
  };
  attributes: {
    ctachild: Schema.Attribute.Component<'elements.cta-child', true>;
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean;
    text: Schema.Attribute.String;
  };
}

export interface ElementsCtaChild extends Struct.ComponentSchema {
  collectionName: 'components_elements_cta_children';
  info: {
    displayName: 'cta-child';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExtrenal: Schema.Attribute.Boolean;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    children: Schema.Attribute.Component<'elements.cta-buttons', true>;
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    LogoText: Schema.Attribute.String;
    LogoText2: Schema.Attribute.String;
  };
}

export interface ElementsPostheadline extends Struct.ComponentSchema {
  collectionName: 'components_elements_postheadlines';
  info: {
    displayName: 'postheadline';
  };
  attributes: {
    postheadline: Schema.Attribute.String;
  };
}

export interface ElementsSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_social_links';
  info: {
    displayName: 'SocialLink';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    logo: Schema.Attribute.Component<'elements.logo', false>;
    navigation: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    logo: Schema.Attribute.Component<'elements.logo', false>;
    navigation: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface LayoutNavigation extends Struct.ComponentSchema {
  collectionName: 'components_layout_navigations';
  info: {
    displayName: 'navigation';
  };
  attributes: {
    children: Schema.Attribute.Component<'elements.cta-buttons', true>;
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean;
    text: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {};
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {};
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.contact': BlocksContact;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.pimpinan-opd': BlocksPimpinanOpd;
      'elements.cta-buttons': ElementsCtaButtons;
      'elements.cta-child': ElementsCtaChild;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'elements.postheadline': ElementsPostheadline;
      'elements.social-link': ElementsSocialLink;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.navigation': LayoutNavigation;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
