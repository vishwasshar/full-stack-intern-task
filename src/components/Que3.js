import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { BiSolidStore, BiRupee } from "react-icons/bi";
import {
  AiFillHome,
  AiOutlineSearch,
  AiFillPlusCircle,
  AiOutlineWhatsApp,
  AiFillSetting,
  AiOutlinePlus,
  AiOutlineDown,
  AiOutlineMail,
  AiOutlineFilter,
  AiOutlineMenu,
} from "react-icons/ai";

const Que3 = () => {
  const navItems = [
    { name: "Home", icon: AiFillHome },
    { name: "Parties", icon: AiFillHome },
    { name: "Items", icon: AiFillHome },
    { name: "Sale", icon: AiFillHome },
    { name: "Purchase", icon: AiFillHome },
    { name: "Expenses", icon: AiFillHome },
    { name: "Cash & Bank", icon: AiFillHome },
    { name: "My Online Store", icon: AiFillHome },
    { name: "Reports", icon: AiFillHome },
  ];

  useLayoutEffect(() => {
    console.log("fdsa");
  }, []);

  return (
    <div className="flex h-[100vh]  overflow-hidden">
      <nav className="w-[18%]  bg-gray-950 text-white hidden md:block">
        <Link
          to={"/Que3"}
          className="flex justify-evenly items-center h-[10%] w-[100%] text-lg font-semibold"
        >
          <BiSolidStore size={25} />
          Machinery and Pa.. {">"}
        </Link>
        <ul className="h-[80%] overflow-y-auto">
          {navItems.map((item) => {
            return (
              <li className="w-full cursor-pointer py-3 hover:bg-gray-800 flex items-center select-none">
                <item.icon className="inline-block mx-4" />
                <h3>{item.name}</h3>
                <div className="ml-auto mr-5 font-semibold">+</div>
              </li>
            );
          })}
        </ul>
        <Link className=" flex items-center h-[15%] full cursor-pointer  hover:bg-gray-800 ">
          <AiFillHome className="mx-4" /> Apply for Loan
          <span className=" mx-2 px-2 bg-red-700 rounded-md">New</span>
        </Link>
      </nav>
      <div className="w-[100%] md:w-[82%] h-auto bg-gray-300 overflow-y-auto overflow-x-hidden">
        <header className=" w-full flex flex-col sm:flex-row justify-between items-center p-3 bg-white ">
          <div className="w-[100%] sm:w-[25%] flex justify-between items-center">
            <button
              className="p-2 rounded-full"
              onClick={() => {
                console.log("hello");
              }}
            >
              <AiOutlineMenu className="mx-2 block md:hidden" />
            </button>
            <div className="relative flex items-center text-lg text-gray-500 focus-within:text-gray-900">
              <AiOutlineSearch className="absolute left-3  " />
              <input
                type="search"
                className="w-[100%] bg-transparent pl-9 py-2 pr-2 rounded-full "
                placeholder="Search Transactions"
              />
            </div>
          </div>
          <div className="w-[100%] sm:w-[60%] lg:w-[50%] flex justify-between ">
            <button className="py-2 px-5 rounded-full bg-red-200 hover:bg-red-300 text-red-500 text-sm font-bold flex  items-center shadow-lg">
              <AiFillPlusCircle size={25} className="mr-2 hidden sm:block" />
              Add Sale
            </button>
            <button className="py-2 px-5 rounded-full bg-blue-200 hover:bg-blue-300 text-blue-500 text-sm font-bold flex  items-center shadow-lg">
              <AiFillPlusCircle size={25} className="mr-2  hidden sm:block" />
              Add Purchase
            </button>
            <button className="py-2 px-5 rounded-full bg-white hover:bg-gray-100 text-blue-500 text-sm font-bold flex  items-center shadow-lg border">
              <AiFillPlusCircle size={25} className="mr-2 hidden sm:block" />
              Add More
            </button>
            <button className="py-2 pl-4 text-gray-500 hover:text-gray-700 text-sm border-l-2 hidden md:block">
              <AiOutlineWhatsApp size={25} className="" />
            </button>
            <button className="py-2 pl-4 text-gray-500 hover:text-gray-700 text-sm hidden md:block">
              <AiFillSetting size={25} className="" />
            </button>
          </div>
        </header>
        <h2 className="text-center py-3 text-lg text-blue-600 font-semibold bg-slate-200 shadow-2xl">
          NAME
        </h2>
        <div className=" grid grid-cols-1 sm:grid-cols-[25%_auto] sm:grid-rows-[auto_70%] gap-3 p-3 h-[100% overflow-auto]">
          <div className="bg-white shadow-lg row-span-2 p-1">
            <div className="border shadow-lg rounded-md flex justify-evenly py-4 hover:bg-blue-200 cursor-pointer">
              <AiFillHome className="mt-2 rounded=full" />
              <div className="w-[60%]">
                <h3 className="font-bold ">Import Parties</h3>
                <p className="text-xs">
                  Use contacts from your Phone or Gmail to create parties.
                </p>
              </div>
              <span className="self-center font-bold text-xl">{">"}</span>
            </div>
            <div className="flex justify-between my-5">
              <div className="rounded-full p-2 hover:bg-gray-300">
                <AiOutlineSearch size={25} />
              </div>
              <button className="flex justify-center items-center  overflow-hidden  text-white rounded-xl ">
                <div className="flex justify-center items-center bg-orange-400 hover:bg-orange-500 h-[100%] w-[100%] p-2">
                  <AiOutlinePlus size={16} className="mr-2" />
                  Add Party
                </div>
                <div className="h-full flex items-center justify-center px-2 bg-orange-400 hover:bg-orange-500">
                  <AiOutlineDown />
                </div>
              </button>
            </div>
            <table className="w-[100%]">
              <tr>
                <td className="w-[70%] p-2">
                  Party
                  <span>
                    <AiOutlineFilter
                      className="inline-block mx-[15%] text-red-700"
                      size={17}
                    />
                  </span>
                </td>
                <td className="p-2">Amount</td>
              </tr>
              <tr className="hover:bg-blue-200 cursor-pointer">
                <td className="p-2">KPS SANHAULA</td>
                <td className="p-2">2,360.00</td>
              </tr>
            </table>
          </div>
          <div className="bg-white shadow-lg p-2 ">
            <table className="w-[100%] h-[100%] text-sm">
              <tr>
                <td className="text-md font-bold">KPS SANHAULA</td>
                <td className="flex justify-end items-end text-green-500">
                  <AiOutlineWhatsApp size={25} />
                  <AiOutlineWhatsApp size={25} className="mx-2" />
                  <AiOutlineWhatsApp size={25} />
                </td>
              </tr>
              <tr>
                <td>Phone: 828282882</td>
                <td className="text-right"> Address: Sanhaula</td>
              </tr>
              <tr>
                <td>
                  Email:{" "}
                  <span className="text-blue-500 hover:bg-blue-200 py-1 px-2 rounded-md cursor-pointer whitespace-nowrap">
                    <AiOutlineMail className="inline-block mb-1 " /> Add Email
                    Id
                  </span>
                </td>
                <td className="text-end">
                  Gstin:{" "}
                  <span className="text-blue-500 hover:bg-blue-200 py-1 px-2 rounded-md cursor-pointer whitespace-nowrap">
                    <AiOutlineMail className="inline-block mb-1 " /> Add GSTIN
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  No Credit Limit Set:{" "}
                  <span className="text-blue-500 hover:bg-blue-200 py-1 px-2 rounded-md cursor-pointer whitespace-nowrap">
                    <BiRupee className="inline-block mb-1" /> Set Credit Limit
                  </span>
                </td>
              </tr>
            </table>
          </div>
          <div className="bg-white shadow-lg overflow-x-auto ">
            <div className="flex justify-between py-5 px-3">
              <h2 className="font-bold text-md">TRANSACTIONS</h2>
              <div className="w-[35%] relative flex items-center text-lg text-gray-500 focus-within:text-gray-900 ">
                <AiOutlineSearch className="absolute left-3  " />
                <input
                  type="search"
                  className="w-[100%] bg-transparent pl-9 py-1 pr-2 border"
                />
              </div>
            </div>
            <table className="w-[100%] border-collapse text-gray-600 text-sm overflow-y-auto">
              <tr>
                <td className="border-r p-3 border-gray-400"></td>
                <td className="border-r p-3 border-gray-400">Type</td>
                <td className="border-r p-3 border-gray-400">Number</td>
                <td className="border-r p-3 border-gray-400">Date</td>
                <td className="border-r p-3 border-gray-400">Total</td>
                <td className="border-r p-3 border-gray-400">Balance</td>
                <td className="p-3"></td>
              </tr>
              <tr className="hover:bg-blue-200 cursor-pointer">
                <td className="border-r p-3 border-gray-400 text-green-300 text-4xl">
                  •
                </td>
                <td className="border-r p-3 border-gray-400">Sale</td>
                <td className="border-r p-3 border-gray-400">1</td>
                <td className="border-r p-3 border-gray-400">30/06/2023</td>
                <td className="border-r p-3 border-gray-400">
                  <BiRupee className="inline-block" /> 2,360.00
                </td>
                <td className="border-r p-3 border-gray-400">
                  <BiRupee className="inline-block" /> 2,360.00
                </td>
                <td className="p-3">•</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Que3;
