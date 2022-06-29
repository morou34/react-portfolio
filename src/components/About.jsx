import React from 'react'

export const About = () => {
  return (
    <div name="about"
        className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center  w-full h-full'>
            <div className='pb-2'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-6'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat nisi corporis maiores beatae quis sunt odio fugit, laboriosam vitae hic dignissimos tenetur cum in ad explicabo voluptatibus fugiat vel dicta dolorum illo mollitia iste, id quod asperiores. Expedita optio minus dolorem possimus delectus nobis excepturi. Animi aliquam veritatis natus doloribus?
            </p>
            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi laborum odio accusamus soluta omnis, alias beatae, animi quos non ullam velit nulla maiores eligendi ut sit necessitatibus accusantium. Nemo, deleniti eius. Inventore velit cum, soluta sint unde maxime. Fugit minus aspernatur autem et consequuntur sed inventore blanditiis sunt neque ab.
            </p>
        </div>
    </div>
  )
}

export default About