import { Accents } from "@/unistyles";
import { createStore } from "stan-js";
import { storage } from "stan-js/storage";

export const { useStore } = createStore({
  preferredAccent: storage<Accents>("banana"),
});
