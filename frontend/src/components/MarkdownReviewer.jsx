import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'

const MarkdownReviewer = () => {
    const [markdownData, setMarkdownData] = useState([]);
    useEffect(() => {
        //fetch接口
        setMarkdownData(["<p>我今天很开心</p>"])
    }, []);

    return (
        <div>
            {markdownData.map((item, index) => (
                <ReactMarkdown key={index} rehypePlugins={[rehypeRaw]} children={item} />
            ))}
        </div>
    )
}

export default MarkdownReviewer