import { MdRocketLaunch } from "react-icons/md";

function Team() {
    return ( 
        <div className="flex overflow-y-auto h-screen mb-14" >
            <div className="flex flex-col lg:mx-32 md:mx-10 sm:mx-8 mx-7">
            <div className="flex flex-col">
                <div className="flex sm:mt-24 mt-16 items-center">
                    <h1 className=" text-[2.5rem] font-semibold text-gray-800">Meet Our Team</h1>
                    <MdRocketLaunch  className="h-12 w-12 ml-4 text-red-500"/>
                </div>
                <div className="mt-4 text-gray-700">
                    <p>At our crew, we&apos;re team with different skills. One of us is great at making websites look awesome (that&apos;s the UI/UX person),
                    while another is a pro at making sure everything looks beautiful and works smoothly behind the scenes (that&apos;s the frontend/backend person).
                    Then we&apos;ve got someone who&apos;s all about hardware and making things connect to the internet (IoT stuff), and lastly, there&apos;s the presentation whiz
                    who makes our ideas shine. But here&apos;s the cool part: even though we have our specialties, we all jump in to help each other out.
                    It&apos;s like a big group hug of teamwork and success!</p>
                </div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-normal">
                <div className="flex flex-col items-center h-[7.5rem] w-[7.5rem] mt-10 sm:mt-20 mx-4 sm:mx-4 md:mx-10 ">
                    <img src="/assets/avinash.jpg" className="rounded-lg "></img>
                    <p className="font-semibold text-lg text-gray-800">Avinash</p>
                    <p className="text-sm text-gray-700">ECE(IoT) Expert</p>
                    <p className="text-sm text-gray-700">Model Design</p>
                </div>
                <div className="flex flex-col items-center h-[7.5rem] w-[7.5rem] mt-10 sm:mt-20 mx-4 sm:mx-4 md:mx-10  ">
                    <img src="/assets/aditya.jpg" className="rounded-lg "></img>
                    <p className="font-semibold text-lg text-gray-800">Aditya Singh</p>
                    <p className="text-sm text-gray-700">Frontend/Backend</p>
                    <p className="text-sm text-gray-700">Developer</p>
                </div>
                <div className="flex flex-col items-center h-[7.5rem] w-[7.5rem] mt-20 mx-4 sm:mx-4 md:mx-10  ">
                    <img src="/assets/ashwin.jpg" className="rounded-lg"></img>
                    <p className="font-semibold text-lg text-gray-800">Ashwin Soni</p>
                    <p className="text-sm text-gray-700">UI/UX Designer</p>
                </div>
                <div className="flex flex-col items-center h-[7.5rem] w-[7.5rem] mt-20 mx-4 sm:mx-4 md:mx-10 ">
                    <img src="/assets/verma.jpeg" className="rounded-lg"></img>
                    <p className="font-semibold text-lg text-gray-800">Aditya Verma</p>
                    <p className="text-sm text-gray-700">Model Design</p>
                    <p className="text-sm text-gray-700">Content writer</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Team;