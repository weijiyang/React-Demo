import { useState, useEffect } from "react";
import { NOTELIST_ITEM, NOTELIST_PROPS } from "../../components/list";
import { getNotesListCgi } from "../https/list";
export const useNoteLists = (): NOTELIST_ITEM[] => {
  const [lists, setLists] = useState<NOTELIST_ITEM[]>(
    [] as unknown as NOTELIST_ITEM[]
  );

  useEffect(() => {
    try {
      const result = getNotesListCgi() as NOTELIST_ITEM[];
      setLists(result);
    } catch (err) {
      console.error("getNotesListCgi error: ", err);
    }
  }, []);

  return lists;
};
