"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, Mail, Settings } from "lucide-react";
import Link from "next/link";

const navigationItems = [
  { icon: Home, label: "Home", href: "/home" },
  { icon: Mail, label: "Demo", href: "/demo" },
  { icon: Settings, label: "Game", href: "/game" },
];

export default function MainSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>Wisconsin Card Sorting Game</SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navigationItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild>
                <Link href={item.href}>
                  <item.icon className="mr-2 h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
