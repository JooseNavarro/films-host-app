import {useEventEmitter} from "./core/hooks/useEventEmitter";
import {EventEmitter} from "./core/constants/event.constant";
import {useState} from "react";
import {LENGUAGE} from "./core/constants/language.constant";

export function useApp() {
  const [lenguage, setLenguage] = useState(LENGUAGE["en"]);
  const {emit} = useEventEmitter();

  const changeLenguage = (status: boolean) => {
    const currentLenguage = status ? LENGUAGE["en"] : LENGUAGE["es"];
    emit(EventEmitter.LENGUAGE, {data: currentLenguage});
    setLenguage(currentLenguage);
  };

  return {changeLenguage, lenguage};
}
