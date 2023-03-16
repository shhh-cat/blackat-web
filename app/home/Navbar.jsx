'use client';

import { useState, useEffect } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Navbar,
  MobileNav,
  Button,
  IconButton,
  Avatar
} from "@material-tailwind/react";

import {
  ChatBubbleLeftRightIcon,
  UsersIcon
} from "@heroicons/react/24/solid";

function Nav() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <div className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-3">
      <IconButton ripple={false} variant="text">
        <ChatBubbleLeftRightIcon className="h-6 w-6" />
      </IconButton>
      <IconButton ripple={false} variant="text">
        <UsersIcon className="h-6 w-6" />
      </IconButton>
    </div>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl py-1 px-4 lg:px-8 lg:py-2" shadow={true}>
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">


        {/* <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-bold text-lg"
        >
          <span>Blackat</span>
        </Typography> */}
        <div className="hidden lg:block">{navList}</div>
        <Menu>
          <MenuHandler>
            <Avatar src={"https://i.pravatar.cc/300"} alt="avatar" className="hidden lg:inline-block cursor-pointer" variant="circular" />
          </MenuHandler>
          <MenuList>
            <MenuItem>Tài khoản</MenuItem>
            <MenuItem>Cài đặt</MenuItem>
            <MenuItem>Đăng xuất</MenuItem>
          </MenuList>
        </Menu>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}

export default Nav