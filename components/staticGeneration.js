
const StaticGeneration = ({ post }) => {
  return (
    <div style={{ border: 'black 1px solid', padding: '12px', marginTop: '8px', borderRadius: '10px' }}>
      <h4>Title</h4>
      <p>{post.title}</p>
      <h5>Body</h5>
      <p>{post.body}</p>
    </div>
  )
}

export default StaticGeneration