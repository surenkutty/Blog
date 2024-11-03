
import axios from 'axios';
import Post from '../components/Post';
import { useEffect, useState } from 'react';



function PostLists() {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/posts');
            setPosts(response.data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);


    return (
        <div className="App">
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="#">My Blog</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Posts</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                <div className="container mt-4">
                    <div className="row">

                        <div className="col-lg-8">
                            <h1 className="mb-4">Latest Posts</h1>
                            {
                                posts.length>0?posts.map((post) => 
                                    <Post key={post._id} post={post} />
                                ):<h1>Post Are Not Available</h1>
                            }

                            

                            </div>

                        

                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">About Me</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>

                            <div className="card mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">Categories</h5>
                                    <ul className="list-group">
                                        <li className="list-group-item"><a href="#" className="text-black">Category 1</a></li>
                                        <li className="list-group-item"><a href="#" className="text-black">Category 2</a></li>
                                        <li className="list-group-item"><a href="#" className="text-black">Category 3</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </main>

            <footer className="bg-dark text-white text-center py-3 fixed-bottom">
                <div className="container">
                    <p>&copy; 2024 My Blog. All rights reserved.</p>
                </div>
            </footer>
        </div>

    )
}

export default PostLists