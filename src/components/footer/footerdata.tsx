import { contact } from "@/utils/constent";

export const footerData = {
  logo: "/images/logo.png",
  lists: [
    {
      title: "Visit",
      links: [
        { label: "Near Mahabalipuram", href: contact.addressLink },
        { label: "Tamil Nadu, India" },
      ],
    },
    {
      title: "Talk to us",
      links: [
        { label: contact.phoneLabel, href: contact.callCta },
        { label: contact.email, href: `mailto:${contact.email}` },
      ],
    },
    {
      title: "Follow",
      links: [{ label: "Instagram", href: contact.socialMedia.instagram }],
    },
  ],
};
