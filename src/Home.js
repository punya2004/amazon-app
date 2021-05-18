import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
           <img 
                className="home__img" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
                />
                <div className="home__row">
                <Product 
                    id="12321341"
                    title="My LifeAn Illustrated Autobiography
                    by A P J Abdul Kalam and Prabhjyot Majithia | 1 December 2016"
                    price={450.96}
                    rating={4}
                    image="https://harpercollins.co.in/PowerPoint_jpg/9789352643189.jpg"
                    />
                    <Product 
                    id="123256341"
                    title="Alexa: 272 Funniest Easter Egg Questions (Amazon Echo, Amazon Dot, Amazon Alexa)
                    by Mark Perner  | 17 December 2016"
                    price={4499.00}
                    rating={5}
                    image="data:image/jpeg;base64,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"
                    /> 
                </div> 
                <div className="home__row">
                <Product 
                    id="3245678"
                    title="Samsung Galaxy Tab S6 Lite 26.31 cm (10.4 inch), S-Pen in Box, Slim and Light, Dolby Atmos Sound, 4 GB RAM, 64 GB ROM, Wi-Fi Tablet, Oxford Grey"
                    price={68650.00}
                    rating={5}
                    image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ8oAobzNL6M4ACDwlRyejR5ix9997DfOIiqB0afpz2oJ4iQQGSK_YbIhBwDB6uIMCGJaOp--JI8SFeGw3o307qhdf7jiCJsu_2KQLbIzjXsSkwa9s6L_AL&usqp=CAE"
                    />
                    <Product 
                    id="7890654"
                    title="
                    RUUBY Portable Electric USB Juice Maker Juicer Bottle Blender Grinder Mixer,4 Blades Rechargeable Bottle with (Multi color)"
                    price={499.00}
                    rating={4}
                    image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQf1ubemSYeSfBXK-RjZCuhadlvedyTi2InIhhYBxXcIU6073yrtLgmweausc4gNh0zScJCTc_Jn42pXxWpaml_-a_x0HEyzCHuTDDaPEsEjEOi6HC5-vUTKA&usqp=CAE"
                    /> 
                    <Product 
                    id="8905642"
                    title="iPhone 12 PRO USER GUIDE: A Step by Step Beginners Manual to Master Apple iPhone 12 Pro; Including Tips, Tricks, And Hacks for iOS 14
                    by Tommy F Jackson | 2 November 2020"
                    price={122678.96}
                    rating={5}
                    image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQh1yzdVc6I2t89lvaq1OhqNsCCPaZnbvtdjwJYPmsK4k8Ie6-uSwpZqMyDb7Uksk08ci8sSjLoOMg0tJPJ2P2Gh1qTizTSgE195Xa1lIYRZQgmxRWjxpOSdg&usqp=CAE"
                    /> 
                </div> 
                <div className="home__row">
                <Product 
                    id="2478094"
                    title="LG 80 cms (32 inches) HD Ready Smart LED TV 32LM636BPTB (Dark Iron Gray) (2019 Model)"
                    price={65750.00}
                    rating={5}
                    image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQIo3XUdo2wx4oFtDxsdkLiXCucEg5Iqx-csHRDb9iHDLT15dG1i6PFuMcFXhjmJXWXU-DCsCyudMBXPTBlbdx7bHbdw2lWh871_PpSlwdN2N6p6sPOa4MLVOs&usqp=CAE"
                    />
                    <Product 
                    id="5708901"
                    title="True Indian Special Combo Pack Buy 1 get 1 Free Sport Gym Shaker and Sipper Bottle/Protein Shaker/Gym"
                    price={650.00}
                    rating={4}
                    image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRD6jV8XvI9JuOMb2cN1J0n-m-4vXfevKyBogvKiGlmLvLaTw4CApGFERZeiwPNTfO2W00i_xP21Z31_4XklzESdx5IYthxadROXrtkHADRdrLFE_c-DQZe8A&usqp=CAE"
                    /> 
                    <Product 
                    id="9086423"
                    title="WOW Skin Science Onion Oil Ultimate Hair Care Kit (Shampoo + Hair Conditioner + Hair Oil), 800 ml"
                    price={1297.96}
                    rating={5}
                    image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQvQpAdXqszrqfyvDh1qJqvszeRQe4tXnFqAAMrR5UeaYJlv3J21fsUfHbsmICr4CNez7qhHEf5QbCVo5sjDNugS0Ax_CcBt-KjjRSTTa3LAX4YUe36kggA&usqp=CAE"
                    /> 
                </div> 
                <div className="home__row">
                <Product 
                    id="2478094"
                    title="WOW Skin Science Apple Cider Vinegar Foaming Face Wash - with Organic Certified Himalayan Apple Cider"
                    price={489.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61Z+o43czoS._AC_UL480_FMwebp_QL65_.jpg"
                    />
                    <Product 
                    id="5708901"
                    title="Men's Wonder-13 Sports Running Shoes"
                    price={4678.00}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61ZufcDW75L._AC_UL480_FMwebp_QL65_.jpg"
                    /> 
                    <Product 
                    id="9086423"
                    title="Juarez JRZ23UK/NA 23 Concert Size Ukulele Kit, AQUILA Strings, Sapele Body, Rosewood Fingerboard, Matt"
                    price={1397.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61ukjxL-5SL._AC_UL480_FMwebp_QL65_.jpg"
                    /> 
                </div> 
                <div className="home__row">
                <Product 
                    id="46709843"
                    title="Skyled 138.8cm (55inches) 2GB RAM and 16GB ROM 4K Ultra HD Smart Certified Android Led Tv Black(2020 Model) with Surround Sound bar,Voice Remote"
                    price={122345.96}
                    rating={5}
                    image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTwWiDUd2D-DEon19CekibGSbWDvYBq_licIf5HrOy2tnV7_taGmNfDKKocPPwQcF8AF39oyiWgoJH2CHCmQlwxXOoDr1PnFFLjunldOlQ8kmNNKdBjg4Ir_g&usqp=CAE"
                    />
                </div> 

                
        </div>
    )
}

export default Home
