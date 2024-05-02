import Image from "next/image";
const ServiceDetails = ({
  punchline,
  detail,
  components,
  strategy,
  images,
}) => {
  return (
    <>
      <div className="w-full h-[30vw]  relative overflow-hidden">
        <Image
          fill={true}
          style={{ objectFit: "cover", objectPosition: "0px 10%" }}
          src={images[1]}
          className=" absolute -z-10"
        />
      </div>
      <div>
        <div className="text-4xl font-bold mb-4">{punchline}</div>
        <div>{detail}</div>
        <div className="py-6 ml-8">
          <ul className="list-disc  flex flex-col gap-2">
            {components &&
              components.map((component, index) => (
                <li key={index}>
                  <span className="font-bold">{component.heading}</span>
                  <span className="ml-2">{component.text}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="w-full h-[30vw]  relative overflow-hidden">
        <Image
          fill={true}
          style={{ objectFit: "cover", objectPosition: "0px 10%" }}
          src={images[2]}
          className=" absolute -z-10"
        />
      </div>
      <div>
        <div className="text-3xl font-bold uppercase mb-4">Our Strategy</div>
        <div>{strategy}</div>
      </div>
    </>
  );
};

export default ServiceDetails;
