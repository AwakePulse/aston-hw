export interface ThemeContextTypes {
    theme: Theme;
    toggleTheme: () => void;
}

export type Theme = "light" | "dark";