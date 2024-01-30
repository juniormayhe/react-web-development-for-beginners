import { Link, useMatch, useParams } from 'react-router-dom';

function Post() {

  const match = useMatch('/posts/:postId');
  const { postId } = match.params;

  // comment the useMatch block above 
  // and uncomment this to get the postId with useParams
  //const { postId } = useParams();
  
  // For demonstration purposes, this posts array simulate a database
  const posts = [
    { id: 1, title: 'Title 1' },
    { id: 2, title: 'Title 2' },
  ];

  // Find the post with the matching ID
  const post = posts.find(post => post.id === parseInt(postId));

  return (
    <>
      <h2>- My Blog &gt; Post {post.id}</h2>
      <p>{post.title}</p>
      <Link to="/">back to Blog</Link>
    </>);
}

export default Post;
