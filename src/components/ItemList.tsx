import Item from "./Item.tsx";

function ItemList() {
    return (
        <div className={'flex flex-wrap justify-evenly mt-4 sm:items-center'}>
            <Item/>
        </div>
    );
}

export default ItemList;