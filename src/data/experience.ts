export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Eminence Technology",
    role: "Shopify Frontend Developer",
    period: "Aug 2025 – Aug 2026",
    location: "Mohali, India",
    description: "Built and maintained responsive Shopify storefronts and custom web interfaces.",
    highlights: [
      "Customized Shopify Liquid sections, product templates, and collection pages",
      "Converted Figma and UI designs into clean, responsive frontend code",
      "Collaborated with clients and project teams to implement requested store features",
      "Tested and refined layouts across desktop, tablet, and mobile browsers"
    ]
  },
  {
    company: "Web Forte Technologies",
    role: "Web Designer",
    period: "May 2024 – Jul 2025",
    location: "Chandigarh, India",
    description: "Designed and developed responsive business websites and CMS-driven client pages.",
    highlights: [
      "Built responsive websites using HTML, CSS, JavaScript, and WordPress (ACF)",
      "Created visual designs in Figma and translated approved mockups into code",
      "Worked with Webflow and HubSpot for dynamic page builds and campaign landing pages",
      "Applied on-page SEO basics, image optimization, and responsive testing"
    ]
  },
  {
    company: "Vqcodes Software Solutions LLP",
    role: "Web Designer",
    period: "Nov 2022 – Aug 2023",
    location: "Mohali, India",
    description: "Created website layouts, UI components, and responsive frontend implementations.",
    highlights: [
      "Designed web page layouts using CSS, Photoshop, and wireframing tools",
      "Implemented responsive frontend layouts for multi-device compatibility",
      "Supported client design revisions and website styling adjustments"
    ]
  },
  {
    company: "Bepoj Technology",
    role: "Web Designer & Graphics Designer",
    period: "Jun 2022 – Nov 2022",
    location: "Banikhet / Dalhousie, India",
    description: "Crafted visual assets, graphic materials, and foundational web styling.",
    highlights: [
      "Designed website graphic assets, marketing banners, and visual layouts",
      "Assisted with HTML and CSS frontend implementation for client sites",
      "Ensured brand consistency across digital and print collateral"
    ]
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Lovely Professional University (LPU)",
    period: "2024 – Present"
  },
  {
    degree: "Senior Secondary (12th Non-Medical)",
    institution: "H.P.B.O.S.E, Dharamshala",
    period: "2020"
  }
];

export const RESUME_URL = "https://drive.google.com/file/d/1z0V5Ms3hnpMtQ2jbnFL_yHjpsgPBXtg8/view?usp=sharing";
