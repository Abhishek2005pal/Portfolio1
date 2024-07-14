
import MyPDF from './Abhishek_Resume.pdf';
import Abhishek from "./Office.jpg";
 function Hero() {
	return (
	  <section 
		id="hero"
		className="px-10 w-full flex gap-12 flex-col lg:flex-row 
				  justify-center items-center align-center mt-40 
				  mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]"
	  >
		<div className="flex-1 flex flex-col justify-center items-center gap-5">
		  <div>
			<h4 style={{color: "white"}} className="text-center text-xl font-bold">Hi, and Welcome To</h4>
			<h2 className="text-center text-emerald-500 text-5xl font-bold">
			  My Portfolio Website
			</h2>
		  </div>
		  <p  style={{color: "white"}} className="text-center">I Am Abhishek Pal.
		  <br/>
		  <p>Student of IIIT Kalyani.</p>
		  </p>
<a style={{  width:"145px",backgroundColor: "darkgrey", border: "5px solid darkgrey", borderRadius:"12px", color: "black"}}  href={MyPDF} download="Abhishek_Resume.pdf"> Download Resume </a> 
		</div>
		<div className="flex-1">
		  <img style={{borderRadius: "20%",border: "none", height: "510px", width:"450px", marginTop: "70px",marginLeft: "60px"}}
			src={Abhishek}
			alt="./Abhishek.jpg"
			className="w-full h-full bg-cover"
		  />
		</div>
	  </section>
	);
  }
  
  export default Hero;