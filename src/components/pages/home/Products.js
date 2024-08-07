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
import { CiShoppingCart } from "react-icons/ci";
import Slider from "../../Slider";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
function Products() {
  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 2,
    },
    639: {
      slidesPerView: 3,
    },
    865: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
    1500: {
      slidesPerView: 4,
    },
    1700: {
      slidesPerView: 4,
    },
  };
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
    {
      name: "V-neck linen T-shirt                 ",
      price: "$45.00",
      disc_price: "$45.00",
      discount: "10% off",
      rating: "5.0",
      tag: "shirt",
      img: "./category/cate4.png",
    },
  ];
  return (
    <section className="w-11/12 mt-20 md:w-10/12 mx-auto pb-10 relative">
      <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
        <div>
          <h6 className="text-grey-700 font-normal">Our Products</h6>
          <h3 className="text-xmd mt-1 text-dark-700">Our Top Products</h3>
        </div>
        <div>
          <div className="flex w-max gap-4">
            <Button
              className="font-jost bg-primaryRed text-white text-sm font-normal rounded-none capitalize border  border-light-50"
              size="sm"
            >
              All
            </Button>
            <Button
              size="sm"
              className="font-jost bg-transparent font-normal text-sm rounded-none capitalize text-dark-700 border  border-light-50"
            >
              Woman
            </Button>
            <Button
              size="sm"
              className="font-jost bg-transparent font-normal text-sm rounded-none capitalize  text-dark-700 border  border-light-50"
            >
              Man
            </Button>
            <Button
              size="sm"
              className="font-jost bg-transparent font-normal text-sm rounded-none capitalize  text-dark-700 border  border-light-50"
            >
              Accessories
            </Button>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-12 gap-4"> */}
      <Slider
        className="overflow-hidden"
        id="product-slider"
        autoPlayEnabled={false}
        pagination={true}
        slidesPerView={4}
        spaceBetween={30}
        autoplay={false}
        breakpoints={breakpoints}
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        style={{
          "--swiper-navigation-size": "18px",
          "--swiper-theme-color": "black-dark-900",
        }}
      >
        {" "}
        {products?.map(
          ({ name, disc_price, price, img, discount, rating, tag }, idx) => (
            <SwiperSlide key={idx} className="h-full">
              {" "}
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
                      className="font-jost text-sm font-medium !py-1 !px-2 bg-white capitalize text-primaryRed absolute top-3 left-2"
                    >
                      {discount}
                    </Button>
                    <div className="hidden group-hover:flex flex-col items-end gap-4 absolute right-2 top-3">
                      <IconButton color="white" size="sm">
                        <GiSelfLove
                          stroke="1"
                          className="h-5 w-5 font-normal"
                        />
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

                    <div className="hidden group-hover:block  absolute bottom-3 left-[22%]">
                      <Link href="cart">
                        {" "}
                        <Button
                          size="sm"
                          className="font-jost bg-white font-normal capitalize text-sm text-dark-500 flex justify-center items-center h-[35px]"
                        >
                          <CiShoppingCart className="fill-text-dark-500 mr-2" />{" "}
                          Add To Carts
                        </Button>
                      </Link>
                    </div>
                  </CardHeader>
                  <CardBody className="text-center px-2 mb-1 mt-1">
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-grey-600">{tag}</p>
                      <h6 className="flex justify-center items-center text-dark-700">
                        <GoDotFill className="fill-primaryRed" />
                        {rating}
                      </h6>
                    </div>
                    <h6 className="text-left text-dark-700">{name}</h6>
                    <h6 className="mt-1 flex gap-3 justify-start items-center text-dark-700 ">
                      {disc_price}
                      <span className="font-normal line-through text-grey-600">
                        {price}
                      </span>
                    </h6>
                  </CardBody>
                </Card>
              </div>
            </SwiperSlide>
          )
        )}
      </Slider>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="swiper-custom-pagination"></div>
      </div>
    </section>
  );
}

export default Products;
