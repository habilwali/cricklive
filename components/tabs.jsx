
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const MatchesTab = () => {
    return (

        <Tabs defaultValue="account" className=" flex justify-center space-x-2  mt-5 items-center">
            <TabsList className=" bg-none">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>

    );
}

export default MatchesTab;