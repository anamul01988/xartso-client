"use client";
import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import CartGallery from "./cartGallery";
import CartInfo from "./cartInformation";
import CommonCategories from "../../common/commonCategories";
import { useSearchParams } from "next/navigation";
function Cart() {
  const searchParams = useSearchParams();
  return (
    <section className="">
      <div className=" w-full bg-secondary-500  flex flex-col justify-center items-center h-[200px]">
        <h3 className="text-xmd capitalize">Shop List</h3>
        <Breadcrumbs>
          <a href="#" className="opacity-60 text-primaryRed text-sm">
            Home
          </a>
          <a href="#">{searchParams.get("search")}</a>
        </Breadcrumbs>
      </div>
      <CartGallery />
      <CartInfo />
      <section className="w-11/12 mt-15 pb-10 relative md:w-10/12 mx-auto">
        <h3 className="text-left text-xmd my-10 capitalize">
          People Also bought
        </h3>
        <CommonCategories />
      </section>
    </section>
  );
}

export default Cart;
