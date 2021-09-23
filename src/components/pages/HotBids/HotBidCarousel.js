import React from 'react'
import Carousel from 'react-elastic-carousel'; 
import styled from 'styled-components'
import { HotBidCard } from './HotBidCard';
import HotBidCarouselData from './HotBidCarouselData';



export const HotBidCarousel = () => {
    
    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 500, itemsToShow: 2},
        {width: 768, itemsToShow: 4},
        {width: 1200, itemsToShow: 4}
    ]

    return (
        <Carousel breakPoints={breakPoints}>
            <HotBidCard
                imgtravis={HotBidCarouselData[0].imgtravis} 
                nftimgsrc={HotBidCarouselData[0].nftimgsrc} 
                checkicon={HotBidCarouselData[0].checkicon}
                nfttitle={HotBidCarouselData[0].nfttitle}
                ethprice={HotBidCarouselData[0].ethprice}
                highestbid={HotBidCarouselData[0].highestbid}
                bidsitems={HotBidCarouselData[0].bidsitems}
                links={HotBidCarouselData[0].links}
                shareitems={HotBidCarouselData[0].shareitems}
                reportitems={HotBidCarouselData[0].reportitems}
            />
            <HotBidCard
                imgtravis={HotBidCarouselData[1].imgtravis} 
                nftimgsrc={HotBidCarouselData[1].nftimgsrc} 
                checkicon={HotBidCarouselData[1].checkicon}
                nfttitle={HotBidCarouselData[1].nfttitle}
                ethprice={HotBidCarouselData[1].ethprice}
                highestbid={HotBidCarouselData[1].highestbid}
                bidsitems={HotBidCarouselData[1].bidsitems}
                links={HotBidCarouselData[1].links}
                shareitems={HotBidCarouselData[1].shareitems}
                reportitems={HotBidCarouselData[1].reportitems}
            />
            <HotBidCard
                imgtravis={HotBidCarouselData[2].imgtravis} 
                nftimgsrc={HotBidCarouselData[2].nftimgsrc} 
                checkicon={HotBidCarouselData[2].checkicon}
                nfttitle={HotBidCarouselData[2].nfttitle}
                ethprice={HotBidCarouselData[2].ethprice}
                highestbid={HotBidCarouselData[2].highestbid}
                bidsitems={HotBidCarouselData[2].bidsitems}
                links={HotBidCarouselData[2].links}
                shareitems={HotBidCarouselData[2].shareitems}
                reportitems={HotBidCarouselData[2].reportitems}
            />
            <HotBidCard
                imgtravis={HotBidCarouselData[3].imgtravis} 
                nftimgsrc={HotBidCarouselData[3].nftimgsrc} 
                checkicon={HotBidCarouselData[3].checkicon}
                nfttitle={HotBidCarouselData[3].nfttitle}
                ethprice={HotBidCarouselData[3].ethprice}
                highestbid={HotBidCarouselData[3].highestbid}
                bidsitems={HotBidCarouselData[3].bidsitems}
                links={HotBidCarouselData[3].links}
                shareitems={HotBidCarouselData[3].shareitems}
                reportitems={HotBidCarouselData[3].reportitems}
            />
            <HotBidCard
                imgtravis={HotBidCarouselData[4].imgtravis} 
                nftimgsrc={HotBidCarouselData[4].nftimgsrc} 
                checkicon={HotBidCarouselData[4].checkicon}
                nfttitle={HotBidCarouselData[4].nfttitle}
                ethprice={HotBidCarouselData[4].ethprice}
                highestbid={HotBidCarouselData[4].highestbid}
                bidsitems={HotBidCarouselData[4].bidsitems}
                links={HotBidCarouselData[4].links}
                shareitems={HotBidCarouselData[4].shareitems}
                reportitems={HotBidCarouselData[4].reportitems}
            />
            <HotBidCard
                imgtravis={HotBidCarouselData[5].imgtravis} 
                nftimgsrc={HotBidCarouselData[5].nftimgsrc} 
                checkicon={HotBidCarouselData[5].checkicon}
                nfttitle={HotBidCarouselData[5].nfttitle}
                ethprice={HotBidCarouselData[5].ethprice}
                highestbid={HotBidCarouselData[5].highestbid}
                bidsitems={HotBidCarouselData[5].bidsitems}
                links={HotBidCarouselData[5].links}
                shareitems={HotBidCarouselData[5].shareitems}
                reportitems={HotBidCarouselData[5].reportitems}
            />
        </Carousel>
    )
}
