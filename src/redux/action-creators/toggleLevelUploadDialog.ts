import { ActionType } from "../actions/ActionType";
import { IToggleLevelUploadDialog } from "../actions/IToggleLevelUploadDialog";

export const toggleLevelUploadDialog = (): IToggleLevelUploadDialog => ({
    type: ActionType.ToggleLevelUploadDialog,
});
