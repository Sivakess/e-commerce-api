import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from  '../components/NewsletterBox';


const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'}  text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptates rem temporibus tenetur dignissimos similique dolorum vel fuga quaerat ratione sed ab quibusdam deserunt nihil ad, necessitatibus dicta ex ipsam?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit doloremque consequuntur ex, fugiat expedita, totam officia eaque deserunt iste, repellendus est accusantium in illo. Illum necessitatibus expedita facere doloremque possimus.</p>
        <b className='text-gray-800'>Our Miossion</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia a voluptas excepturi vero delectus, esse expedita eaque itaque. Eveniet, quo minima veritatis aspernatur mollitia rem itaque suscipit numquam fugiat distinctio.</p>
        </div>
      </div>
      
      <div className='text-xl py-4'>
        <Title text1={'WHY'}  text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Cupiditate explicabo, totam voluptatem similique quasi, quae dicta ipsum at dolor alias beatae minus vero ad quaerat. Labore exercitationem cum nihil nisi.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Dolorum dicta ad autem sed ipsam blanditiis, rem nobis! Ipsum, incidunt repellendus necessitatibus adipisci tempora aliquid, aliquam consectetur soluta et, doloremque similique?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Cumque deleniti voluptatibus incidunt, in velit quidem dolore perspiciatis totam non eum reiciendis cum, quis repellendus illum!</p>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default About
