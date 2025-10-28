import React, {useContext} from 'react';
import Button from "../../../shared/ui/Button/Button";
import {useTheme} from "../../../shared/lib/theme/ThemeContext.tsx";

const ThemeSwitcher = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <Button onClick={toggleTheme}>
            {theme === "light" ? "☀" : "☼"}
        </Button>
    );
};

export default ThemeSwitcher;