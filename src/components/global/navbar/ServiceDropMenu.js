import Link from 'next/link';
import styles from './nav.module.css'


const ServicesDropMenu = () => {
    return (
        <div className={`${styles.dropGlass} absolute top-[110%] left-1/2 -translate-x-1/2  p-2 w-[220px] text-[15px]`}>
             <ul className='flex flex-col gap-2'>
                <li className={`${styles.dropInnerGlass} py-2 px-3 rounded-md hover:bg-primary hover:text-white`}>
                    <Link href='/'>
                        Mobile Apps
                    </Link>
                </li>
                <li className={`${styles.dropInnerGlass} py-2 px-3 rounded-md hover:bg-primary hover:text-white`}>
                    <Link href='/'>
                    Websites
                    </Link>
                </li>
                <li className={`${styles.dropInnerGlass} py-2 px-3 rounded-md hover:bg-primary hover:text-white`}>
                    <Link href='/'>
                        Custom Softwares
                    </Link>
                </li>
                <li className={`${styles.dropInnerGlass} py-2 px-3 rounded-md hover:bg-primary hover:text-white`}>
                    <Link href='/'>
                        UI / UX Designes
                    </Link>
                </li>
                <li className={`${styles.dropInnerGlass} py-2 px-3 rounded-md hover:bg-primary hover:text-white`}>
                    <Link href='/'>
                        Devops
                    </Link>
                </li>
                <li className={`${styles.dropInnerGlass} py-2 px-3 rounded-md hover:bg-primary hover:text-white`}>
                    <Link href='/'>
                        Digital Marketing
                    </Link>
                </li>
                <li className={`${styles.dropInnerGlass} py-2 px-3 rounded-md hover:bg-primary hover:text-white`}>
                    <Link href='/'>
                        AI & ML
                    </Link>
                </li>
                <li className={`${styles.dropInnerGlass} py-2 px-3 rounded-md hover:bg-primary hover:text-white`}>
                    <Link href='/'>
                        Block Chain
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default ServicesDropMenu