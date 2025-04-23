import Checkmark from "@/assets/svg/checkmark";

export default function MissionSection() {
  return (
    <section className="bg-[#f7fefd] py-16 px-6 md:px-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Living Room"
            className="rounded-xl w-full h-[400px] object-cover"
          />
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Building"
              className="rounded-xl w-full h-[250px] object-cover"
            />
            <div className="bg-[#229d95] text-white rounded-xl p-6 flex flex-col justify-between ">
              <div>
                <p className="text-3xl font-semibold">280+</p>
                <p className="text-sm mt-1">Properties</p>
              </div>
              <div className="mt-auto flex justify-end">
                <button className="bg-white text-[#229d95] p-2 rounded-full">
                  <span className="sr-only">Arrow</span>→
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-[#0d3c3c]">
          <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
          <p className="text-gray-600 mb-6">
            But also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              "Lorem Ipsum is simply dummy",
              "It was popularised in them",
              "It was popularised in them",
              "Lorem Ipsum is simply dummy",
              "Lorem Ipsum is simply dummy",
              "Lorem Ipsum is simply dummy",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-gray-700">
                <Checkmark className="text-teal-500 w-5 h-5 mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
