import * as Localization from "expo-localization"
import i18n from "i18n-js"

// Define your supported languages here
i18n.translations = {
  en: { greeting: "Hello" },
  de: { greeting: "Hallo" },
}

// Set the default language
i18n.locale = Localization.locale

export default i18n
