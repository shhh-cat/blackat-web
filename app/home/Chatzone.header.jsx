import { Avatar, Typography } from "@material-tailwind/react";

function ChatzoneHeader({avatar, name}) {
    return (
        <div className="flex bg-white items-center gap-3 p-3">
            <Avatar src={avatar} alt="avatar" size="sm" className="flex-none" variant="circular"/>
            <Typography className="grow">
                {name}
            </Typography>
        </div>
    );
}

export default ChatzoneHeader