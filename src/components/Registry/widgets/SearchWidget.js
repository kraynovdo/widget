import Search from "../controls/Search";
import {
    useContextProviderDispatch,
    useContextProviderSelector
} from "../ContextProvider";

import { actions as searchActions } from "../stores/SearchSlice";


function SearchWidget(props) {
    const name = props.name;
    const search = useContextProviderSelector((state) => {
        return state.search.values[name];
    });


    const dispatch = useContextProviderDispatch();

    const onChangeSearchHandler = (value) => {
        dispatch(searchActions.changeSearch({value, name: props.name}));
    };

    return <Search value={search} valueChanged={onChangeSearchHandler} />;
}

export default SearchWidget;
