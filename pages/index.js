import { getSortedPostsData } from "../lib/posts";

export default async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}
