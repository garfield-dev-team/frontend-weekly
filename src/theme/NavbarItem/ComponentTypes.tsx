import ComponentTypes from "@theme-original/NavbarItem/ComponentTypes";
import DocVersionNavbarItem from "@site/src/components/NavbarItems/DocVersionNavbarItem";

export default {
  ...ComponentTypes,
  // using the `custom-` prefix is important:
  // the config validation schema will only allow item types with this prefix
  "custom-doc-version-navbar-item": DocVersionNavbarItem,
};
