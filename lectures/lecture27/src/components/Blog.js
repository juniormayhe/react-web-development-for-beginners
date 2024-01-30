import { Link } from 'react-router-dom';

const Blog = () => {
    const posts = [
        { id: 1, title: 'Title 1' },
        { id: 2, title: 'Title 2' },
    ];

    return (
        <div>
            <h2>- My Blog</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blog;
