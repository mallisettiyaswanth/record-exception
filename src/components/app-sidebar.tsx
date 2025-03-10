"use client";

import * as React from "react";
import {
  File,
  Info,
  LayoutDashboard,
  Megaphone,
  Plus,
  Settings2,
} from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();
  const { user } = useUser();

  const data = {
    user: {
      name: user?.fullName || "",
      email: user?.primaryEmailAddress?.emailAddress || "",
      avatar: user?.imageUrl || null,
    },

    navMain: [
      {
        title: "Dashboard",
        url: "/home/dashboard",
        icon: LayoutDashboard,
        isActive: true,
      },
      {
        title: "Remarks",
        url: "/home/remarks",
        icon: Info,
      },
      {
        title: "Request",
        url: "/home/request",
        icon: Plus,
      },
      {
        title: "Applications",
        url: "/home/applications",
        icon: File,
      },
      {
        title: "Notifications",
        url: "/home/notifications",
        icon: Megaphone,
      },
    ],
  };
  const pathName = usePathname();
  const navigate = useRouter();

  return (
    <Sidebar collapsible="icon" {...props} className="border-none">
      <SidebarHeader
        className={cn(
          "flex-row items-center justify-center p-6",
          state === "collapsed" && "justify-center"
        )}
      >
        {/* <div className="bg-primary text-white rounded-full p-3 font-bold h-fit w-fit">
          PM.
        </div> */}
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="flex items-center justify-center py-5">
        <SidebarMenuButton
          onClick={() => {
            navigate.push("/home/settings");
          }}
          tooltip={"Settings"}
          className={cn(
            "hover:ring transition-colors rounded-xl active:bg-primary/50 active:text-white bg-white",
            pathName === "/home/settings" &&
              "bg-primary text-white ring-1 ring-inset",
            "h-full w-full"
          )}
        >
          <Settings2 />
          <span>{"Settings"}</span>
        </SidebarMenuButton>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
