
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handleBookmark,handleRead}) => {
    // console.log(blog);
    const {title,cover,reading_time,author,author_img,posted_date,hashtags} = blog;
    return (
        <div>
            <img className="w-full" src={cover} alt="" />
            <div className="flex justify-between items-center"> 
                <div>
                  <div className="flex">
                  <img className="w-14" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <span>{reading_time} min read</span>
                  <button onClick={() =>handleBookmark(blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash,inx) => <span key={inx}><a href="">#{hash}</a></span>)
                }
            </p>

            <button onClick={() => handleRead(reading_time)}>make as read</button>



        </div>
    );
};

export default Blog;