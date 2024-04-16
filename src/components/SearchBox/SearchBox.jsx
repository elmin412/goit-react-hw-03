import style from "./SearchBox.module.css"

export default function SearchBox({value, onFilter}) {


    return (
        <div className={style.searchBorder} >
            <p>Find contacts by name</p>

            <input 
                type="text"
                value={value}
                onChange={(e) => onFilter(e.target.value)}
                
            />
        </div>
    );
}