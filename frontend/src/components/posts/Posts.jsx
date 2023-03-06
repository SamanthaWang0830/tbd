import React,{useContext}  from 'react'
import './Posts.scss'
import Post from '../Post/Post'
import { SearchContext } from '../../context/searchContext';
import {useQuery} from '@tanstack/react-query'
import {makeRequest} from '../../axios'

const Posts = () => {
  
  const { isLoading, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      makeRequest.get('/posts').then(res=>{
        return res.data
      })
  })
  
  const {query}= useContext(SearchContext)
    const posts = [
        {
          id: 1,
          name: "John Doe",
          userId: 1,
          profilePic:
            "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          id: 2,
          name: "Jane Doe",
          userId: 2,
          profilePic:
            "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
          desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
        },
        {
          id: 3,
          name: "Jane Doe",
          userId: 2,
          profilePic:
            "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
          desc: "aaaaaaaaaaaaa",
        },
      ];
      
    return <div className="posts">
      {error? 'Something went wrong' : 
        (isLoading? 'Loading' : 
          data.filter((post)=>post.desc.toLowerCase().includes(query)).map(post=>(<Post post={post} key={post.id}/>))
        )
      }
    </div>;
}

export default Posts