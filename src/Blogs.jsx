

const Blogs = () => {
  // Sample blog data
  const blogPosts = [
    { id: 1, title: "Blog Post 1", content: "This is the content for blog 1" },
    { id: 2, title: "Blog Post 2", content: "This is the content for blog 2" },
    { id: 3, title: "Blog Post 3", content: "This is the content for blog 3" },
    { id: 4, title: "Blog Post 4", content: "This is the content for blog 4" },
    { id: 5, title: "Blog Post 5", content: "This is the content for blog 5" },
    // Add more blog posts as needed
  ];

  return (
    <div className="blogscontent">
      {blogPosts.map((post, index) => (
        <div
          key={post.id}
          className="blog-item"
          style={{ animationDelay: `${index * 0.5}s` }} // Stagger animation by 0.5s
        >
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
