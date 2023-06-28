import Link from "next/link";
import {useRouter} from "next/router";

function Page(){
    const router = useRouter();
    const [subService] = router.query.[subService];
    return (
        <div>
        <h1>Details about product {[subService]}</h1>
        </div>
    )
}
export default Page;