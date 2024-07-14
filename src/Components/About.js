// About.js
import Abhishek from "./Indiagate.jpg";
export default function About() {
	return (
		<section  style={{backgroundColor: "honeydew"}}
			id="about"
			className="px-10 w-full flex flex-col lg:flex-row py-20 
					align-center bg-emerald-200 max-w-5xl mx-auto">
			<div className="flex-1">
				
					<img  style={{height: "550px" , borderRadius: "20%"} }
					src={Abhishek}
					alt="About"
					className="w-full h-full bg-cover"
				  />
			</div>
			<div className="flex-1 flex flex-col justify-center
							items-center gap-5 px-6">
				<div>
					<h2 className="text-center text-emerald-500 
								text-5xl font-bold">
						About Me :
					</h2>
				</div>
				<p>
					As I said, I am your friendly
					 osm developer...
				</p>
				<p>
               
I am a dedicated Computer Science student at the Indian Institute of Information Technology Kalyani, West Bengal, with a keen interest in web development. My expertise spans HTML, CSS, JavaScript, React, Node.js, and Data Structures and Algorithms (DSA). Passionate about software development, I am committed to continuous learning and skill enhancement. My ultimate goal is to excel as a software developer, leveraging my technical knowledge and problem-solving abilities to contribute effectively to the tech industry. Enthusiastic and driven, I strive to stay updated with the latest technologies and best practices in software development.

				</p>
			</div>
		</section>
	);
}
