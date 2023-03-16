'use client'

import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { Avatar, Button, Typography, Menu, MenuHandler, MenuList, MenuItem, IconButton } from "@material-tailwind/react"
import { Fragment } from "react"

function ConversationItem({ id, avatar, name, last }) {
    return (
        <a href="#" className="group relative flex gap-3 items-center py-3 px-5 hover:bg-blue-50">
            <Avatar src={avatar} alt="avatar" className="flex-none" variant="circular"/>

            <div className="grow flex flex-col">
                <span>
                    {name}
                </span>
                <span className="text-sm">
                    {last}
                </span>
            </div>

            <Menu>
                <MenuHandler>
                    <IconButton className="invisible group-hover:visible cursor-pointer" onFocus={() => {

                    }} variant="text">
                        <EllipsisHorizontalIcon className="h-6 w-6"/>
                    </IconButton>
                </MenuHandler>
                <MenuList>
                    <MenuItem>Ẩn cuộc trò chuyện</MenuItem>
                    <MenuItem>Xóa cuộc trò chuyện</MenuItem>
                    <MenuItem className="hover:bg-red-400 hover:text-white text-red-400">Rời cuộc trò chuyện</MenuItem>
                </MenuList>
            </Menu>
        </a>
    );
}

export default ConversationItem