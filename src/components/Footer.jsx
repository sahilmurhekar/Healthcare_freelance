import React from 'react'
import {Phone, MapPin, Mail,Star,Gavel,Scale} from 'lucide-react'
import {FaFacebook} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 z-50 text-base-content p-10 mt-32">
  <aside>
    <img src='src/assets/logo.png' alt='logo' className='w-25 h-10 brightness-200 contrast-0'/>
    <p>
    Team Engineers Medical
      <br />
     Delivering Quality Healthcare Devices Since 2024

    </p>
    <div className='flex flex-col items-start justify-start gap-4 mt-4'>
        <a target='_blank' href='https://mail.google.com/mail/?view=cm&to=teamengg04@gmail.com&body=Hi Team%2C' className='flex flex-row gap-2'><Mail className='w-5 h-5 text-white'/>support@teamengineers.com</a>
        <a target='_blank' href='https://www.facebook.com/teamengineersmedical' className='flex flex-row gap-2'><FaFacebook className='w-5 h-5 text-white'/>Connect with us on Facebook</a>
    </div>
  </aside>
  <div className="flex flex-col gap-4">
  <nav className="flex flex-col">
    <h6 className="footer-title flex flex-row gap-2"><Phone className="w-5 h-5 text-white" />CONTACT US</h6>
    <a className="pl-8">Dispatch: +91 9871285037</a>
    <a className="pl-8">Sales: +91 9210410266</a>
    <a className="pl-8">Service: +91 9811578621 , +91 8920450647</a>
  </nav>
  <nav className="flex flex-col">
    <h6 className="footer-title flex flex-row gap-2"><MapPin className="w-5 h-5 text-white" />ADDRESS</h6>
    <a className="pl-8">First Floor, D – 380 , Sector – 10 , NOIDA</a>
    <a className="pl-8">District : Gautam Buddha Nagar , U.P - 201301</a>
    <a className="pl-8">GSTIN : 09AAWFT2958G1ZE</a>
  </nav>
  </div>
  <nav>
    <h6 className="footer-title flex flex-row gap-2"> <Star className='h-5 w-5 text-white'/>Certifications</h6>
    <a target='_blank' href='https://drive.google.com/file/d/1VPtZGOG6Keu4XPiyOE1f2raXZ8-DIKML/view' className="link link-hover pl-8">ISO 13485:2016 Certification</a>
    <a target='_blank' href='https://drive.google.com/file/d/16AgN8h3WczFmswi3Tsd7swHCPHOl6w2t/view' className="link link-hover pl-8">IEC 60601-1:2024 Compliance</a>
  </nav>
  <nav>
    <h6 className="footer-title flex flex-row gap-2"><Scale className='h-5 w-5 text-white'/>Legal</h6>
    <a target='_blank' href='https://drive.google.com/file/d/175KQhN01J76mOm8jL2FcFgIGsshL5Lgh/view' className="link link-hover pl-8">Terms of use</a>
    <a target='_blank' href='https://drive.google.com/file/d/1U3jjTKyBkzRqam2dvNsiCJaaXsMklxK_/view' className="link link-hover pl-8">Privacy policy</a>
  </nav>
</footer>
  )
}

export default Footer