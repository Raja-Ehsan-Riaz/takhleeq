import Image from "next/image";
import Neuro from "../../../public/Images/neuro.png";
const NeuroMarketing = () => {
  return (
    <div className="flex flex-col lg:flex-row pl-[5%] lg:pl-[0%] lg:pr-[5%] py-28 gap-12 lg:gap-[5%] items-center overflow-hidden">
      <div className="lg:w-[40%]  ">
        <Image src={Neuro} alt="Man with brain"  />
      </div>
      <div className="w-full lg:w-[55%]">
        <h2 className="uppercase text-5xl text-left text-[#8838D3] font-bold">
          AI Neuro <span className="text-black ">marketing</span> <br />
          <span className="text-black">
            Engines
          </span>
        </h2>
        <p className="text-lg mt-4">
          Neuromarketing is a burgeoning field that applies neuroscience
          principles to understand and influence consumer behavior. By utilizing
          techniques such as brain imaging, eye tracking, and biometrics,
          neuromarketers delve into the subconscious reactions and emotional
          responses of consumers to marketing stimuli. This deeper understanding
          allows businesses to tailor their strategies more effectively,
          crafting advertisements, products, and experiences that resonate with
          consumers on a subconscious level. {" "}
        </p>
        <div className="text-lg mt-6">
          Neuromarketing sheds light on the underlying motivations and
          decision-making processes of individuals, offering valuable insights
          into how brands can better connect with their target audiences and
          drive engagement and sales.
        </div>
      </div>
    </div>
  );
};

export default NeuroMarketing;
