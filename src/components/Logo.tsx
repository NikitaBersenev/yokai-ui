import Image from "next/image";

export default function Logo() {
    return (
        <>
            <div className="flex items-center flex-1">
                <Image src="/logo.jpg" alt="" width={60} height={60} className="h-16 rounded-full mr-2"/>
                <span className="text-2xl">Bersenev</span>
            </div>
        </>
    );
}
