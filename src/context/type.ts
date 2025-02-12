export type ProviderType = {
  children: React.ReactNode;
};

export type AppContextType = {
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
  searchValue: string;
  handleSearchValue: (value: string) => void;
};
