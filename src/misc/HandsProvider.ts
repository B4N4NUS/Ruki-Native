export default function getHand(id: number) {
    switch (id) {
        case 0: return "../../assets/hands.hand-a.png"
        case 1: return "../../assets/hands.hand-b.png"
    }

    return "../../assets/hands.hand-a.png"
}