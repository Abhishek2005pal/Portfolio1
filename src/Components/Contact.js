// Contact.js
import { BiLogoGmail } from "react-icons/bi";
import { FaGithubSquare, FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";
export default function Contact() {
	return (
		<section  style={{backgroundColor: "honeydew"}} id="contact"
				className="my-40 align-center max-w-5xl mx-auto p-3">
			<h2 className="text-5xl font-bold text-emerald-500 text-center">
				Contact
			</h2>
			<div className="flex gap-5 justify-center 
						my-10">
						
				
				<a rel="noreferrer"
				target="_blank"
				className="text-center hover:underline"
				href=
"https://www.linkedin.com/in/abhishek-pal-79215b266/">
<FaLinkedin />
					<span className="font-bold">
						Linkdin
					</span>
				</a>
				<a rel="noreferrer"
				target="_blank"
				className="text-center hover:underline"
				href=
"https://github.com/Abhishek2005pal">
<FaGithubSquare />
					<span className="font-bold">
						Github
					</span>
				</a>
				<a rel="noreferrer"
				target="_blank"
				className="text-center hover:underline"
				href=
"./ap3015843@gamil.com">
                  <BiLogoGmail />
					<span className="font-bold">
						ap3015843@gmail.com
					</span>
				</a>
				<a rel="noreferrer"
				target="_blank"
				className="text-center "
				href=
"">
<FaPhoneSquareAlt  className="font-center "/>
					<span className="font-bold">
						9336789252
					</span>
				</a>
				
		
			</div>
		</section>
	);
}
