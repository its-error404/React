import BlogLogic from './BlogLogic';
import useFetch from './useFetch';
import LoaderContainer from './Reusable/LoaderContainer';
import ErrorMessage from './Reusable/ErrorMessage';

const BlogList = () => 

{

    const {Data:Blogs,Loading,error,setData} = useFetch('http://localhost:8000/blogs')

  
    const HideBlog = (id) => 
    {
        const newBlogs = Blogs.filter((blog) => blog.postID !== id);
        setData(newBlogs);
    };

    const AllAuthors = Array.from(new Set(Blogs.map((blog)=>blog.author)))

    return (
      <div className='flex flex-col items-center'>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {Loading && (<LoaderContainer LoadingText={"Loading all the blogs, hold on..."}/>)}
        
        {Blogs && 
        (
          <>
            <BlogLogic 

              Blogs={Blogs} 
              stitle="Thank you for Visiting the Page. Below, you can find all the Blogs" 
              HideBlog={HideBlog} 
              
            />
            
            {AllAuthors.map(author => 
            
            (
              <BlogLogic
              
                key={author}
                Blogs={Blogs.filter((blog) => blog.author === author)}
                authortitle={"Here are the individual blogs displayed"}
                stitle={`${author}'s Blogs are Displayed Below`}
                HideBlog={HideBlog}
                
              />
            ))}
            
          </>
        )}
        
      </div>
      
    );
    
  };



export default BlogList;

