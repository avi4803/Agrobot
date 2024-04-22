import { AiFillRobot } from "react-icons/ai";

function About() {
    return (
        <div className="flex">
            <div className="flex flex-col sm:mx-16 mx-8 mt-16 w-full">
                <div className="flex items-center">
                    <h1 className="text-4xl font-semibold text-gray-800">Our First Prototype</h1>
                    <AiFillRobot className="h-8 w-8 ml-3 mt-2 text-red-500" />
                </div>
                <div className="flex flex-row mt-8 basis-10/12">
                    <div className="flex">
                        <p className="text-gray-800 my-1"><span className="font-semibold text-lg text-black">Functionality: </span>
                            The rover-based bot is an innovative tool designed to traverse various points across a designated land area,
                            meticulously analyzing critical soil parameters using advanced moisture sensors. By capturing data on moisture
                            levels, humidity, and soil temperature, the bot provides a comprehensive understanding of the soil's health and
                            current state. This information is consistently relayed in real-time to a web-based application via the Node-MCU microcontroller,
                            allowing for remote monitoring and management of the data. This efficient system can help optimize irrigation and other agricultural
                            practices to promote healthy crops and sustainable land management.</p>
                    </div>
                    <div className="flex justify-end w-full hidden sm:block">
                        <img src="src/assets/rover.png" className="h-44 w-44"></img>
                    </div>
                </div>
                <div className="flex flex-col mt-10">
                    <div className="flex">
                        <h1 className="text-2xl font-semibold">Components we used: </h1>
                    </div>
                    <div className="flex flex-row mt-8">
                        <div className="flex ">
                            <p><span className="font-semibold text-lg text-black">Adruino: </span> The Agrobot leverages an Arduino microcontroller to manage its
                                operation and movement, including integration with a Bluetooth module (HC-05) and motor drivers for tasks such as mobility and drilling.
                                The microcontroller is programmed to enable complete control through an Android application, allowing for precise, remote management of
                                the rover's actions. This setup provides a seamless user experience and enhances the rover's efficiency and effectiveness in performing
                                tasks in the field.</p>
                        </div>
                        <div className="flex justify-end w-full hidden sm:block relative bottom-4 left-10">
                            <img src="src/assets/adruino.png" alt="adruino" className="h-32 w-48" />
                        </div>
                    </div>
                    <div className="flex flex-row mt-10">
                        <div className="flex">
                            <p><span className="font-semibold text-lg text-black">Node mcu: </span>The Agrobot utilizes a Node MCU microcontroller equipped with an
                                ESP-8266 chip to seamlessly upload real-time data on moisture, temperature, and humidity from various sensors to a Firebase database. As
                                soon as there is any change in the sensor readings, the data is immediately updated in the database, providing live, up-to-date information
                                on the website. This allows for continuous monitoring and timely decision-making based on the latest conditions in the field.</p>
                        </div>
                        <div className="flex justify-end w-full hidden sm:block relative bottom-10 left-16">
                            <img src="src/assets/mcu.png" alt="adruino" className="h-48 w-44" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-10 md:mt-0">
                    <div className="flex">
                        <h1 className="text-2xl font-semibold">Future Additions: </h1>
                    </div>
                    <div className="flex flex-row mt-8">
                        <div className="flex">
                            <p><span className="font-semibold text-lg text-black">GPS: </span>The future vision for the ArgoBot includes
                                integrating a GPS module to enable full autonomy. GPS technology will allow the bot to navigate to different field
                                locations independently, eliminating the need for manual control. This advancement will streamline operations and make
                                land area monitoring and management more efficient. By autonomously traversing the field and analyzing soil, the bot will
                                save time and effort, allowing for focus on other critical tasks. This innovation aims to enhance productivity and support
                                sustainable agricultural practices.</p>
                        </div>
                        <div className="flex justify-end relative left-7 w-full hidden sm:block">
                            <img src="src/assets/gps.png" alt="GPS" className="h-32 w-44" />
                        </div>
                    </div>
                    <div className="flex flex-row mt-12">
                        <div className="flex ">
                            <p><span className="font-semibold text-lg text-black">Solar Panels: </span>The Agrobot currently uses manually charged batteries,
                                but there are plans to integrate solar panels to charge the battery while the rover operates in the fields. This upgrade will make
                                the Agrobot more eco-friendly and efficient by harnessing renewable energy. Solar panels will provide a continuous power source,
                                reducing downtime and increasing productivity. This sustainable approach will extend the Agrobot's operational time and minimize
                                its environmental impact.</p>
                        </div>
                        <div className="flex justify-end mt-8 w-full relative bottom-8 left-6 hidden sm:block">
                            <img src="src/assets/solar.png" alt="Solar Panel" className="h-28 w-60" />
                        </div>
                    </div>
                    <div className="flex flex-row mt-8 mb-24">
                        <div className="flex">
                            <p><span className="font-semibold text-lg text-black">Camera: </span>The Agrobot will going to be equipped with a camera module to provide live
                                visual monitoring of the rover's working environment. The camera will feeds real-time imagery that can be analyzed to assess crop health,
                                including potential insect infestations or signs of nutrient deficiencies. These insights enable targeted interventions, such as
                                applying specific fertilizers or pest control measures, leading to more efficient and sustainable agricultural practices.</p>
                        </div>
                        <div className="flex justify-end relative left-14 w-full hidden sm:block">
                            <img src="src/assets/camera.png" alt="camera" className="h-36 w-48" />
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default About;