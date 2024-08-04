"use client";
import React from "react";
// import img1 from "cate1.png";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  rating,
  IconButton,
  Badge,
} from "@material-tailwind/react";
import { GoDotFill } from "react-icons/go";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
function Products() {
  const products = [
    {
      name: "Ribbed modal T-shirt",
      img: "./category/cate1.png",
      discount: "10% off",
      price: "$45.00",
      disc_price: "$45.00",
      rating: "5.0",
      tag: "shirt",
    },
    {
      name: "Loose Fit Hoodie",
      price: "$45.00",
      discount: "10% off",
      disc_price: "$45.00",
      rating: "5.0",
      tag: "shirt",
      img: "./category/cate2.png",
    },
    {
      name: "Ribbed Tank Top",
      price: "$45.00",
      disc_price: "$45.00",
      discount: "10% off",
      rating: "5.0",
      tag: "shirt",
      img: "./category/cate3.png",
    },
    {
      name: "V-neck linen T-shirt                 ",
      price: "$45.00",
      disc_price: "$45.00",
      discount: "10% off",
      rating: "5.0",
      tag: "shirt",
      img: "./category/cate4.png",
    },
    // {
    //   name: "Classic White Shirt ",
    //   price: "$45.00",
    //  discount: "10% off",
    //   disc_price: "$45.00",
    //   rating: "5.0",
    //   tag: "shirt",
    //   img: "./category/cate5.png",
    // },
  ];
  return (
    <section className="w-11/12 mt-20 md:w-10/12 mx-auto">
      <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
        <div>
          <p className="text-base text-grey-700">Our Products</p>
          <h3 className=" mt-2">Our Top Products</h3>
        </div>
        <div>
          <div className="flex w-max gap-4">
            <Button
              className="bg-primaryRed text-white font-normal rounded-none capitalize border  border-light-50"
              size="sm"
            >
              All
            </Button>
            <Button
              size="sm"
              className="bg-transparent font-normal rounded-none capitalize text-dark-700 border  border-light-50"
            >
              Woman
            </Button>
            <Button
              size="sm"
              className="bg-transparent font-normal rounded-none capitalize  text-dark-700 border  border-light-50"
            >
              Man
            </Button>
            <Button
              size="sm"
              className="bg-transparent font-normal rounded-none capitalize  text-dark-700 border  border-light-50"
            >
              Accessories
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        {products?.map(
          ({ name, disc_price, price, img, discount, rating, tag }, idx) => (
            <div
              key={idx}
              className="group col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
            >
              <Card className="h-[400px] shadow-sm">
                <CardHeader
                  floated={false}
                  className="h-4/5 !rounded-none !rounded-tl-lg !rounded-tr-lg shadow-none !m-0 relative"
                >
                  <img
                    src={img}
                    alt="profile-picture"
                    className="object-cover object-center w-full h-full "
                  />
                  <Button
                    size="sm"
                    className="!py-1 !px-2 bg-white capitalize text-primaryRed absolute top-3 left-2"
                  >
                    {discount}
                  </Button>
                  <div className="hidden group-hover:flex flex-col items-end gap-4 absolute right-2 top-3">
                    <IconButton color="white" size="sm">
                      <GiSelfLove stroke="1" className="h-5 w-5 font-normal" />
                    </IconButton>

                    {/* <Badge content="5"> */}
                    <IconButton color="white" size="sm">
                      <FaCartShopping className="h-5 w-5" />
                    </IconButton>
                    {/* </Badge> */}
                    <IconButton color="white" size="sm">
                      <FaRegUser className="h-5 w-5" />
                    </IconButton>
                  </div>

                  <Button
                    size="sm"
                    className="hidden group-hover:block !py-1 !px-2 bg-white font-normal capitalize text-dark-500 absolute bottom-3 left-1/3"
                  >
                    Add To Carts
                  </Button>
                </CardHeader>
                <CardBody className="text-center px-2 mb-1 mt-1">
                  <div className="flex justify-between items-center">
                    <p className="text-xsm text-grey-600">{tag}</p>
                    <p className="flex justify-center items-center text-xsm font-medium text-dark-700">
                      <GoDotFill className="fill-primaryRed" />
                      {rating}
                    </p>
                  </div>
                  <h6 className="text-base text-left">{name}</h6>
                  <p className="flex gap-3 justify-start items-center font-medium text-dark-700 text-base ">
                    {disc_price}
                    <span className="text-xsm font-normal ext-grey-600">
                      {price}
                    </span>
                  </p>
                </CardBody>
              </Card>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Products;
