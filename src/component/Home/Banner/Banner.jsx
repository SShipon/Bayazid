
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import resume from "../../../assets/Bayazid.pdf";
import Icons from '../../../shared/Icons/Icons';
import logo from '../../../assets/Portfolio/bayazid.png'
const Banner = () => {
    const [text] = useTypewriter({
      words: ['I am Abdur Rahman', 'I am Professional', 'Digital Marketer', 'I am SEO Expert', 'I am Wordpress Developer', 'I am Facebook Marketer'],
        loop: 0
      })
    
    return (
        <div id='home' className='flex flex-col lg:flex-row items-center justify-center min-h-screen '>
           <div className='flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2  lg:mb-0'>
           <h1 className='text-xl lg:text-3xl font-extrabold  lg:mt-8 ' >Hey There  { ''}
            <span className='text-gradient text-xl lg:text-3xl font-extrabold' style={{fontWeight:'bold',}}>{text}</span>
           <span className='text-3xl text-sky-600'>
           <Cursor cursorStyle='//' />
           </span>
           </h1>
         
           <br />
           <p className=' lg:w-2/3 text-lg  lg:text-xl'>I am Professional <span className=' text-cyan-400'>SEO Developer</span> With <span className=' text-cyan-500'>With wordpress Developer </span>& facebook Marketer Skills Based on Client Desire.</p>
           <br />
             <div>
            <a href={resume} download>
              <button className="about__hero__btn about__hero__btn:hover gradient-border  font-bold">
                <i className="fa-solid fa-download"></i> Resume
              </button>
            </a>
          </div>
            <div>
              <Icons></Icons>
            </div>
           </div>

           <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
           <div className="w-48 h-48 lg:w-96 lg:h-96 rounded-full overflow-hidden">
          <img src={logo} alt="Hero Image" className=" object-cover" />
        </div>
           </div>
        </div>
    );
};

export default Banner;