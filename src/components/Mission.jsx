import { FaGraduationCap } from "react-icons/fa";

const Mission = () => {
    return <div className="px-32 mt-[130px]">
        <div className="w-1/2 mx-auto text-center space-y-4 ">
            <p className="btn btn-outline text-black font-semibold">Explore More</p>
            <h1 className="text-5xl  font-bold">Navigate through our Pages</h1>
            <p>Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
            <div className="border-2 border-black rounded-lg py-8 px-4  p-12  shadow-2xl border-b-8 border-r-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-semibold ">Mission</h1>
                    <img src="https://i.ibb.co.com/TvW11p5/Icon.png" alt="" />
                </div>
                <p className="mt-8">At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.</p>
            </div>
            <div className="border-2 border-black rounded-lg py-8 px-4  p-12  shadow-2xl border-b-8 border-r-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-semibold  ">Vision</h1>
                    <img src="https://i.ibb.co.com/vwnK72C/Icon-1.png" alt="" />
                </div>
                <p className="mt-4">Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.</p>
            </div>
        </div>

    </div>;
};
export default Mission;