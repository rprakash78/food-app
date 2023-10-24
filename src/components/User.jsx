// eslint-disable-next-line react/prop-types
const User = ({ name }) => {
    return (
        <div className="user-card">
            <h1>Name: {name}</h1>
            <h2>Location: Hosur</h2>
            <h3>Contact: r.prakash7898@gmail.com</h3>
        </div>
    )
}

export default User;