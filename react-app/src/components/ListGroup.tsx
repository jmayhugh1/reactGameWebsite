import { Fragment } from "react";
import { MouseEvent } from "react";
import { useState } from "react";
interface Props {
    items: string[];
    heading: string;
    // (item : string) => voif
    onSelectItem: (item: string) => void;
}
function ListGroup({items, heading, onSelectItem}: Props) {
  // must tell react that this can be updated becaus eits local
  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>{heading}</h1>
      {items.length == 0 && <p> No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index)
              onSelectItem(item)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
