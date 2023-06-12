import Link from 'next/link';
import styles from './nav.module.css'

const CompanyDropMenu = () => {
    return (
        <div className={`absolute top-[110%] left-1/2 -translate-x-1/2  p-2 w-[200px] text-[15px] z-[999] ${styles.dropGlass}`}>
             <ul className='flex flex-col gap-2'>
                <li className={` ${styles.dropInnerGlass} py-2 px-3 rounded-md hover:bg-primary hover:text-white`}>
                    <Link href='/'>
                        About Company
                    </Link>
                </li>
                <li className={` ${styles.dropInnerGlass} py-2 px-3 rounded-md hover:bg-primary hover:text-white`}>
                    <Link href='/'>
                        What We Do
                    </Link>
                </li>
                <li className={` ${styles.dropInnerGlass} py-2 px-3 rounded-md hover:bg-primary hover:text-white`}>
                    <Link href='/'>
                        How It Works
                    </Link>
                </li>
                <li className={` ${styles.dropInnerGlass} py-2 px-3 rounded-md hover:bg-primary hover:text-white`}>
                    <Link href='/'>
                        Careers
                    </Link>
                </li>
                <li className={` ${styles.dropInnerGlass} py-2 px-3 rounded-md hover:bg-primary hover:text-white`}>
                    <Link href='/'>
                        Contact Us
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default CompanyDropMenu