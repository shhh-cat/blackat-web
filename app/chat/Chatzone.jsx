'use client';

import { useState, useEffect, Fragment } from "react";
import {
    Avatar,
    Card,
   // CardHeader,
    CardBody,
    CardHeader,
    IconButton,
    Input,
} from "@material-tailwind/react";

import {
    ChatBubbleLeftRightIcon,
    FaceSmileIcon,
    PaperAirplaneIcon,
    PhotoIcon,
    UsersIcon
} from "@heroicons/react/24/solid";
import ConversationItem from "./Conversations.item";
import ChatzoneHeader from "./Chatzone.header";
import ChatzoneItem from "./Chatzone.item";

function Chatzone({conversation}) {
    const [openChat, setOpenChat] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenChat(false)
        );
    }, []);

    return (
        <Card className="h-full ">
           
            <CardBody className="p-0 h-full">
                <div className="flex flex-col h-full max-h-full gap-3 bg-blue-gray-50">
                    <ChatzoneHeader className="bg-white" avatar={conversation.avatar} name={conversation.name} />
                    <div className="overflow-y-auto flex-auto min-h-0 rounded-xl flex flex-col justify-end p-3 gap-3">
                        {conversation.data.map(row => 
                            <ChatzoneItem self={row.id === null} avatar={conversation.users.find(u => u.id === row.id)?.avatar} data={row.data} dataType={row.dataType}/>
                            )}
                    </div>
                    <div className="p-3 bg-white flex gap-3">
                        <IconButton variant="text">
                            <FaceSmileIcon className="h-6 w-6"></FaceSmileIcon>
                        </IconButton>
                        <IconButton variant="text">
                            <PhotoIcon className="h-6 w-6"></PhotoIcon>
                        </IconButton>
                        <Input label="Nhập tin nhắn" size="lg"/>
                        <IconButton variant="text">
                            <PaperAirplaneIcon className="h-6 w-6"></PaperAirplaneIcon>
                        </IconButton>
                    </div>
                    
                </div>
            </CardBody>
        </Card>
    );
}

export default Chatzone