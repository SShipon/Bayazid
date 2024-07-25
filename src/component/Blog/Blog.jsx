/* eslint-disable react/prop-types */



const Blog = ({ professional }) => {

  const { name, description, icon, bgClass } = professional;
  
  return (
    <div className={`card  shadow-2xl  text-white lg:p-2 py-[40px]  shadow-3xl ${bgClass}`}>
      <div className="card-body">
        <h3 className="text-6xl"> {icon}</h3>
        <h1 className="text-1xl  font-bold">{name}</h1>
        <p className=""> <br/>{description}</p> 
      </div>
        <button className="about__hero__btn about__hero__btn:hover font-bold">Learn More <i className="fa-solid fa-angles-right"></i></button>
        <br />
    </div>
  );
};

export default Blog;