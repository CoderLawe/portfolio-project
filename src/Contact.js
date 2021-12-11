import Message from "./Message"

function Contact() {
    return (
        <section className="" id="contact">
            <div className="block md:flex justify-between transition-all duration-500 ease-out order-2 md:order-1 bg-black bg-opacity-75 mx-1 md:mx-5">
                {/* Left section with form */}
                    <div className="block  bg-darkBrown px-5 md:w-1/3 pt-10 rounded-md mx-5 md:ml-48 ">
                        <div className="flex justify-center">
                            <h5 className="text-3xl text-darkCoolYellow">Contact form</h5>
                        </div>

                        <Message />
                    </div>
                {/* Right section with text */}

                <div className="order-1 md:order-2 md:pr-32 md:pt-32">
                    <h5 className="hidden md:visible text-3xl text-gray-400 font-extralight max-w-3xl">Feel free to Leave me a message here!</h5>
                </div>
            </div>
        </section>
    )
}

export default Contact
