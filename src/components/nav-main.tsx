"use client";

import { type LucideIcon } from "lucide-react";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const navigate = useRouter();
  const pathName = usePathname();

  return (
    <SidebarGroup>
      <SidebarMenu className="gap-2">
        {items.map((item, index: number) => (
          <SidebarMenuItem
            key={index}
            className="h-12 flex items-center justify-center"
          >
            <SidebarMenuButton
              onClick={() => {
                navigate.push(item.url);
              }}
              tooltip={item.title}
              className={cn(
                "hover:ring transition-colors rounded-xl active:bg-primary/50 active:text-white bg-white",
                pathName === item.url &&
                  "bg-primary text-white ring-1 ring-inset",
                "h-full w-full"
              )}
            >
              {item.icon && <item.icon />}
              <span>{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
