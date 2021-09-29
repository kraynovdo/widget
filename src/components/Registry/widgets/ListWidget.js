import List from "../controls/List";
import {
    useContextProviderSelector
} from "../../../ContextProvider";
import ViewController from "../controllers/ViewController";


function ListWidget(props) {
    const name = props.name;

    const items = useContextProviderSelector((state) => {
        return state[name].items;
    });

    const viewMode = useContextProviderSelector((state) => {
        return state.viewMode;
    });

    return <List items={items} viewMode />;
}

export default ListWidget;