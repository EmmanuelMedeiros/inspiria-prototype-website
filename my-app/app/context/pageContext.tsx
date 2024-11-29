import { createContext, Dispatch, SetStateAction, useState } from "react";
import PageSection from "../enum/PageSection";

interface PageContextInterface {
    windowWidth: number|undefined,
    setWindowWidth: Dispatch<SetStateAction<number | undefined>>
    openedMenu: boolean,
    setOpenedMenu: Dispatch<SetStateAction<boolean>>,
    scrollY: number | undefined,
    setScrollY: Dispatch<SetStateAction<number | undefined>>,
    currentSection: PageSection | undefined,
    setCurrentSection: Dispatch<SetStateAction<PageSection>>
}

const defaultPageContext: PageContextInterface = {
    windowWidth: undefined,
    setWindowWidth: () => {},
    openedMenu: false,
    setOpenedMenu: () => {},
    scrollY: undefined,
    setScrollY: () => {},
    currentSection: PageSection.Home,
    setCurrentSection: () => {}
}

const PageContext = createContext<PageContextInterface>(defaultPageContext)

export function PageContextProvider({children}: Readonly<{children: React.ReactNode;}>) {

    const [ windowWidth, setWindowWidth ] = useState<number>()
    const [ openedMenu, setOpenedMenu ] = useState<boolean>(false)
    const [ scrollY, setScrollY ] = useState<number>()
    const [ currentSection, setCurrentSection ] = useState<PageSection>(PageSection.Home)

    const context = {
        windowWidth,
        setWindowWidth,
        openedMenu,
        setOpenedMenu,
        scrollY,
        setScrollY,
        currentSection,
        setCurrentSection
    }

    return(
        <PageContext.Provider value={context}>
            {children}
        </PageContext.Provider>
    )

}

export default PageContext