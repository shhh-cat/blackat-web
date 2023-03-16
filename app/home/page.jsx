import Chatzone from "./Chatzone";
import Conversations from "./Conversations";

const conversations = [
    { id: 1, name: "Thiên Nguyễn", avatar: "https://i.pravatar.cc/300?img=1", last: "Bạn: OK ngày mai nhé"},
    { id: 2, name: "Tây Thi", avatar: "https://i.pravatar.cc/300?img=2", last: "Thi: Bye"},
    { id: 3, name: "Trường Ân", avatar: "https://i.pravatar.cc/300?img=3", last: "Ân: Sao cũng được"},
    { id: 4, name: "Bắp", avatar: "https://i.pravatar.cc/300?img=4", last: "Bạn: Hello"},
    { id: 5, name: "Lộc Trần", avatar: "https://i.pravatar.cc/300?img=5", last: "Lộc: Ai vậy"},
    { id: 6, name: "Minh Thông", avatar: "https://i.pravatar.cc/300?img=6", last: "Thông: Mệt quá"},
];

const user = {
    id: 7,
    name: "Yuntian",
    avatar: "https://i.pravatar.cc/300?img=6"
}

const conversation = {
    name: "Thiên Nguyễn", 
    avatar: "https://i.pravatar.cc/300?img=1",
    users: [
        {
            id: 1,
            name: "Thiên Nguyễn",
            avatar: "https://i.pravatar.cc/300?img=1"
        }
    ],
    data: [
        {
            id: 1,
            data: "ok",
            dataType: "message",
        },
        {
            id: null,
            data: "OK ngày mai nhé",
            dataType: "message",
        },
        {
            id: null,
            data: "https://images.pexels.com/photos/10768835/pexels-photo-10768835.jpeg",
            dataType: "image",
        },
        {
            id: 1,
            data: "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            dataType: "image",
        },
    ]
}

export default function Home() {

    conversation.seft = user;

    return (
        <div className="mx-auto max-w-screen-xl py-1 lg:py-2 h-full">
            <div className="flex h-full lg:gap-3">
                <div className="flex-none w-80">
                    <Conversations conversations={conversations}/>
                </div>
                <div className="flex-1">
                    <div className=" h-full">
                        <Chatzone conversation={conversation}/>
                    </div>
                </div>
            </div>
        </div>
    );
}