"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, SunMoon } from "lucide-react";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="focus-visible:ring-0 focus-visible:ring-offset-0">
          {theme === "light" ? (
            <SunIcon />
          ) : theme === "dark" ? (
            <MoonIcon />
          ) : (
            <SunMoon />
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={theme == "system"}
          onClick={() => setTheme("system")}
        >
          System
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme == "dark"}
          onClick={() => setTheme("dark")}
        >
          dark
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme == "light"}
          onClick={() => setTheme("light")}
        >
          light
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModeToggle;
