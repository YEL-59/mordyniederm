import carouselImage from '@/assets/carousel-image.png';
import quotationIcon from '@/assets/icons/qoutation.svg';
import { Card, CardContent } from '@/components/ui/card';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

function CarouselSlider() {
  const carouselDatas = [
    {
      name: 'Cameron Williamson',
      designation: 'CEO, XYZ Compnay',
      rating: 4,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.",
    },
    {
      name: 'Cameron Williamson',
      designation: 'CEO, XYZ Compnay',
      rating: 4,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.",
    },
    {
      name: 'Cameron Williamson',
      designation: 'CEO, XYZ Compnay',
      rating: 4,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.",
    },
    {
      name: 'Cameron Williamson',
      designation: 'CEO, XYZ Compnay',
      rating: 4,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.",
    },
    {
      name: 'Cameron Williamson',
      designation: 'CEO, XYZ Compnay',
      rating: 4,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.",
    },
  ];
  return (
    <div className="w-full p-32 bg-[#23938B]">
      <Carousel className="w-full max-w-[1200px] xl:h-[551px] mx-auto">
        <CarouselContent className="-ml-0">
          {carouselDatas.map((carouselData, index) => (
            <CarouselItem
              key={index}
              className="border-none outline-none rounded-0 pl-0"
            >
              <Card className="text-[#FFF] flex flex-col-reverse xl:flex-row justify-between gap-8 py-0 bg-[#23938B] border-none outline-none shadow-none">
                <CardContent className="basis-[50%] flex flex-col justify-between aspect-square p-6 gap-8">
                  <img src={quotationIcon} alt="icon" className="w-20 h-20" />
                  <div className="flex flex-col gap-3">
                    <h2 className="text-3xl font-medium">
                      {carouselData.name}
                    </h2>
                    <p className="text-base">{carouselData.designation}</p>
                    <div>
                      <p>{carouselData.rating}</p>
                    </div>
                    <p className="mt-4 text-base leading-[26px] text-white text-opacity-60">
                      {carouselData.review}
                    </p>
                  </div>
                </CardContent>
                <div className="basis-[50%]">
                  <img
                    src={carouselImage}
                    alt="image"
                    className="w-full h-full"
                  />
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Move navigation buttons here (outside CarouselContent) */}
        <div className="flex items-center gap-6 mb-4 ml-6 justify-center xl:justify-start">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselSlider;
