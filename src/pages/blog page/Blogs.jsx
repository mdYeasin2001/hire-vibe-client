
const Blogs = () => {
    return (
        <div className="mx-auto container border h-screen my-8 p-8">
            <h1 className="text-3xl font-bold mb-8">Welcome to Our Blog</h1>

            <div className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Understanding Access Tokens and Refresh Tokens</h2>
                <p className="mb-4">In modern web development, security is paramount. Access tokens and refresh tokens play crucial roles in ensuring secure communication between clients and servers. But what are they exactly?</p>
                <p className="mb-4"><strong>Access Token:</strong> An access token is a credential used by a client to access protected resources on behalf of a user. It acts as a key, granting limited access to specific resources.</p>
                <p className="mb-4"><strong>Refresh Token:</strong> A refresh token is a special kind of token that can be used to obtain a new access token. It is typically longer-lived and allows the client to refresh the access token without requiring the user to reauthenticate.</p>
            </div>

            <div className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Introduction to Express.js</h2>
                <p className="mb-4">Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies the process of creating APIs and handling HTTP requests by providing a thin layer of fundamental web application features.</p>
            </div>

            <div className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Exploring Nest.js</h2>
                <p className="mb-4">Nest.js is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It is built with TypeScript and takes advantage of modern JavaScript features and design patterns.</p>
            </div>
        </div>
    );
};

export default Blogs;