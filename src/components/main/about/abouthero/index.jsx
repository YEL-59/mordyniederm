import aboutimg from "../../../../assets/aboutimg.png";

const AboutHero = () => {
  return (
    <>
      <div className="container mx-auto ">
        <h1 className="text-4xl font-bold text-center mt-10">About Us</h1>
        <p className=" mt-10 mb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries But also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <div>
          <img src={aboutimg} alt="" />
        </div>
      </div>
    </>
  );
};

export default AboutHero;
