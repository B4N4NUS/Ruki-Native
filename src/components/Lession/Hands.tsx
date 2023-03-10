import React from "react";
import { useState } from "react";
import { TextInput, View, Image } from "react-native";
import getHand from "../../misc/HandsProvider";
import styles from "../../misc/Styles";

export default function Hands({ hands }: { hands: number[] }) {
    return <View style={{ flexDirection: "row"}}>
        {hands?.map((item) => {
            switch (item) {
                case 0: return <Image style={styles.hand} source={require("../../assets/hands/hand-a.png")}/>
                case 1: return <Image style={styles.hand} source={require("../../assets/hands/hand-b.png")}/>
                case 2: return <Image style={styles.hand} source={require("../../assets/hands/hand-c.png")}/>
                case 3: return <Image style={styles.hand} source={require("../../assets/hands/hand-d.png")}/>
                case 4: return <Image style={styles.hand} source={require("../../assets/hands/hand-e.png")}/>
                case 5: return <Image style={styles.hand} source={require("../../assets/hands/hand-f.png")}/>
                case 6: return <Image style={styles.hand} source={require("../../assets/hands/hand-g.png")}/>
                case 7: return <Image style={styles.hand} source={require("../../assets/hands/hand-i.png")}/>
                case 8: return <Image style={styles.hand} source={require("../../assets/hands/hand-j.png")}/>
                case 9: return <Image style={styles.hand} source={require("../../assets/hands/hand-k.png")}/>
                
            }
        }
        )}
    </View>
}