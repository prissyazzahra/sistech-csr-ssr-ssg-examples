
const ServerSide = ({ json }) => {
  return (
    <div style={{ border: 'white 1px solid', padding: '12px', marginTop: '8px' }}>
      <h4>Title</h4>
      <p>{json.title}</p>
      <h5>Body</h5>
      <p>{json.body}</p>
    </div>
  )
}

export default ServerSide