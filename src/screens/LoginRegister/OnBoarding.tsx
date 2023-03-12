import { View, Text, TextInput, SafeAreaView } from "react-native";
import * as React from 'react';
import { TouchableOpacity, ScrollView } from "react-native";
import LoginPic from "../../assets/pics/login";
import StartPic from "../../assets/pics/start";
import GlobalIcon from "../../assets/pics/global";
import styles from "../../misc/Styles";
import WorkIcon from "../../assets/pics/work";

export default function OnBoarding({ route, navigation }) {
    const images = [<StartPic width="80%" />,
    <LoginPic width="80%" />,
    <WorkIcon width="80%" />,
    <GlobalIcon width="80%" />]
    const headers = ["Тематические уроки",
        "Общение с инвалидами",
        "Розыгрыш аймака",
        "O, глобус"]
    const texts = ["Как уже неоднократно упомянуто, диаграммы связей, инициированные исключительно синтетически, объявлены нарушающими общечеловеческие нормы этики и морали. Есть над чем задуматься: элементы политического процесса превращены в посмешище, хотя само их существование приносит несомненную пользу обществу! Ясность нашей позиции очевидна: курс на социально-ориентированный национальный проект влечет за собой процесс внедрения и модернизации инновационных методов управления процессами. Внезапно, интерактивные прототипы, вне зависимости от их уровня, должны быть рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Лишь тщательные исследования конкурентов функционально разнесены на независимые элементы.",
        "Идейные соображения высшего порядка, a также социально-экономическое развитие требует определения и уточнения экспериментов, поражающих по своей масштабности и грандиозности. B своём стремлении повысить качество жизни, они забывают, что социально-экономическое развитие создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий c учётом комплекса первоочередных требований. Повседневная практика показывает, что перспективное планирование в значительной степени обусловливает важность экспериментов, поражающих по своей масштабности и грандиозности. B частности, разбавленное изрядной долей эмпатии, рациональное мышление играет определяющее значение для инновационных методов управления процессами. Как уже неоднократно упомянуто, непосредственные участники технического прогресса формируют глобальную экономическую сеть и при этом — представлены в исключительно положительном свете.",
        "Господа, сплочённость команды профессионалов создаёт предпосылки для позиций, занимаемых участниками в отношении поставленных задач. Имеется спорная точка зрения, гласящая примерно следующее: диаграммы связей лишь добавляют фракционных разногласий и заблокированы в рамках своих собственных рациональных ограничений. C учётом сложившейся международной обстановки, внедрение современных методик способствует подготовке и реализации существующих финансовых и административных условий.",
        "Современные технологии достигли такого уровня, что убеждённость некоторых оппонентов в значительной степени обусловливает важность существующих финансовых и административных условий. Вот вам яркий пример современных тенденций — консультация k широким активом обеспечивает широкому кругу (специалистов) участие в формировании инновационных методов управления процессами."]
    const [page, setPage] = React.useState(0)

    // React.useEffect(() => {
    //     console.log("ONBOARDING")
    // }, [])

    const next = () => {
        if (page === images.length - 1) {
            skip()
            return
        }
        setPage(page + 1)
    }
    const skip = () => {
        navigation.navigate("Main")
    }

    return <SafeAreaView style={styles.screenContainer}>
        <ScrollView style={{ marginHorizontal: 30, flex: 1, height: "100%", }}
            showsVerticalScrollIndicator={false}>
            <View style={[{ flex: 1, justifyContent: "center", alignItems: "center" }]}>
                {images[page]}
            </View>
            <Text style={styles.littleText}>
                {(page + 1) + "/" + images.length}
            </Text>
            <Text style={styles.headerText}>
                {headers[page]}
            </Text>
            {/* <View style={{ height:1000, backgroundColor:"red"}}> */}
            <Text style={{ flex: 1, flexWrap: 'wrap' }}>
                {texts[page]}
            </Text>
            {/* </View> */}
        </ScrollView>
        <View style={{ flex: 0.3, marginHorizontal: 30, justifyContent: "flex-end" }}>
            <TouchableOpacity style={[styles.textButton, { marginHorizontal: 0, marginTop: 40 }]}
                onPress={() => {
                    next()
                }}
            >
                <Text style={styles.textButtonText}>
                    Далее
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.textWhiteButton, { marginHorizontal: 0, marginBottom: 30 }]}
                onPress={() => {
                    skip()
                }}
            >
                <Text style={[styles.textButtonText, { color: "black" }]}>
                    Пропустить
                </Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
}