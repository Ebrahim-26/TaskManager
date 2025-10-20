import { darkTheme, lightTheme } from "./colorSheet";
import { useGlobalContext } from "@/context/GlobalContext";
export function useTheme() {
    const { darkMode } = useGlobalContext()

    return {
        colors: darkMode ? darkTheme : lightTheme,
        darkMode,
    };
}
