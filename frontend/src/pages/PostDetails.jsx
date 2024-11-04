import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function PostDetail() {
    const [post, setPost] = useState(null);
    const [categories, setCategories] = useState([]);
    const { id } = useParams();

    const fetchPost = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/posts/${id}`)
            setPost(response.data);
        } catch (error) {
            console.error('Error fetching post:', error)
        }
    }
    useEffect(() => {
        fetchPost();
    }, [])

    if (!post) {
        return <p>Loading...</p>
    }

    const formattedDate = Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: "numeric",
        year: "numeric"
    }).format(new Date(post.createdAt))

    return(
        


         <main className="container my-4">
        <div className="row">
            <article className="col-lg-8">
                <h2 className="blog-post-title">{post.title}</h2>
                <p className="blog-post-meta">{formattedDate} by <a href="#">{post.author}</a></p>
                <img className="mb-3 img-fluid" src={post.image} alt="" />

                <div className="blog-post-content">
                    <p>{post.content}</p>
                </div>
            </article>
            
        </div>
        
    </main>
    )
}