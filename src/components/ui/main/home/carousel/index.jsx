import carouselImage from "@/assets/carousel-image.png";
import filled from "@/assets/icons/filled-rating.svg";
import quotationIcon from "@/assets/icons/qoutation.svg";
import unfilled from "@/assets/icons/unfilled-rating.svg";
import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function CarouselSlider() {
  const carouselDatas = [
    {
      name: "Cameron Williamson",
      designation: "CEO, XYZ Compnay",
      rating: 3,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.",
    },
    {
      name: "Cameron Williamson",
      designation: "CEO, XYZ Compnay",
      rating: 4,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.",
    },
    {
      name: "Cameron Williamson",
      designation: "CEO, XYZ Compnay",
      rating: 5,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.",
    },
    {
      name: "Cameron Williamson",
      designation: "CEO, XYZ Compnay",
      rating: 4,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.",
    },
    {
      name: "Cameron Williamson",
      designation: "CEO, XYZ Compnay",
      rating: 4,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.",
    },
  ];
  // Star rating component
  const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          key={i}
          src={i <= rating ? filled : unfilled}
          alt={i <= rating ? "filled star" : "unfilled star"}
          className="w-5 h-5"
        />
      );
    }
    return <div className="flex gap-1">{stars}</div>;
  };

  return (
    <div className="w-full p-20 sm:p-24 lg:p-28 xl:p-32 bg-[#23938B]">
      <Carousel className="w-full max-w-[1200px] mx-auto">
        <CarouselContent className="-ml-[1px]">
          {carouselDatas.map((carouselData, index) => (
            <CarouselItem key={index} className="pl-0">
              <Card className="text-white flex flex-col-reverse xl:flex-row justify-between bg-[#23938B] border-none shadow-none min-h-[500px] xl:h-[551px]">
                <CardContent className="xl:w-[60%] w-full flex flex-col justify-between p-6 xl:gap-8 gap-6">
                  <div>
                    <img
                      src={quotationIcon}
                      alt="quote"
                      className="w-12 h-12 xl:w-20 xl:h-20"
                    />
                    <div className="flex flex-col gap-3 mt-6">
                      <h2 className="text-2xl xl:text-3xl font-medium">
                        {carouselData.name}
                      </h2>
                      <p className="text-base">{carouselData.designation}</p>
                      <StarRating rating={carouselData.rating} />
                      <p className="mt-4 text-base leading-[26px] text-white/60">
                        {carouselData.review}
                      </p>
                    </div>
                  </div>
                </CardContent>
                <div className="xl:w-[40%] w-full h-[300px] xl:h-full rounded-md">
                  <img
                    src={carouselImage}
                    alt="profile"
                    className="w-full h-full object-cover rounded-md shrink-0"
                  />
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center gap-6 mt-8 xl:ml-6 justify-center xl:justify-start">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselSlider;
