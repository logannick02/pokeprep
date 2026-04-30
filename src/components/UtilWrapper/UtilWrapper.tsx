import "./UtilWrapper.css";
import { Tabs, TabsTrigger, TabsContent, TabsList } from "../Tabs/Tabs";
import { Pokemon } from "../../classes/Pokemon";
import { TypeMatchup } from "../TypeMatchup/TypeMatchup";
import { SpeedTiers } from "../SpeedTiers/SpeedTiers";

export const UtilWrapper = ({yourTeam, opponentTeam}: {yourTeam: (Pokemon|undefined)[], opponentTeam: (Pokemon|undefined)[]}) => {
    // three components: type matchup, speed matchup, damage calculator
    return (
        <div className="util-wrapper">
            <Tabs defaultValue="type" defaultIndex={0}>
                <TabsList>
                    <TabsTrigger value="type" index={0}>Type Matchup</TabsTrigger>
                    <TabsTrigger value="speed" index={1}>Speed Tiers</TabsTrigger>
                    <TabsTrigger value="damage" index={2}>Damage Calc</TabsTrigger>
                </TabsList>
                <TabsContent value="type"><TypeMatchup yourTeam={yourTeam} opponentTeam={opponentTeam}/></TabsContent>
                <TabsContent value="speed"><SpeedTiers/></TabsContent>
                <TabsContent value="damage"><p>Work In Progress</p></TabsContent>
            </Tabs>
        </div>
    );
}

