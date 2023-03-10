import "react-i18next";
// import all namespaces (for the default language, only)
import common from "./public/locales/en/common.json";
import common from "./public/locales/fr/common.json";

interface Resources {
  common: typeof common;
}
declare module "react-i18next" {
  // and extend them!
  interface Resources extends MyResources {}
}
