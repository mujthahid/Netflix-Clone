import React from 'react'
import {AiFillMobile} from 'react-icons/ai'
import {GrMail} from 'react-icons/gr'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import './Contact.css'

function Contact() {
  return (
    <div className='contact'>
<div className='contactDetails'>
    <h3>
        Contact
</h3>
<p>Mujthahid K</p>
<p>Malappuram DT</p>
<p>Kerala</p>
<p className='contactMethods'><span className='mobile'><AiFillMobile/></span> 7907174473</p>
<p className='contactMethods'><span className='email'><GrMail/></span> mujthahidk@gmail.com</p>

</div>

<div className='socialMedia'>
    <h4>Connect on Social Media</h4>
<div className='socialMediaList'>
<a href="https://www.linkedin.com/in/mujthahid-k-650709125/">< AiFillLinkedin/></a>
<a href="https://github.com/mujthahid"><AiFillGithub/></a>
<a href="https://www.instagram.com/mujthahid_k/"><AiFillInstagram/></a>
<a href="https://wa.me/message/O2ABJBD7CTNID1"><AiOutlineWhatsApp/></a>
</div></div>
    </div>
  )
}

export default Contact