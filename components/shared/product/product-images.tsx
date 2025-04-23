"use client";

import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const ProductImages = ({image}:{image:string[]}) => {
  const [current, setCurrent] = useState(0);
  return <div className="space-y-4">
    <Image src={image[current]} alt="product image" height={1000} width={1000} className="min-h-[300px] object-cover object-center"/>

    <div className="flex">
        {image.map((item,index) => (
            <div key={index} onClick={() => setCurrent(index)} className={cn("border mr-2 cursor-pointer hover:border-orange-600", current === index && "border-orange-600")}>
                <Image src={item} alt="product-image" height={100} width={100}/> 
            </div>
        ))}

    </div>

  </div>;
};

export default ProductImages;
