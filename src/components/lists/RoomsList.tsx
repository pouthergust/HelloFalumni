import ListOptionButton from "../Buttons/ListOptionButton";

type RoomsListProps = {
    rooms: any[]
}

function RoomsList({ rooms }: RoomsListProps) {

    const edit = () => {
        console.log('needs to implement')
      }
    
      const view = () => {
        console.log('needs to implement')
      }

    return (
        <div className="c-rooms --listing">
          
          {rooms.map((element, index) => {
              return (
                <div key={index} className="c-rooms__item wrapper">
                  <span className="c-rooms__title">{element.room}</span>
                  <ListOptionButton handleClick={edit} type="edit"/>
                  <ListOptionButton handleClick={view} type="view"/>
                </div>
              )
            })}
        </div>
      )
}

export default RoomsList;