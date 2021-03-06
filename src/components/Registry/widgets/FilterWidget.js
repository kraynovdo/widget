import Filter from "../controls/Filter";
import {
    useContextProviderDispatch,
    useContextProviderSelector
} from "../../../ContextProvider";

import { actions as filterActions } from "../stores/FilterSlice";

export default function WidgetFilter1(props) {
    const filter = useContextProviderSelector((state) => state.filter);
    const dispatch = useContextProviderDispatch();

    const onChangeFilterHandler = (value) => {
        dispatch(filterActions.changeFilter("done", value));
    };

    return <Filter value={filter.done} valueChanged={onChangeFilterHandler} />;
}
