import { create} from "zustand"

export const useMatchInfo = create ((set) =>({
    matchInfo:{},
    addmatchInfo: (newRequest) => {
        set((state) => {
            return {matchInfo:state, newRequest}
        })
    }
}))