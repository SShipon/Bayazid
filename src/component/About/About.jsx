

import Portfolio from "../../assets/Portfolio/bayazid.png";
import { HashLink } from "react-router-hash-link";
const About = () => {
    return (
        <div id='about' className="my-20">
              <h4 className="text-5xl font-semibold text-center py-20">ABOUT ME</h4>
             <div  className="flex lg:gap-60 flex-col lg:flex-row justify-center items-center">
                  <div className="w-2/2 lg:w-2/4">
                 
                    <p style={{fontFamily:'Poppins'}} className="text-sm lg:text-base font-normal text-justify"> 
                      I am Abdur Rahman , i am a Professional digital marketer with 2 year of experience in the marketplace i specialize in creating effective digital marketing strategies to help businesses grow online my expertise includes social media marketing SEO content marketing email marketing and PPcC advertising with a proven track record of success on Fiverr, I am dedicated to delivering results that drive engagement and conversions.
                    </p>
                   
                    <br />
                    <br />
                  
                   <HashLink to='/home#contact'> <button className="btn btn_hero"><i className="fa-solid fa-phone-volume"></i> Hire Me</button></HashLink>
       
                  </div>
                  <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
         <div className="w-48 h-48 lg:w-96 lg:h-96 rounded-full overflow-hidden">
          <img src={Portfolio} alt="Hero Image" className=" object-cover" />
        </div>
      </div>
             </div>
        </div>
    );
};

export default About;