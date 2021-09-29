import ViewMode from "../controls/ViewMode";
import {
    useContextProviderDispatch,
    useContextProviderSelector
} from "../../../ContextProvider";

import { actions as ViewActions } from "../stores/ViewSlice";

export default function ViewModeWidget(props) {
    const viewMode = useContextProviderSelector((state) => state.viewMode);
    const dispatch = useContextProviderDispatch();

    const onChangeViewMode = (value) => {
        dispatch(ViewActions.onChangeViewMode(valuedslf lf ));
    };

    return <ViewMode viewMode onChangeViewMode={onChangeViewMode} />;
}
