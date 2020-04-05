import IconButton from "@material-ui/core/IconButton";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import { useState } from "react";

const LikeButton = (props: { likes: number; onClick: () => void }) => {
    const [clicked, setClicked] = useState(false);
    const onClick = () => {
        setClicked(true);
        props.onClick();
    };
    return (
        <span
            style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
            }}
        >
            <IconButton onClick={onClick} disabled={clicked}>
                <ThumbUpAltOutlinedIcon />
            </IconButton>
            {props.likes}
        </span>
    );
};
export default LikeButton;
