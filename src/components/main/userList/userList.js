

function UserList() {
    let userBuyList = [{id: 1, name: 'Apple', price: 5}, {id: 2, name: 'Orange juice', price: 20}, {
        id: 3,
        name: 'Xbox',
        price: 250
    }]
    let listItem = userBuyList.map(item => <li key={item.id}>{item.name}: {item.price}$</li>)

    return <div>{listItem}</div>
}

export default UserList;