export default function login(){
    return (`<form action="/submit" method="post">
            <input type="text" name="name" placeholder="Enter your name">
            <input type="email" name="email" placeholder="Enter your email">
            <button>Submit</button>
        </form>
        <a href='/'>Go to Home Page</a>
        `)
}