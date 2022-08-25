import asideContent from "./utils/firstRowNavAsideContents";

export const initialState = {
    navAsideContents: Array(14).fill(undefined),
    currentAsideContent: -1,
    usedCurrency: "PLN"
};

function reducer(state, action) {

    switch(action.type) {
        case "CHANGE_DEPARTMENTS_ASIDE":
        {
            let oldContents = state.navAsideContents;
            const index = action.args[0];

            if(oldContents[index] === undefined){
                const newContent = asideContent(index);
                oldContents[index] = newContent;
            }

            return {
                ...state,
                navAsideContents: oldContents,
                currentAsideContent: oldContents[index]
            };
        }

        default:
            return state;
    }

}

export default reducer;