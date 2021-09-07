import List from "../controls/List";
import {
    useContextProviderDispatch,
    useContextProviderSelector
} from "../../../ContextProvider";


function ListWidget(props) {
    const name = props.name;

    const items = useContextProviderSelector((state) => {
        return state[name].items;
    });

    return <List items={items}  />;
}

export default ListWidget;