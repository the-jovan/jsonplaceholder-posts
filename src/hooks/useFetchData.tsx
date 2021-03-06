import { useEffect, useState } from "react";
import { errorNotification } from "../services/posts.service";

import { IPost } from "../models/Post.model";
import { IComment } from "../models/Comment.model";
import { IUser } from "../models/User.model";
import { useLocation } from "react-router-dom";

type PossibleData = IPost[] | IComment[] | IUser[];

const useFetchData = (props: {
  item: string;
  contextItem: PossibleData;
  setContextItem: (val: PossibleData) => void;
  callFn: () => Promise<PossibleData>;
}) => {
  const { item, contextItem, setContextItem, callFn } = props;
  // :|
  const [data, setData] = useState<any>([]);

  const location = useLocation();

  // on location change (going from all posts to single and vice-versa)
  // fetch all data or get data from context if it has been fetched before
  useEffect(() => {
    if (!contextItem.length) {
      callFn()
        .then((resp: any) => {
          setData(resp);
          setContextItem(resp);
        })
        .catch((err: any) => {
          console.error(err);
          errorNotification(`Something went wrong while getting ${item}`);
          setData([]);
        });
    } else {
      setData(contextItem);
    }
  }, [location]);

  return { [`${item}`]: data };
};

export default useFetchData;
