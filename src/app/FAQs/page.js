import FAQ from "@/components/FAQsPage/FAQ";
import FAQhero from "@/components/FAQsPage/FAQhero";
import SMicons from "@/components/FAQsPage/SMicons";


export default function FAQs() {
    return (
        <div>
            <FAQhero />
            <div className="flex justify-center items-center py-28 px-[5%]  bg-[#7957931A]">
                <FAQ />
            </div>
            <SMicons />
        </div>
    );
}
