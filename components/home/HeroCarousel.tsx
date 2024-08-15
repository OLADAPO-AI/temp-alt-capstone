import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import pexel1 from '@/public/images/pexel1.jpg'
import pexel2 from '@/public/images/pexel2.jpg'
import pexel3 from '@/public/images/pexel3.jpg'
import pexel4 from '@/public/images/pexel4.jpg'

const carouselImages = [pexel1, pexel2, pexel3, pexel4]

function HeroCarousel() {
  return (
    <div className="hidden lg:block ">
      <Carousel>
        <CarouselContent>
          {carouselImages.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="p-2">
                    <Image
                      src={image}
                      alt="hero"
                      className="w-full h-[24rem] rounded-md object-cover"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
export default HeroCarousel
