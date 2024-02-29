const ServiceDetails = ({ punchline, detail, components, strategy }) => {
  return (
    <>
      <div className="w-full h-[30vw] bg-gray-400"></div>
      <div>
        <div className="text-4xl font-bold mb-4">{punchline}</div>
        <div>{detail}</div>
        <div className="py-6 ml-8">
          <ul className="list-disc  flex flex-col gap-2">
            {components.map((component,index) => (
              <li key={index}>
               <span className="font-bold">{component.heading}</span>
               <span className="ml-2">{component.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full h-[25vw] bg-gray-400"></div>
      <div>
        <div className="text-3xl font-bold uppercase mb-4">Our Strategy</div>
        <div>
         {strategy}
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
