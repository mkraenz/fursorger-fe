import IconButton from "@material-ui/core/IconButton";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";

const LikeButton = (props: { likes: number; onClick: () => void }) => (
    <span
        style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
        }}
    >
        <IconButton onClick={props.onClick}>
            <ThumbUpAltOutlinedIcon />
        </IconButton>
        {props.likes}
    </span>
);

export default LikeButton;
