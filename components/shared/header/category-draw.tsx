import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { getAllCategories } from "@/lib/actions/product.actions";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const CategoryDraw = async () => {
  const categories = await getAllCategories();

  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline">
          <MenuIcon />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="h-full max-w-sm">
        <DrawerHeader>
          <DrawerTitle>Select Category</DrawerTitle>
          <div className="space-y-1 mt-6">
            {categories.map((x) => (
              <Button
                variant="ghost"
                key={x.category}
                className="w-full justify-start"
                asChild
              >
                <DrawerClose>
                  <Link href={`/search?category=${x.category}`}>
                    {x.category} ({x._count})
                  </Link>
                </DrawerClose>
              </Button>
            ))}
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default CategoryDraw;
