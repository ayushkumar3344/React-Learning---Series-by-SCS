import { CiBookmark } from "react-icons/ci";
import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZfGyEcEdPfzca-b4iATLHuHIk80_yYMtRWw&s",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full-Time",
      tag2: "Junior Level",
      pay: "$42/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "React Developer",
      tag1: "Full-Time",
      tag2: "Mid Level",
      pay: "$48/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQZwfIF1UdjlMBtjg4fmlfdGU0suXMgG5qA&s",
      companyName: "Amazon",
      datePosted: "1 week ago",
      post: "MERN Stack Developer",
      tag1: "Full-Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5rIxFRNX2QZlnQidGjE75yAg9jR4Jhy3Jgw&s",
      companyName: "Apple",
      datePosted: "10 days ago",
      post: "Software Engineer",
      tag1: "Full-Time",
      tag2: "Senior Level",
      pay: "$65/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSizQq7KJ5NDbGjh-4wklylfJ9hAaOJ5vBtJA&s",
      companyName: "Netflix",
      datePosted: "3 weeks ago",
      post: "Full Stack Engineer",
      tag1: "Full-Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Backend Developer",
      tag1: "Part-Time",
      tag2: "Junior Level",
      pay: "$38/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEHobuXznbjHe9-Ku3naDs9jZ8VuU9cD3CtQ&s",
      companyName: "NVIDIA",
      datePosted: "8 days ago",
      post: "Software Development Engineer",
      tag1: "Full-Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZibFDuN2C-ZZzvepYS-JIQUcOLqkQufY_mQ&s",
      companyName: "Adobe",
      datePosted: "6 weeks ago",
      post: "Frontend Engineer",
      tag1: "Part-Time",
      tag2: "Junior Level",
      pay: "$35/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://cdn.prod.website-files.com/6482fc3c808f4e9db58cda1d/67ab856939b97ae7975c1a79_salesforce-logo.webp",
      companyName: "Salesforce",
      datePosted: "10 weeks ago",
      post: "JavaScript Developer",
      tag1: "Full-Time",
      tag2: "Mid Level",
      pay: "$50/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJIOGtHi6yLhWs9gI0Bz1T83KoUzuqCQ7IQ&s",
      companyName: "Uber",
      datePosted: "12 days ago",
      post: "Web Developer",
      tag1: "Full-Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Mumbai, India",
    },
  ];



  return ( 
    <div className="parent">
      {jobOpenings.map((elem) => {
        return (
        <div>
          <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} brand={elem.brandLogo} />
        </div>  
        )
        
      })}
    </div>
  )
};

export default App;
