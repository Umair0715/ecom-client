import Link from 'next/link';
import styles from './nav.module.css'


const OffersDropMenu = () => {
    return (
        <div className={`${styles.dropGlass} absolute top-[110%] left-1/2 -translate-x-1/2 p-2 w-[250px] text-[15px]`}>
             <ul className='flex flex-col gap-2'>
                <li className={`${styles.dropInnerGlass} py-2 px-3 rounded-md hover:bg-primary hover:text-white`}>
                    <Link href='/'>
                        Software Development for Startup
                    </Link>
                </li>
                <li className={`${styles.dropInnerGlass} py-2 px-3 rounded-md hover:bg-primary hover:text-white`}>
                    <Link href='/'>
                        ERP Software Solutions
                    </Link>
                </li>
                <li className={`${styles.dropInnerGlass} py-2 px-3 rounded-md hover:bg-primary hover:text-white`}>
                    <Link href='/'>
                        EMR / EHR Software Solutions
                    </Link>
                </li>
                <li className={`${styles.dropInnerGlass} py-2 px-3 rounded-md hover:bg-primary hover:text-white`}>
                    <Link href='/'>
                        BPM Software Solutions
                    </Link>
                </li>
                <li className={`${styles.dropInnerGlass} py-2 px-3 rounded-md hover:bg-primary hover:text-white`}>
                    <Link href='/'>
                        Real Estate Solution
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default OffersDropMenu