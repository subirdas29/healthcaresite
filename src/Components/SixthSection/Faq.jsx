import React from 'react'

const Faq = () => {
  return (
    <div className='mx-20'>
        <button className='outline outline-1 px-5 py-2 rounded rounded-full mb-6'>Faq</button>
        <h1 className='text-4xl font-semibold mb-6'>Frequntly Asked Question</h1>
      <div className="collapse collapse-arrow bg-[#FFFFF5] px-6">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium border-b-2"> What are your office hours?</div>
  <div className="collapse-content">
    <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-[#FFFFF5] px-6 mt-4">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">How can I schedule an appointment?</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-[#FFFFF5] px-6 mt-4">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Do you accept insurance?</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-[#FFFFF5] px-6 mt-4">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">What should I bring to my appointment?</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-[#FFFFF5] px-6 mt-4">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Do you offer telemedicine appointments?</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
    </div>
  )
}

export default Faq
