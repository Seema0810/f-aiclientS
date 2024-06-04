import { atom } from "recoil";

export const catag = atom({
  key: "catag",
  default: {
    category: "",
    subcategory: "",
    companyName: "",
    country: "",
    city: "",
    location: "",
  },
});
