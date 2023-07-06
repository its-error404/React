import React from 'react'
import styled from 'styled-components'
import BlogLogic from './BlogLogic'

const BlogList = () => {
  const Blogs = 
  [
    {
      "postID": 1,
      "title": "Welcome Post",
      "body": "From Prince Harry in Afghanistan to Tom Cruise ranting about Scientology and footage from the Burmese uprising, blogging has never been bigger. It can help elect presidents and take down attorneys general while simultaneously celebrating the minutiae of our everyday obsessions.",
      "author": "Vampy"
    },
    {
      "postID": 2,
      "title": "First Post",
      "body": "The article below said 'Psychodwarf' was Beppe Grillo's nickname for 'Mario Mastella, leader of the Popular-UDEUR centre-right party', but it's actually his nickname for Silvio Berlusconi. Mastella's first name is Clemente and Popular-UDEUR was part of Romano Prodi's centre-left coalition. And Peter Rojas, not Ryan Block, founded Engadget and co-founded Gizmodo. Apologies.",
      "author": "Tech Monkey"
    },
    {
      "postID": 3,
      "title": "Last Post",
      "body": "The history of political blogging might usefully be divided into the periods pre- and post-Huffington. Before the millionaire socialite Arianna Huffington decided to get in on the act, bloggers operated in a spirit of underdog solidarity. They hated the mainstream media - and the feeling was mutual.",
      "author": "Karthik"
    },
    {
      "postID": 4,
      "title": "Final Post",
      "body": "Bloggers saw themselves as gadflies, pricking the arrogance of established elites from their home computers, in their pyjamas, late into the night. So when, in 2005, Huffington decided to mobilise her fortune and media connections to create, from scratch, a flagship liberal blog she was roundly derided. Who, spluttered the original bloggerati, did she think she was?",
      "author": "Karthik"
    }
  ];

  const stitle = "Hello Posts";

  return (
    <div>

      <BlogLogic Blogs={Blogs} stitle={stitle} />

    </div>
  )
}

export default BlogList