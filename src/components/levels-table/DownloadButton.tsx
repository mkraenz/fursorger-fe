import IconButton from "@material-ui/core/IconButton";
import GetAppIcon from "@material-ui/icons/GetApp";

const DownloadButton = (props: { downloads: number; onClick: () => void }) => (
    <span
        style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
        }}
    >
        <IconButton onClick={props.onClick}>
            <GetAppIcon />
        </IconButton>
        {props.downloads}
    </span>
);

export default DownloadButton;
