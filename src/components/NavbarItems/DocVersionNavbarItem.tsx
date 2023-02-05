import * as React from "react";
import DropdownNavbarItem from "@theme-original/NavbarItem/DropdownNavbarItem";
import type { Props } from "@theme/NavbarItem/DropdownNavbarItem";
import { useLocation } from "@docusaurus/router";

const DocVersionNavbarItem = ({ mobile, items, ...props }: Props) => {
  const { pathname } = useLocation();

  const latest = items.at(0);
  const current = items.find((n) => pathname.includes(n.to));

  return (
    <DropdownNavbarItem
      {...props}
      mobile={mobile}
      label={`Blog of ${current?.label || latest.label}`}
      to={current?.to || latest.to}
      items={items}
      // isActive={dropdownActiveClassDisabled ? () => false : undefined}
    />
  );
};

export default DocVersionNavbarItem;
