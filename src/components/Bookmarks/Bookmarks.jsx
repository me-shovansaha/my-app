import React from 'react';
import Bokkmark from '../Bookmark/Bokkmark';

const Bookmarks = ({bookmarks,read}) => {
    return (
        <div className='md:w-1/3'>
            <div>
                <h3 className="text-4xl">Reading time : {read}</h3>
            </div>
            <h1>Bookmarks: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark,idx) => <Bokkmark
                key={idx} bookmark={bookmark}></Bokkmark>)
            }
        </div>
    );
};

export default Bookmarks;