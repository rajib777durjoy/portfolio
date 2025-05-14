import Lottie from "lottie-react";
import animation from '../../../src/assets/ContactAnimations.json'
const Contact = () => {
    return (
        <div className="w-[100%] min-h-[500px] mt-20 ">
            <h1 className='text-xl lg:text-2xl text-center text-white mt-5 font-semibold'>Contact Page</h1>
            <div className="w-[100%] mx-auto grid md:grid-cols-2 gap-4 mt-10  rounded-md py-2">
                <div className="border border-t-4 border-sky-200 rounded-md py-2">
                    <form action="" className="w-[100%] mx-6 ">
                        <label className="label text-sky-200 font-semibold">Full Name</label>
                        <input type="text" className="w-[90%] mx-auto h-[35px] rounded-md my-2 border ps-2" name="name" placeholder="Enter you name" />
                        <label className="label text-sky-200 font-semibold">Email</label>
                        <input type="email" name="email" className="w-[90%] rounded-md mx-auto border my-2 h-[35px] ps-2" placeholder="Enter you email" />
                        <label className="label text-sky-200 font-semibold">About your self</label>
                        <textarea type='text' className="w-[90%] border  mx-auto rounded-md ps-2 " rows={5} placeholder="Bio" />
                        <div className="">
                            <button className="py-1 px-2 text-white rounded-md border-2 hover:text-sky-300 border-sky-300 hover:border-white text-center">Submit</button>
                        </div>
                    </form>
                </div>
                <div className='h-[400px] border border-t-4  border-sky-200 shadow-md shadow-sky-200 rounded-lg'>
                    <Lottie animationData={animation} className="w-[100%] h-[100%]  "></Lottie>
                </div>
            </div>


        </div>
    );
};

export default Contact;