import List from "./List";
import {
    useContextProviderDispatch,
    useContextProviderSelector
} from "./ContextProvider";


function ListWidget(props) {
    const items = useContextProviderSelector((state) => {
        return state.list.items
    });

    return <List items={items}  />;
}

export default ListWidget;