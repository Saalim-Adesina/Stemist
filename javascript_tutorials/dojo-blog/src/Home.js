import BlogList from "./BlogList";
import { useState } from "react";


const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "My New website", body: 'Lorem ipsum lorem impsum', author: 'mario', id:1},
        {title: "My not so new website", body: 'Lorem ipsum lorem impsum', author: 'mario', id:2},
        {title: "My not not so new website", body: 'Lorem ipsum lorem impsum', author: 'saalim', id:3},
    ])

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <BlogList blogs={blogs} title="All Blogs"/>
            <BlogList blogs={blogs.filter(blog => blog.author === 'mario')} title ='Mario Blogs'></BlogList>
        </div>
    );
}
 
export default Home;