"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  MessageSquare,
  Activity,
  Users,
  FileText,
} from "lucide-react";

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "AI Assistant",
    href: "/chat",
    icon: MessageSquare,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: FileText,
  },
  {
    title: "Triage",
    href: "/triage",
    icon: Activity,
  },
  {
    title: "Patients",
    href: "/patients",
    icon: Users,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen border-r border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h1 className="mb-10 text-2xl font-bold">
        MediMind AI
      </h1>

      <nav className="space-y-3">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <Icon size={20} />
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}