import { useState, ReactElement, FunctionComponent, useContext } from "react";
import { Grid, GridItem, VStack } from "@chakra-ui/react";

import { PostsContext } from "../../store/posts.context";
import { IPost } from "../../models/Post.model";
import { IUser } from "../../models/User.model";
import { IComment } from "../../models/Comment.model";

import {
  getAllComments,
  getPosts,
  getUsers,
} from "../../services/posts.service";
import useFetchData from "../../hooks/useFetchData";

import Post from "../../components/Post/Post";
import CustomInput from "../../components/Input/Input";
import loggerComponent from "../../hocs/loggerComponent";

const LoggedPost = loggerComponent(Post);

const Posts: FunctionComponent = (): ReactElement => {
  const postsContext = useContext(PostsContext);
  // custom hook which checks if data exists in the context
  // if not, fetches all data (callFn), returns the value, and sets it to context (for further use)
  // if there is, gets it from the context and returns the value
  const { posts } = useFetchData({
    item: "posts",
    contextItem: postsContext?.posts as IPost[],
    setContextItem: (val: any) => postsContext?.setPosts(val),
    callFn: () => getPosts(),
  });
  const { users } = useFetchData({
    item: "users",
    contextItem: postsContext?.users as IUser[],
    setContextItem: (val: any) => postsContext?.setUsers(val),
    callFn: () => getUsers(),
  });
  const { comments } = useFetchData({
    item: "comments",
    contextItem: postsContext?.comments as IComment[],
    setContextItem: (val: any) => postsContext?.setComments(val),
    callFn: () => getAllComments(),
  });

  const [filter, setFilter] = useState<{
    term: string;
    posts: IPost[];
  }>({
    term: "",
    posts: [],
  });

  const filterPosts = (e: any) => {
    let filteredPosts = posts.filter((post: IPost) => post.body.includes(e));

    setFilter({
      term: e,
      posts: filteredPosts,
    });
  };

  // to render posts list depending on passed array of all posts or filtered ones
  const renderPosts = (postsArr: IPost[]) => {
    return postsArr.map((post: IPost) => (
      <GridItem colSpan={1} key={post.id} w="full">
        <LoggedPost
          helloMsg="Hello from"
          componentName="Post"
          link={post.id}
          userData={users.find((user: IUser) => user.id === post.userId)!}
          postData={post}
          commentsData={comments}
        />
      </GridItem>
    ));
  };

  return (
    <VStack>
      <CustomInput
        type="text"
        changeFn={filterPosts}
        value={filter.term}
        placeholder="Filter posts"
      />
      <Grid w="full" templateColumns="repeat(3, 1fr)" gap={4}>
        {filter.term ? renderPosts(filter.posts) : renderPosts(posts)}
      </Grid>
    </VStack>
  );
};

export default Posts;
