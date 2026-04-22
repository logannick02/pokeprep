import "./UtilWrapper.css";
import { Tabs, TabsTrigger, TabsContent, TabsList } from "../Tabs/Tabs";
import { TypeMatchup } from "../TypeMatchup/TypeMatchup";

export const UtilWrapper = () => {
    // three components: type matchup, speed matchup, damage calculator
    return (
        <div className="util-wrapper">
            <Tabs defaultValue="type" defaultIndex={0}>
                <TabsList>
                    <TabsTrigger value="type" index={0}>Type Matchup</TabsTrigger>
                    <TabsTrigger value="speed" index={1}>Speed Tiers</TabsTrigger>
                    <TabsTrigger value="damage" index={2}>Damage Calc</TabsTrigger>
                </TabsList>
                <TabsContent value="type"><TypeMatchup /></TabsContent>
                <TabsContent value="speed"><p>Speed Tiers</p></TabsContent>
                <TabsContent value="damage"><p>Damage Calc</p></TabsContent>
            </Tabs>
        </div>
    );
}

