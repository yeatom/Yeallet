import {Component} from "react";
import {FlatList, Image, View, StyleSheet, Text} from "react-native";

type CardListProps = {
    cardItemProps?: CardItemProps,
    headerProps?: HeaderProps,
    indicatorProps?: IndicatorProps,
    orientation: Orientation,
    data: Array<CardItemData>,
}

export enum Orientation {
    Landscape,
    Portrait,
}

type CardItemData = {
    source: string,
    text: string,
}

type CardItemProps = {
    customComponent?: Component,
    width?: number,
    height?: number,
    space?: number,
    underlineTextSize?: number,
    roundCorner?: boolean,
}

type HeaderProps = {
    visible: boolean,
    customComponent?: Component,
    textSize?: number,
}

type IndicatorProps = {
    visible: boolean
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


function CardItem(data: CardItemData) {
    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Image
                style={styles.tinyLogo}
                source={{uri: data.source}}/>
            <Text>
                {data.text}
            </Text>
        </View>);
}

export default function CardList(props: CardListProps) {
    function renderItem({item}: { item: CardItemData }) {
        return <CardItem source={item.source} text={item.text}/>
    }

    return (
        <FlatList
            horizontal={props.orientation === Orientation.Landscape}
            data={props.data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
        />
    )
}


