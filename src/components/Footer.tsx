import { MobileMenu } from "./MobileMenu";

export const Footer = () => {
    return (
        <div className="w-screen bottom-0 left-0 fixed h-24 flex items-center justify-between px-10 bg-[#111111]">
            <div>
                <MobileMenu/>
            </div>
        </div>
    )
}
