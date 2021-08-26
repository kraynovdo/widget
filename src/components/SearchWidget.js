import Search from "./Search";
import {
    useContextProviderDispatch,
    useContextProviderSelector
} from "./ContextProvider";

import { actions as searchActions } from "./SearchSlice";
import {actions as listActions} from "./ListSlice";

function SearchWidget(props) {
    const search = useContextProviderSelector((state) => state.search.value);
    const dispatch = useContextProviderDispatch();

    const onChangeSearchHandler = (value) => {
        dispatch(searchActions.changeSearch(value));
        dispatch(listActions.changeSearch(value));
    };

    return <Search value={search} valueChanged={onChangeSearchHandler} />;
}

export default SearchWidget;
