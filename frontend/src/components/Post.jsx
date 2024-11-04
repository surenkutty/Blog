import PostLists from "../pages/PostLists"

function Post({post}) {
    return (
    
    <div className="card mb-4">
            <div className="row">
                <div className="col-sm-12 col-md-3">
                    <img className="img-fluid h-100 card-img-top" src={post.image}
                        alt="..." />
                </div>
                <div className="card-body col-md-8">
                    <h5 className="card-title">{post.title}
                    </h5>
                    <p className="card-text">{post.content.substr(0,50)}...</p>
                    <a href="#" className="btn btn-primary">Read More</a>
                </div>
            </div>

        </div>

    
        

    )
}

export default Post