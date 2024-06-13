import BlogContainer from '@/components/BlogPage/BlogContainer'
import blogs from "../../../utils/blogs.json";

function findBlogByTitle(title) {
    return blogs.find(blog => blog.title === title);
}

function Blog({ params }) {

    const blog = decodeURIComponent(params.slug) ? findBlogByTitle(decodeURIComponent(params.slug)) : null;
    console.log(blog)
    return (
        <div>
            <BlogContainer {...blog} />
        </div>
    )
}

export default Blog