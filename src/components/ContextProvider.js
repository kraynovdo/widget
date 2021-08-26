import { createContext } from "react";
import {
    Provider,
    createStoreHook,
    createDispatchHook,
    createSelectorHook
} from "react-redux";

const MyContext = createContext(null);

// store, dispatch и selector берутся из контекста, т.е. можно функции переиспользовать в соседних деревьях
// https://github.com/reduxjs/react-redux/blob/master/src/hooks/useDispatch.ts
// https://github.com/reduxjs/react-redux/blob/master/src/hooks/useStore.ts
// https://github.com/reduxjs/react-redux/blob/master/src/hooks/useSelector.ts
export const useContextProviderStore = createStoreHook(MyContext);
export const useContextProviderDispatch = createDispatchHook(MyContext);
export const useContextProviderSelector = createSelectorHook(MyContext);

export function ContextProvider({ children, store }) {
    /*
    Каждый виджет создаёт свой стор перед маунтом, благодаря этому
    их состояние изолировано, несмотря на то, что они пользуются одним контекстом
    */

    return (
        <Provider context={MyContext} store={store}>
            {children}
        </Provider>
    );
}