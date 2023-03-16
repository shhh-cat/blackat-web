import { Avatar } from "@material-tailwind/react";

function ChatzoneItem({ name, data, dataType, avatar, time, self }) {


    let box;
    switch (dataType) {
        case "message":
            box = 
                <div className="p-3 bg-white rounded-md">
                    {data}
                </div>;
            break;
        case "image":
            box = 
            <div className="rounded-md">
                 <img src={data} className="rounded-md max-w-md"/>
            </div>;
           
        break;
    
        default:
            break;
    } 

    return (
        <div className={'flex items-start gap-2 ' + (self ? 'justify-end' : 'justify-start')}>
            {
                !self && <Avatar size="sm" src={avatar} />
            }
            
            {box}

        </div>
    );
}

export default ChatzoneItem