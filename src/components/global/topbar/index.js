import EnvelopeSvg from 'assets/svgs/EnvelopeSvg'
import LocationSvg from 'assets/svgs/LocationSvg'
import PhoneSvg from 'assets/svgs/PhoneSvg'
import React from 'react'

const TopBar = () => {
    return (
        <div>
            <div className='flex items-center justify-between text-secondary text-sm'>
                <div className='flex items-center gap-8 py-3'>
                    <a href="tel:+923015418172" className='flex items-center gap-2'>
                        <PhoneSvg size={20} />
                        <p>+92 301 5418172</p>
                    </a>
                    <div className='flex items-center gap-2'>
                        <EnvelopeSvg size={20} />
                        <p>info@vexedsolutions.com</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <LocationSvg size={20} />
                        <p>Model Town, Multan, Pakistan </p>
                    </div>
                </div>
                <div className='flex items-center gap-4 py-3'>
                    <a href="https://facebook.com" target='_blank'>
                        <img 
                        src='images/facebook.png' 
                        alt="Facebook" 
                        />
                    </a>
                    <a href="https://wa.me/03015418172" target='_blank'>
                        <img 
                        src='images/whatsapp.png' 
                        alt="Whatsapp" 
                        />
                    </a>
                    <a href="https://twitter.com" target='_blank'>
                        <img 
                        src='images/twitter.png' 
                        alt="Twitter" 
                        />
                    </a>
                    <a href="https://instagram.com" target='_blank'>
                        <img 
                        src='images/instagram.png' 
                        alt="Instagram" 
                        />
                    </a>
                    <a href="https://linkedin.com" target='_blank'>
                        <img 
                        src='images/linkedin.png' 
                        alt="Linkedin Profile" 
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TopBar