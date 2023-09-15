
import { useEffect } from "react"
import React from "react"
import { CarouselRef } from "antd/es/carousel"

function useCarousalScroll(Ref: React.MutableRefObject<CarouselRef | null>)
{
    useEffect(() => {
        const carouselContainer = Ref.current?.innerSlider.list
        let scrolling = false
      
       
        if (carouselContainer) {
         
        }
          const scrollHandler = (event: WheelEvent) => {
              if (scrolling) return
        
              scrolling = true
        
              if (event.deltaY > 0) {
                Ref.current?.next() 
              } else {
                Ref.current?.prev() 
              }
        
              setTimeout(() => {
                scrolling = false
              }, 400) 
            }
        
            carouselContainer.addEventListener("wheel", scrollHandler)
        
            return () => {
              carouselContainer.removeEventListener("wheel", scrollHandler)
            }
            
    }, [])
  
    
}

export default useCarousalScroll