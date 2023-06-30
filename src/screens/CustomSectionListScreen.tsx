import { SectionList, Text, View } from "react-native";
import { HeaderTitle, ItemSeparator } from "../components";
import { styles } from "../theme/appTheme";
import { useThemeContext } from "../hooks";

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: "DC Comics",
    data: [
      "Batman",
      "Superman",
      "Robin",
      "Batman",
      "Superman",
      "Robin",
      "Batman",
      "Superman",
      "Robin",
      "Batman",
      "Superman",
      "Robin",
      "Batman",
      "Superman",
      "Robin",
      "Batman",
      "Superman",
      "Robin",
    ],
  },
  {
    casa: "Marvel Comics",
    data: [
      "Antman",
      "Thor",
      "Spiderman",
      "Antman",
      "Antman",
      "Thor",
      "Spiderman",
      "Antman",
      "Antman",
      "Thor",
      "Spiderman",
      "Antman",
      "Antman",
      "Thor",
      "Spiderman",
      "Antman",
      "Antman",
      "Thor",
      "Spiderman",
      "Antman",
    ],
  },
  {
    casa: "Anime",
    data: [
      "Kenshin",
      "Goku",
      "Saitama",
      "Kenshin",
      "Goku",
      "Saitama",
      "Kenshin",
      "Goku",
      "Saitama",
      "Kenshin",
      "Goku",
      "Saitama",
      "Kenshin",
      "Goku",
      "Saitama",
      "Kenshin",
      "Goku",
      "Saitama",
    ],
  },
];

export const CustomSectionListScreen = () => {
  const {
    theme: { colors, dividerColor, dark },
  } = useThemeContext();
  return (
    <View style={{ ...styles.globalMargin, flex: 1 }}>
      {/* <HeaderTitle title="Section List" /> */}
      <SectionList
        stickySectionHeadersEnabled
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <HeaderTitle title="Section List" />}
        ListFooterComponent={() => (
          <View style={{ marginBottom: 70 }}>
            <HeaderTitle title={"Total de casas " + casas.length} />
          </View>
        )}
        sections={casas}
        keyExtractor={(item, index) => item + index}
        renderItem={(data) => {
          const { item } = data;
          //   console.log(data);
          return <Text style={{ color: colors.text }}>{item}</Text>;
        }}
        renderSectionHeader={({ section: { casa } }) => (
          <View style={{ backgroundColor: colors.background }}>
            <HeaderTitle title={casa} />
          </View>
        )}
        renderSectionFooter={({ section }) => (
          <HeaderTitle title={"Total: " + section.data.length} />
        )}
        SectionSeparatorComponent={() => <ItemSeparator />}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};
