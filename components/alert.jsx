const { Alert } = require("@material-tailwind/react");

function MyAlert ({color, content}) {

    return (
        <Alert color={color}>{content}</Alert>
    )
}