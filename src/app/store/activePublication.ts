import { Post } from "@lens-protocol/react-web";
import { create } from "zustand";

interface IActivePublication {
    activePublication: Post | undefined
    setActivePublication: (publication: Post) => void
}

const useActivePublicationStore = create<IActivePublication>((set) => ({
    activePublication: undefined,
    setActivePublication: activePublication => {
        set({
            activePublication: activePublication,
        });
    }
}));

export default useActivePublicationStore;