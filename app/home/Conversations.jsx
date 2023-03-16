'use client';

import { useState, useEffect, Fragment } from "react";
import {
    Card,
   // CardHeader,
    CardBody,
    IconButton,
} from "@material-tailwind/react";

import {
    ChatBubbleLeftRightIcon,
    UsersIcon
} from "@heroicons/react/24/solid";
import ConversationItem from "./Conversations.item";

function Conversations({conversations}) {
    const [openChat, setOpenChat] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenChat(false)
        );
    }, []);

    return (
        <Card>
            <CardBody className="p-0">
                <div className="flex flex-col divide-y">
                    {
                    conversations.map(conversation => 
                        <ConversationItem key={conversation.id} avatar={conversation.avatar} name={conversation.name} last={conversation.last}/>
                        )
                    }
                </div>
            </CardBody>
        </Card>
    );
}

export default Conversations