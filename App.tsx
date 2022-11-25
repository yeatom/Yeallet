import CardList, {Orientation} from "./component/CardList";

export default function App() {
    return (
        <CardList
            orientation={Orientation.Landscape}
            data={[
                {
                    source: "https://bobbyhadz.com/images/blog/typescript-binding-element-implicitly-has-an-any-type/banner.webp",
                    text: "123"
                }
            ]}/>
    );
}
