import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import useTheme, { ThemeProvider } from "./context/Theme";
import { useEffect, useState } from "react";

function App() {
  // const {themeMode} = useTheme()

  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    const html = document.querySelector("html").classList
    html.remove("dark", "light")
    html.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider
      value={{
        themeMode,
        lightTheme,
        darkTheme,
      }}
    >
      <div className="flex flex-wrap min-h-screen items-center dark:bg-black dark:text-white ">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
