import { getOrders, getMetals, getSizes, getStyles } from "./database.js"

const buildOrderListItem = (order) => {
    return `<li>
        Order #${order.id} was placed on ${order.timestamp}
    </li>`
}


const metals = getMetals()

// Remember that the function you pass to find() must return true/false
const foundMetal = metals.find(
    (metal) => {
        return metal.id === order.metalId
    }
)
// const totalCost = foundMetal.price

const sizes = getSizes()

// Remember that the function you pass to find() must return true/false
const foundSize = sizes.find(
    (size) => {
        return size.id === order.sizeId
    }
)
// const totalCost = foundSize.price

const styles = getStyles()

// Remember that the function you pass to find() must return true/false
const foundStyle = styles.find(
    (style) => {
        return style.id === order.styleId
    }
)
// const totalCost = foundStyle.price
const totalCost = foundSize.price + foundSize.price + foundMetal.price

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

`<li>
    Order #${order.id} cost ${costString}
</li>`

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}


