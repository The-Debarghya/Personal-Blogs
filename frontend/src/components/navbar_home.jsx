import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinux} from "@fortawesome/free-brands-svg-icons";
import { Pacifico } from 'next/font/google'
import Link from "next/link";


const FontPacifico = Pacifico({
    weight: '400',
    subsets: ['latin'],
})

export default function NavbarHome() {
    return (
        <Link href="/" >
            <div className="flex justify-center items-center gap-4 mb-20 shadow-lg py-2">
                <FontAwesomeIcon icon={faLinux} size="2xl" color="blue" />
                <h2 className={"text-2xl "+FontPacifico.className}>All Linux Stuff in One Place</h2>
            </div>
        </Link>
    );
}