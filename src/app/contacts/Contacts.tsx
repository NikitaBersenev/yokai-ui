import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {navigationMenuTriggerStyle} from "@/components/ui/navigation-menu"
import Link from "next/link";


export default function Contacts() {
    // let data = [1, 2, 3, 4, 5];
    let data = [1];
    let type = "Contact";
    return (
        <>
            <h1 className="text-4xl my-10"> {type} </h1>

            {data.map(item => {
                return (
                    <>
                        <Card className="my-4">
                            <CardHeader>
                                <CardTitle>{type} {item}</CardTitle>
                                <CardDescription>{type} Description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>{type} Content</p>
                            </CardContent>
                            {/*<CardFooter>*/}
                            {/*    <p>Project Footer</p>*/}
                            {/*</CardFooter>*/}
                        </Card>
                    </>
                )
            })}
        </>
    );
}

